<?php
// Fallback for URLs that don't match a file or a prerendered page (see .htaccess).
// Mixed-case or trailing-slash URLs (e.g. /About-Us, /about-us/) 301 to the
// canonical page if it exists; everything else returns a real 404 with the
// noindex 404.html page.
$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
$lower = strtolower($path);
if ($lower !== '/') {
    $lower = rtrim($lower, '/') ?: '/';
}

if ($lower !== $path && strpos($lower, '..') === false && preg_match('#^/[a-z0-9/_-]*$#', $lower)) {
    if ($lower === '/' || is_file(__DIR__ . $lower . '.html')) {
        $query = $_SERVER['QUERY_STRING'] ?? '';
        header('Location: https://iotaflow.com' . $lower . ($query !== '' ? '?' . $query : ''), true, 301);
        exit;
    }
}

http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
readfile(__DIR__ . '/404.html');
