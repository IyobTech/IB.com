
initTheme();

const session = getSession();
if (!session || !session.role || !String(session.role).includes("admin")) {
  window.location.href = "index.html";
}

document.getElementById("admin-logout").addEventListener("click", async () => {
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

async function loadAdminData() {
  const store = await getStore();
  const users = Array.isArray(store.users) ? store.users : [];
  const suggestions = Array.isArray(store.suggestions) ? store.suggestions : [];
  const admins = Array.isArray(store.admins) ? store.admins : [];

  const stats = [
    ["Users", String(users.length), "Current"],
    ["Suggestions", String(suggestions.length), "Stored"],
    ["Admins", String(admins.length || 1), "Authority"],
    ["Role", session.role || "super-admin", "Active"],
  ];

  document.getElementById("admin-stats").innerHTML = stats.map(([label, value, caption]) => `
    <article class="stat-card">
      <span class="badge">${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(caption)}</p>
    </article>
  `).join("");

  document.getElementById("users-list").innerHTML = users.length ? users.map(user => `
    <div class="row-item">
      <div>
        <strong>${escapeHtml(user.name)}</strong>
        <small>${escapeHtml(user.email)}</small>
      </div>
      <span class="chip">${escapeHtml(user.role || "user")}</span>
    </div>
  `).join("") : `<p class="muted">No active users stored.</p>`;

  document.getElementById("admins-list").innerHTML = admins.length ? admins.map(admin => `
    <div class="row-item">
      <div>
        <strong>${escapeHtml(admin.name)}</strong>
        <small>${escapeHtml(admin.email)}</small>
      </div>
      <div class="split-actions">
        <span class="chip">${escapeHtml(admin.role || "admin")}</span>
        ${normalizeEmail(admin.email) !== normalizeEmail(APP_CONFIG.admin.email) ? `<button class="ghost-btn" data-remove-admin="${escapeHtml(admin.email)}">Remove</button>` : `<span class="chip">Super admin</span>`}
      </div>
    </div>
  `).join("") : `<p class="muted">No admin records found.</p>`;

  document.getElementById("suggestions-list").innerHTML = suggestions.length ? suggestions.slice(0, 12).map(item => `
    <div class="row-item" style="align-items:flex-start;">
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <small>${escapeHtml(item.email)} · ${escapeHtml(item.type || "message")} · ${new Date(item.createdAt).toLocaleString()}</small>
        <p style="margin-top:8px; color: var(--text);">${escapeHtml(item.message)}</p>
      </div>
    </div>
  `).join("") : `<p class="muted">No suggestions stored.</p>`;

  document.querySelectorAll("[data-remove-admin]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const email = btn.dataset.removeAdmin;
      const fresh = await getStore();
      fresh.admins = (fresh.admins || []).filter(a => normalizeEmail(a.email) !== normalizeEmail(email));
      await saveStore(fresh);
      toast("Admin authority removed.", "success");
      loadAdminData();
    });
  });
}

loadAdminData().catch(err => {
  console.error(err);
  toast("Could not load admin data.", "error");
});
