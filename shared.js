
const APP_CONFIG = {
  binId: "69cb98fbaaba882197ae4e57",
  masterKey: "$2a$10$svnhQL3Pt/YL1xljam4at.8jA8sEzr28CUe2VG57uQIKHcH1EPwcq",
  apiBase: "https://api.jsonbin.io/v3/b",
  admin: {
    name: "Iyob Mulisa",
    email: "2hopefully7@gmail.com"
  }
};

const ETHIO_COLORS = ["#078930", "#FCDD09", "#DA121A"];

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

function getSession() {
  try { return JSON.parse(localStorage.getItem("ibtech-session")) || null; }
  catch { return null; }
}

function setSession(session) {
  localStorage.setItem("ibtech-session", JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem("ibtech-session");
}

async function binFetch(method = "GET", body = null) {
  const url = `${APP_CONFIG.apiBase}/${APP_CONFIG.binId}`;
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": APP_CONFIG.masterKey
    }
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`JSONBin ${method} failed (${res.status}): ${text}`);
  }
  return res.json();
}

async function getStore() {
  const res = await binFetch("GET");
  return res?.record || { users: [], suggestions: [], admins: [], meta: {} };
}

async function saveStore(store) {
  return binFetch("PUT", store);
}

function makeId(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

function normalizeEmail(email = "") {
  return String(email).trim().toLowerCase();
}

function isAdminIdentity(name, email) {
  return normalizeEmail(name) === normalizeEmail(APP_CONFIG.admin.name) &&
    normalizeEmail(email) === normalizeEmail(APP_CONFIG.admin.email);
}

function createToastHost() {
  let host = document.querySelector(".toast-host");
  if (!host) {
    host = document.createElement("div");
    host.className = "toast-host";
    document.body.appendChild(host);
  }
  return host;
}

function toast(message, type = "info") {
  const host = createToastHost();
  const el = document.createElement("div");
  el.className = `toast toast-${type}`;
  el.textContent = message;
  host.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 250);
  }, 2600);
}

function injectThemeState() {
  const saved = localStorage.getItem("ibtech-theme") || "dark";
  document.documentElement.dataset.theme = saved;
}

function bindThemeToggle() {
  document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("ibtech-theme", next);
      document.querySelectorAll("[data-theme-label]").forEach(node => {
        node.textContent = next === "dark" ? "Light" : "Dark";
      });
    });
  });
}

function initTheme() {
  injectThemeState();
  bindThemeToggle();
}

function footerMarkup() {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">IB Tech</div>
          <p>For best solution. Smart tools, elegant delivery, and reliable support for modern users.</p>
        </div>
        <div>
          <h4>Terms</h4>
          <p>Use the platform responsibly. Account actions may be stored in secure for this demo workflow.</p>
        </div>
        <div>
          <h4>FAQ</h4>
          <p>Need help, support, or pricing guidance? Use the support form or open the help section.</p>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} IB Tech. Built for clarity, speed, and trust.</div>
    </footer>
  `;
}

function sessionLabel() {
  const session = getSession();
  if (!session?.name) return "Guest";
  return session.name;
}

function safeText(v) {
  return escapeHtml(String(v ?? ""));
}
