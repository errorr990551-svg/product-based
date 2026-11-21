// Form values go into HTML emails: escape them so a visitor cannot inject
// links or markup into the emails the team receives. Files are left as-is.
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export const escapeFields = (body) =>
  Object.fromEntries(
    Object.entries(body || {}).map(([k, v]) => [
      k,
      typeof v === "string" ? v.trim().replace(/[&<>"']/g, (ch) => ESC[ch]) : v,
    ])
  );
