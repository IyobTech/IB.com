
initTheme();

const sections = [...document.querySelectorAll(".section")];
const navButtons = [...document.querySelectorAll("[data-section-link]")];
const authModal = document.getElementById("auth-modal");
const authForm = document.getElementById("auth-form");
const authMode = document.getElementById("auth-mode");
const authTitle = document.getElementById("auth-title");
const authDescription = document.getElementById("auth-description");

function showSection(id) {
  sections.forEach(sec => sec.classList.toggle("active", sec.id === id));
  navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.sectionLink === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.sectionLink));
});

document.querySelectorAll("[data-auth-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const mode = btn.dataset.authOpen;
    if (mode === "logout") return handleLogout();
    openAuth(mode);
  });
});

document.querySelectorAll("[data-auth-close]").forEach(btn => {
  btn.addEventListener("click", () => authModal.classList.remove("show"));
});

authModal.addEventListener("click", (e) => {
  if (e.target === authModal) authModal.classList.remove("show");
});

function openAuth(mode) {
  authMode.value = mode;
  authTitle.textContent = mode === "signup" ? "Sign up" : "Sign in";
  authDescription.textContent = mode === "signup"
    ? "Create an account with name and email. Email must be unique."
    : "Sign in with your existing account. Admin uses the same identity if matched.";
  authModal.classList.add("show");
}

function renderFeatures() {
  const items = [
    ["Smart dashboard", "Organize everything in a clean control surface with instant clarity.", "◧"],
    ["Responsive layout", "Looks sharp on phones, tablets, laptops, and large screens.", "◫"],
    ["Fast account flow", "Sign in, sign up, and logout are kept straightforward.", "⎔"],
    ["Secured storage", "Suggestions and account records stay in cloud storage.", "⛁"],
    ["Admin oversight", "The admin can review users, suggestions, and authority.", "⌘"],
    ["Ethiopian styling", "Green, yellow, and red accents add local identity.", "✦"],
    ["Affordable pricing", "Monthly and yearly plans are simple and visible.", "◉"],
    ["Help routing", "Support forms keep questions and feedback in one place.", "✎"],
  ];
  const grid = document.getElementById("features-grid");
  grid.innerHTML = items.map(([title, text, icon]) => `
    <article class="feature-card">
      <div class="feature-icon">${icon}</div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </article>
  `).join("");
}

function renderTestimonials() {
  const items = [
    ["Ambo Ifa Boru special Boarding Secondary School", "Client", "The interface is polished and easy to use, but what if you made it offline.", "ambo.jpg"],
    ["Fesseha Atlaw Foundation.", "Founders", "The design feels good, but who are the customer of your service.", "stem.jpg"],
    ["F6S Community", "Start-up center", "The layout makes the product look serious and modern;made more promotion.", "f6s.png"],
    ["You", "Client", "Put your ownn suggestions, question etc", "images/alem.jpg"],
    ["You", "Client", "Put your ownn suggestions, question etc", "images/yoni.jpg"],
    ["You", "Client", "Put your ownn suggestions, question etc.", "images/nova.jpg"],
  ];

  const grid = document.getElementById("testimonials-grid");
  grid.innerHTML = items.map(([name, role, msg, img]) => `
    <article class="testimonial-card">
      <div class="person">
        <div class="avatar">
          <img src="${img}" alt="${escapeHtml(name)}" class="avatar-img">
        </div>
        <div>
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(role)}</span>
        </div>
      </div>
      <p>${escapeHtml(msg)}</p>
    </article>
  `).join("");
}

const plans = [
  { name: "Free", monthly: 0.00, yearly: 0.00, highlight: false, items: ["Free to access.", "Account forms", "Cloud save"] },
  { name: "Coming with", monthly: 600, yearly: 1600, highlight: true, items: ["Everything in Starter", "with better support", " with Admin insights"] },
  { name: "Coming with", monthly: 900, yearly: 1900, highlight: false, items: ["Everything in Growth", "Expanded customization", "Authority tools"] },
];

let pricingMode = "monthly";
function renderPricing() {
  const grid = document.getElementById("pricing-grid");
  grid.innerHTML = plans.map(plan => `
    <article class="plan-card ${plan.highlight ? "featured" : ""}">
      <span class="badge">${plan.highlight ? "Best value" : "Plan"}</span>
      <h3>${escapeHtml(plan.name)}</h3>
      <div class="price">${plan[pricingMode]} ETB <small>/ ${pricingMode === "monthly" ? "month" : "year"}</small></div>
      <ul>${plan.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      <button class="secondary-btn" style="margin-top:14px;">Choose ${escapeHtml(plan.name)}</button>
    </article>
  `).join("");
}
document.querySelectorAll("[data-pricing]").forEach(btn => {
  btn.addEventListener("click", () => {
    pricingMode = btn.dataset.pricing;
    document.querySelectorAll("[data-pricing]").forEach(x => x.classList.toggle("active", x === btn));
    renderPricing();
  });
});

