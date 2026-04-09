// JSONbin.io Config
const BIN_ID = "68cb11f8ae596e708ff22f54";
const MASTER_KEY = "$2a$10$svnhQL3Pt/YL1xljam4at.8jA8sEzr28CUe2VG57uQIKHcH1EPwcq";
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Default admin password
let adminPassword = "SolomonTech.21";
let currentUserEmail = "";

// Show specific section
function showSection(section) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(section).classList.add("active");
}

// Fetch users from JSONbin
async function getUsers() {
  try {
    const res = await fetch(`${API_URL}/latest`, {
      headers: { "X-Master-Key": MASTER_KEY }
    });
    const data = await res.json();
    return data.record.users || [];
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
}

// Save users to JSONbin
async function saveUsers(users) {
  try {
    await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY
      },
      body: JSON.stringify({ users })
    });
  } catch (err) {
    console.error("Error saving users:", err);
  }
}

// Registration form submit
document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) return;

  currentUserEmail = email;

  let users = await getUsers();
  if (users.find(u => u.email === email)) {
    document.getElementById("registrationMessage").innerText = "Email already registered!";
    await checkNextButton(email); // Show button if already allowed
    return;
  }

  users.push({ name, email, allowed: false });
  await saveUsers(users);

  document.getElementById("registrationMessage").innerText = "Registered successfully!";
  document.getElementById("registrationForm").reset();
  await checkNextButton(email);
});

// Admin login
function loginAdmin() {
  const pass = document.getElementById("adminPassword").value;
  if (pass === adminPassword) {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadUsersTable();
  } else {
    document.getElementById("loginMessage").innerText = "Wrong password!";
  }
}

// Load users into table
async function loadUsersTable() {
  const users = await getUsers();
  const tbody = document.querySelector("#usersTable tbody");
  tbody.innerHTML = "";

  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><button onclick="allowUser(${index})">☑️</button></td>
      <td><button onclick="removeUser(${index})">❌</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// Allow user
async function allowUser(index) {
  const users = await getUsers();
  users[index].allowed = true;
  await saveUsers(users);
  loadUsersTable();

  // If admin allowed the currently logged-in user, show Next Page button
  if (users[index].email === currentUserEmail) {
    document.getElementById("nextPageBtn").style.display = "block";
  }
}

// Remove user
async function removeUser(index) {
  const users = await getUsers();
  users.splice(index, 1);
  await saveUsers(users);
  loadUsersTable();
}

// Next page button check
async function checkNextButton(email) {
  const users = await getUsers();
  const user = users.find(u => u.email === email);
  if (user && user.allowed) {
    document.getElementById("nextPageBtn").style.display = "block";
  } else {
    document.getElementById("nextPageBtn").style.display = "none";
  }
}

// Go to next page
function goToNextPage() {
  window.location.href = "students.html";
}

// If user refreshes page, we can check local storage (optional enhancement)