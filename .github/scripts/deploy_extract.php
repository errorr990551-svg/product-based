<?php
/**
 * IOTAFLOW Systems — High-Speed Automated ZIP Deployment Extractor
 * 
 * Flow:
 * 1. GitHub Actions builds React project & creates deploy.zip containing build folder.
 * 2. Uploads deploy.zip + this script via FTP (takes only 3-5 seconds!).
 * 3. GitHub Actions triggers this script with a secret token.
 * 4. This script unzips deploy.zip directly into public_html in ~1 second.
 * 5. Cleans up deploy.zip and self-destructs (unlinks this script) for 100% security.
 */

header('Content-Type: application/json; charset=utf-8');

// Disable output buffering
while (ob_get_level()) {
    ob_end_clean();
}

// 1. Secret Token Verification
$expected_secret = 'DEPLOY_SECRET_KEY';
$provided_secret = $_GET['secret'] ?? $_SERVER['HTTP_X_DEPLOY_SECRET'] ?? '';

if (empty($expected_secret) || empty($provided_secret) || !hash_equals($expected_secret, $provided_secret)) {
    http_response_code(403);
    echo json_encode([
        'status' => 'error',
        'message' => 'Unauthorized: Invalid or missing deployment secret token.'
    ]);
    exit;
}

// 2. Configure Execution Environment
@ini_set('memory_limit', '512M');
@ini_set('max_execution_time', '300');
@set_time_limit(300);
ignore_user_abort(true);

$target_dir = __DIR__;
$zip_file = $target_dir . '/deploy.zip';

// 3. Check for deploy.zip
if (!file_exists($zip_file)) {
    http_response_code(404);
    echo json_encode([
        'status' => 'error',
        'message' => "Archive deploy.zip not found in directory: {$target_dir}"
    ]);
    exit;
}

// 4. Verify ZipArchive Extension
if (!class_exists('ZipArchive')) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Server error: PHP ZipArchive extension is not enabled on this hosting account.'
    ]);
    exit;
}

// 5. Open and Extract
$zip = new ZipArchive();
$open_status = $zip->open($zip_file);

if ($open_status !== TRUE) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => "Failed to open zip archive. ZipArchive error code: {$open_status}"
    ]);
    exit;
}

$file_count = $zip->numFiles;
$extract_status = $zip->extractTo($target_dir);
$zip->close();

if (!$extract_status) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => "Failed to extract archive files into {$target_dir}"
    ]);
    exit;
}

// 6. Security Cleanup (Remove ZIP and Self-Destruct)
@unlink($zip_file);
@unlink(__FILE__);

// 7. Clear OPcache / PHP Cache so LiteSpeed / Apache serves fresh files immediately
if (function_exists('opcache_reset')) {
    @opcache_reset();
}

// 8. Return Success JSON
echo json_encode([
    'status' => 'success',
    'message' => "Deployment successful! Extracted {$file_count} files into {$target_dir} and cleaned up archive.",
    'extracted_files' => $file_count,
    'timestamp' => date('Y-m-d H:i:s T')
]);