function renderBlog() {
  const posts = [
    ["Founder.", "Iyob Mulisa", "The idea was started and kept to take place through gradual.", "iyo.jpg", "Iyob.png"],
    ["Data Manager", "Cloud Computing Storage", "How forms and support make users feel protected.", "cd.jpg", "cds.jpg"],
    ["Flow controller", "Flow controller with version", "Why simple packages improve trust and conversion.", "gitt.png", "git.png"],
    ["Cyber Controller", "Defense attacks, blocks unwise flow", "A clean way to manage people and authority without chaos.", "aapi.jpg", "api.jpeg"],
    ["Status Manager", "Managing live flow of system", "Catching current status and manually setupping a report", "key.jpg", "keey.jpg"],
  ];

  const grid = document.getElementById("blog-grid");
  grid.innerHTML = posts.map(([title, author, text, profilePic, blogImage]) => `
    <article class="blog-card">
      <div class="blog-image">
        <img src="${blogImage}" alt="${escapeHtml(title)}" class="blog-image-img">
      </div>
      <h3>${escapeHtml(title)}</h3>
      <div class="profile-row">
        <div class="circle-pic">
          <img src="${profilePic}" alt="${escapeHtml(author)}" class="profile-pic-img">
        </div>
        <div>
          <strong>${escapeHtml(author)}</strong>
          <small style="color:var(--muted)">Contributor</small>
        </div>
      </div>
      <p>${escapeHtml(text)}</p>
    </article>
  `).join("");
}

async function handleSuggestion(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const data = {
    id: makeId("suggestion"),
    type: "home-suggestion",
    name: form.name.value.trim(),
    email: normalizeEmail(form.email.value),
    message: form.message.value.trim(),
    createdAt: new Date().toISOString()
  };
  try {
    const store = await getStore();
    store.suggestions = Array.isArray(store.suggestions) ? store.suggestions : [];
    store.suggestions.unshift(data);
    await saveStore(store);
    toast("Suggestion saved successfully.", "success");
    form.reset();
  } catch (err) {
    console.error(err);
    toast("Saving failed. Check your network access.", "error");
  }
}

async function handleSupport(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const payload = {
    id: makeId("support"),
    type: "support",
    name: form.name.value.trim(),
    email: normalizeEmail(form.email.value),
    message: form.message.value.trim(),
    createdAt: new Date().toISOString()
  };
  try {
    const store = await getStore();
    store.suggestions = Array.isArray(store.suggestions) ? store.suggestions : [];
    store.suggestions.unshift(payload);
    await saveStore(store);
    const subject = encodeURIComponent(`IB Tech support from ${payload.name}`);
    const body = encodeURIComponent(payload.message + `\n\nFrom: ${payload.name} <${payload.email}>`);
    window.location.href = `mailto:${APP_CONFIG.admin.email}?subject=${subject}&body=${body}`;
    toast("Support message saved. Mail draft opened.", "success");
    form.reset();
  } catch (err) {
    console.error(err);
    toast("Support message could not be stored.", "error");
  }
}

async function handleAuth(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const email = normalizeEmail(form.email.value);
  if (!name || !email) return;

  try {
    const store = await getStore();
    store.users = Array.isArray(store.users) ? store.users : [];
    store.admins = Array.isArray(store.admins) ? store.admins : [];

    const existing = store.users.find(u => normalizeEmail(u.email) === email);
    const adminMatch = isAdminIdentity(name, email);

    if (authMode.value === "signup") {
      if (existing) {
        toast("This email is already registered.", "error");
        return;
      }
      const user = {
        id: makeId("user"),
        name,
        email,
        role: adminMatch ? "admin" : "user",
        createdAt: new Date().toISOString()
      };
      store.users.unshift(user);
      if (adminMatch && !store.admins.some(a => normalizeEmail(a.email) === email)) {
        store.admins.unshift({ ...user, role: "super-admin" });
      }
      await saveStore(store);
      setSession({ id: user.id, name, email, role: user.role });
      authModal.classList.remove("show");
      toast(adminMatch ? "Admin account created." : "Account created.", "success");
      window.location.href = adminMatch ? "admin.html" : "meal.html";
      return;
    }

    if (!existing && !adminMatch) {
      toast("No matching account found. Sign up first.", "error");
      return;
    }

    let target = existing || (adminMatch ? {
      id: makeId("admin-session"),
      name,
      email,
      role: "super-admin"
    } : null);

    if (!target) {
      toast("Unable to authenticate.", "error");
      return;
    }

    setSession({ id: target.id, name: target.name, email: target.email, role: adminMatch ? "super-admin" : (target.role || "user") });
    authModal.classList.remove("show");
    toast("Signed in successfully.", "success");
    window.location.href = adminMatch ? "admin.html" : "meal.html";
  } catch (err) {
    console.error(err);
    toast("Authentication failed. Check your connection access.", "error");
  }
}

async function handleLogout() {
  const session = getSession();
  if (!session) {
    toast("No active session.", "info");
    return;
  }
  try {
    const store = await getStore();
    store.users = (store.users || []).filter(u => normalizeEmail(u.email) !== normalizeEmail(session.email));
    store.admins = (store.admins || []).filter(a => normalizeEmail(a.email) !== normalizeEmail(session.email) || normalizeEmail(a.email) === normalizeEmail(APP_CONFIG.admin.email));
    await saveStore(store);
  } catch (err) {
    console.error(err);
  } finally {
    clearSession();
    toast("Logged out and removed from active storage.", "success");
  }
}

document.getElementById("suggestion-form").addEventListener("submit", handleSuggestion);
document.getElementById("support-form").addEventListener("submit", handleSupport);
authForm.addEventListener("submit", handleAuth);

renderFeatures();
renderTestimonials();
renderPricing();
renderBlog();
