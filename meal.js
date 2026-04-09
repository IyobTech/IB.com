
initTheme();

const session = getSession();
const welcomeTitle = document.getElementById("welcome-title");
const welcomeCopy = document.getElementById("welcome-copy");

if (!session) {
  window.location.href = "meal.html";
}

welcomeTitle.textContent = `Welcome, ${session?.name || "Guest"}`;
welcomeCopy.textContent = session?.role?.includes("admin")
  ? "You entered the admin-aware signed-in area. Open the admin page to manage users, suggestions, and authority."
  : "You are signed in successfully. The system keeps the structure simple, clear, and ready for the next action.";

document.getElementById("logout-btn").addEventListener("click", async () => {
  try {
    const store = await getStore();
    store.users = (store.users || []).filter(u => normalizeEmail(u.email) !== normalizeEmail(session.email));
    store.admins = (store.admins || []).filter(a => normalizeEmail(a.email) !== normalizeEmail(session.email) || normalizeEmail(a.email) === normalizeEmail(APP_CONFIG.admin.email));
    await saveStore(store);
  } catch (err) {
    console.error(err);
  } finally {
    clearSession();
    window.location.href = "index.html";
  }
});

const stats = [
  ["Session", session?.role || "user", "Active"],
  ["Status", "Cloud linked", "Cloud computing storage"],
  ["Mode", "Responsive", "Live"],
  ["Theme", document.documentElement.dataset.theme || "dark", "Saved"],
];

const statsGrid = document.getElementById("user-stats");
statsGrid.innerHTML = stats.map(([label, value, caption]) => `
  <article class="stat-card">
    <span class="badge">${escapeHtml(label)}</span>
    <strong>${escapeHtml(value)}</strong>
    <p>${escapeHtml(caption)}</p>
  </article>
`).join("");

const accountList = document.getElementById("account-list");
accountList.innerHTML = `
  <div class="info-item"><span class="dot"></span><p><strong>Name:</strong> ${escapeHtml(session?.name || "")}</p></div>
  <div class="info-item"><span class="dot"></span><p><strong>Email:</strong> ${escapeHtml(session?.email || "")}</p></div>
  <div class="info-item"><span class="dot"></span><p><strong>Role:</strong> ${escapeHtml(session?.role || "user")}</p></div>
`;
