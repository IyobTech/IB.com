
const LS_KEYS = {
  adminPin: 'sms_adminPin',
  students: 'sms_students',
  meals: 'sms_meals',          // { "YYYY-MM-DD": { "1234": {breakfast:true, lunch:true, dinner:true} } }
  settings: 'sms_settings'     // { theme, language, meals: { breakfast:{start,end}, lunch:{...}, dinner:{...} } }
};

const DEFAULTS = {
  adminPin: '1234',
  settings: {
    theme: 'auto',
    language: 'en',
    meals: {
      breakfast: { start: '06:00', end: '09:00' },
      lunch:     { start: '12:00', end: '14:30' },
      dinner:    { start: '18:30', end: '21:00' }
    }
  }
};

// i18n dictionary (compact, covers all visible strings)
const I18N = {
  en: {
    appTitle: "I-MESOB",
    tabMeal: "Meal",
    tabRegister: "Register",
    tabStudents: "Students List",
    tabReport: "Report",
    tabSettings: "Settings",
    mealTitle: "Student Meal Check-In",
    mealHint: "Enter your 4-digit ID. We’ll show your info (except password), then you’ll confirm with your 10-digit password.",
    labelID: "4-digit ID",
    btnFind: "Find",
    labelName: "Name",
    labelGrade: "Grade",
    labelPassword: "10-digit Password",
    btnConfirm: "Confirm",
    currentSlotTitle: "Current Meal Slot",
    deviceTimeNote: "Based on your device time.",
    registerTitle: "Register New Student",
    btnClear: "Clear",
    btnSave: "Save",
    studentsTitle: "All Registered Students",
    studentsNote: "Shown so the admin can help students who forget their ID or password.",
    thName: "Name",
    thGrade: "Grade",
    thID: "ID",
    thPassword: "10-digit Password",
    thBreakfast: "Breakfast",
    thLunch: "Lunch",
    thDinner: "Dinner",
    reportTitle: "Daily Meal Report",
    labelDate: "Date",
    btnRefresh: "Refresh",
    reportNote: "☑️ eaten, ❌ not eaten. Pick any date to view up to a year (and beyond).",
    settingsTitle: "Settings",
    legendTimeFrames: "Time Frames",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    labelStart: "Start",
    labelEnd: "End",
    legendAdminPin: "Admin PIN",
    labelOldPin: "Old 4-digit PIN",
    labelNewPin: "New 4-digit PIN",
    btnChangePin: "Change PIN",
    legendTheme: "Theme",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",
    legendLanguage: "Language",
    btnSaveSettings: "Save Settings",
    adminGateTitle: "Admin Access",
    adminGateText: "Enter the 4-digit admin PIN to open this section.",
    btnCancel: "Cancel",
    btnUnlock: "Unlock",
    footerNote: "Offline, private. Data stored in your browser.",
  },
  om: {
    appTitle: "I-MASOOB",
    tabMeal: "Nyaata",
    tabRegister: "Galmeessi",
    tabStudents: "Tarree Barattootaa",
    tabReport: "Gabaasa",
    tabSettings: "Sirreeffama",
    mealTitle: "Mirkaneessa Nyaata Barataa",
    mealHint: "ID lakkoofsa 4 galchi. Odeeffannoo kee ni agarsiifna, boodarras jecha iccitii lakkoofsa 10-nin mirkaneessi.",
    labelID: "ID lakkoofsa-4",
    btnFind: "Argi",
    labelName: "Maqaa",
    labelGrade: "Kutaa",
    labelPassword: "Jecha Iccitii lakkoofsa-10",
    btnConfirm: "Mirkaneessi",
    currentSlotTitle: "Yeroo Nyaataa Amma",
    deviceTimeNote: "Yeroo meeshaa keetiin hunda’e.",
    registerTitle: "Barataa Haaraa Galmeessi",
    btnClear: "Haqi",
    btnSave: "Kuusi",
    studentsTitle: "Barattoota Hunda",
    studentsNote: "ID ykn jecha iccitii yoo irraanfatame, barattoota gargaaruuf abbaa taayitaa qofaaf ni mul’ata.",
    thName: "Maqaa",
    thGrade: "Kutaa",
    thID: "ID",
    thPassword: "Jecha Iccitii 10",
    thBreakfast: "Ciree(Qursii)", 
    thLunch: "Laaqana",
    thDinner: "Irbaata",
    reportTitle: "Gabaasa Guyyaa",
    labelDate: "Guyyaa",
    btnRefresh: "Itti Fufsiisi",
    reportNote: "☑️ nyaate, ❌ hin nyaanne. Guyyaa barbaaddu fili.",
    settingsTitle: "Sirreeffamoota",
    legendTimeFrames: "Yeroo Nyaataa",
    breakfast: "Ciree",
    lunch: "Laaqana",
    dinner: "Irbaata",
    labelStart: "Jalqaba",
    labelEnd: "Dhuma",
    legendAdminPin: "PIN Admin",
    labelOldPin: "PIN lakkoofsa-4 duraa",
    labelNewPin: "PIN lakkoofsa-4 haaraa",
    btnChangePin: "PIN Jijjiiri",
    legendTheme: "Agarsiisa",
    themeAuto: "Otomaatikaa",
    themeLight: "Ifaa",
    themeDark: "Dukkanaa",
    legendLanguage: "Afaan",
    btnSaveSettings: "Sirreeffama Kuusi",
    adminGateTitle: "Seenaa Admin",
    adminGateText: "Kutaa kana banuuf PIN admin 4-lakkoofsa galchi.",
    btnCancel: "Haquu",
    btnUnlock: "Bani",
    footerNote: "Offlaynii; odeeffannoon kee meeshaa kee irratti qofa kuufama.",
  },
  am: {
    appTitle: "እ-መሶብ",
    tabMeal: "መመገብ",
    tabRegister: "መመዝገብ",
    tabStudents: "የተማሪዎች ዝርዝር",
    tabReport: "ሪፖርት",
    tabSettings: "ማቀናበር",
    mealTitle: "የተማሪ መመገብ ማረጋገጫ",
    mealHint: "4 አሃዝ ያለው ID አስገባ። መረጃህን (የይለፍ ቃል ሳይጨምር) እናሳያለን እና 10 አሃዝ የይለፍ ቃል በመጠቀም ታረጋግጣለህ/ሽ።",
    labelID: "4 አሃዝ ID",
    btnFind: "ፈልግ",
    labelName: "ስም",
    labelGrade: "ክፍል",
    labelPassword: "10 አሃዝ የይለፍ ቃል",
    btnConfirm: "አረጋግጥ",
    currentSlotTitle: "የአሁኑ የመመገብ ጊዜ",
    deviceTimeNote: "በመሣሪያዎ ጊዜ ላይ የተመሠረተ።",
    registerTitle: "አዲስ ተማሪ መመዝገብ",
    btnClear: "አጥፋ",
    btnSave: "አስቀምጥ",
    studentsTitle: "የተመዘገቡ ተማሪዎች ሁሉ",
    studentsNote: "ID ወይም የይለፍ ቃል ሲረሳ፤ አገልግሎቱን ለማስቀጠል ለአስተዳዳሪ ብቻ ይታያል።",
    thName: "ስም",
    thGrade: "ክፍል",
    thID: "ID",
    thPassword: "10 አሃዝ የይለፍ ቃል",
    thBreakfast: "ቁርስ",
    thLunch: "ምሳ",
    thDinner: "እራት",
    reportTitle: "የቀን ሪፖርት",
    labelDate: "ቀን",
    btnRefresh: "አድስ",
    reportNote: "☑️ በላ፣ ❌ አልበላም። የማንኛውንም ቀን ምረጥ።",
    settingsTitle: "ማቀናበር",
    legendTimeFrames: "የጊዜ መድብ",
    breakfast: "ቁርስ",
    lunch: "ምሳ",
    dinner: "እራት",
    labelStart: "ጀምር",
    labelEnd: "መጨረሻ",
    legendAdminPin: "የአስተዳዳሪ ፒን",
    labelOldPin: "የቀድሞ 4 አሃዝ ፒን",
    labelNewPin: "አዲስ 4 አሃዝ ፒን",
    btnChangePin: "ፒን ቀይር",
    legendTheme: "ገጽታ",
    themeAuto: "በራሱ",
    themeLight: "ብርሃን",
    themeDark: "ጨለማ",
    legendLanguage: "ቋንቋ",
    btnSaveSettings: "ማቀናበር አስቀምጥ",
    adminGateTitle: "የአስተዳዳሪ ክፍል",
    adminGateText: "ይህን ክፍል ለመክፈት 4 አሃዝ ፒን አስገባ።",
    btnCancel: "ሰርዝ",
    btnUnlock: "ክፈት",
    footerNote: "ከመስመር ውጭ፣ መረጃዎ በእናንተ እቃ(device) ውስጥ ብቻ ይቀመጣል።",
  }
};

/* ===== Utilities ===== */
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const load = (k, fallback=null) => {
  const raw = localStorage.getItem(k);
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
};

function ensureDefaults() {
  if (!localStorage.getItem(LS_KEYS.adminPin)) localStorage.setItem(LS_KEYS.adminPin, JSON.stringify(DEFAULTS.adminPin));
  if (!localStorage.getItem(LS_KEYS.students)) save(LS_KEYS.students, []);
  if (!localStorage.getItem(LS_KEYS.meals)) save(LS_KEYS.meals, {});
  if (!localStorage.getItem(LS_KEYS.settings)) save(LS_KEYS.settings, DEFAULTS.settings);
}
ensureDefaults();

/* ===== Theme & Language ===== */
function applyTheme(theme) {
  const root = $('.app');
  if (theme === 'auto') {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    root.setAttribute('data-theme', theme);
  }
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  // Update placeholders that include wording
  $('#student-search')?.setAttribute('placeholder',
    lang === 'om' ? 'Maqaa, kutaa, ID… barbaadi' :
    lang === 'am' ? 'በስም፣ ክፍል፣ ID… ፈልግ' :
    'Search by name, grade, ID…'
  );
}

/* ===== Time Helpers ===== */
function pad2(n){ return String(n).padStart(2,'0'); }
function dateKey(d = new Date()){ return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
function withinRange(timeStr, start, end) {
  // HH:MM strings -> minutes since midnight
  const toMin = s => { const [h,m]=s.split(':').map(Number); return h*60+m; };
  const t = toMin(timeStr), s = toMin(start), e = toMin(end);
  // Supports ranges that may cross midnight (not likely here, but safe)
  return s <= e ? (t >= s && t <= e) : (t >= s || t <= e);
}
function nowHHMM(){
  const d = new Date();
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}
function currentSlot() {
  const sets = load(LS_KEYS.settings, DEFAULTS.settings);
  const hhmm = nowHHMM();
  for (const key of ['breakfast','lunch','dinner']) {
    const {start,end} = sets.meals[key];
    if (withinRange(hhmm, start, end)) return key;
  }
  return null;
}
function slotLabel(key, lang){
  const dict = I18N[lang] || I18N.en;
  if (!key) return '—';
  return dict[key] || key;
}

/* ===== Admin Gate ===== */
let adminSessionOpen = false;
function requireAdmin(onSuccess) {
  if (adminSessionOpen) return onSuccess();
  const dlg = $('#admin-gate');
  const msg = $('#admin-gate-msg');
  const input = $('#admin-pin-input');
  msg.textContent = '';
  input.value = '';
  dlg.showModal();
  $('#admin-gate-ok').onclick = () => {
    const pin = input.value.trim();
    const saved = load(LS_KEYS.adminPin, DEFAULTS.adminPin);
    if (pin === saved) {
      adminSessionOpen = true;
      dlg.close();
      onSuccess();
    } else {
      msg.textContent = 'Wrong (የስህተት)-PIN-dogoggoraa;';
      msg.className = 'result bad';
    }
  };
}

/* ===== Tabs ===== */
function switchTab(to) {
  $$('.tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === to));
  $$('.tabpage').forEach(pg => pg.classList.toggle('active', pg.id === `tab-${to}`));
}
$$('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const needAdmin = btn.classList.contains('admin-gated');
    if (needAdmin && !adminSessionOpen) {
      requireAdmin(() => switchTab(btn.dataset.tab));
    } else {
      switchTab(btn.dataset.tab);
    }
  });
});

/* ===== Settings init ===== */
function loadSettingsUI() {
  const sets = load(LS_KEYS.settings, DEFAULTS.settings);
  applyTheme(sets.theme);
  applyLanguage(sets.language);
  $('#theme-select').value = sets.theme;
  $('#lang-select').value = sets.language;
  $('#bf-start').value = sets.meals.breakfast.start;
  $('#bf-end').value = sets.meals.breakfast.end;
  $('#lu-start').value = sets.meals.lunch.start;
  $('#lu-end').value = sets.meals.lunch.end;
  $('#di-start').value = sets.meals.dinner.start;
  $('#di-end').value = sets.meals.dinner.end;
  renderSlotSummary();
}
function renderSlotSummary(){
  const sets = load(LS_KEYS.settings, DEFAULTS.settings);
  const lang = sets.language;
  const now = currentSlot();
  $('#slotNow').textContent = now ? `${slotLabel(now,lang)} — ✅` : '—';
  const wrap = $('#slotsInline');
  wrap.innerHTML = '';
  ['breakfast','lunch','dinner'].forEach(k=>{
    const pill = document.createElement('div');
    pill.className = 'slot-pill';
    const {start,end}=sets.meals[k];
    pill.textContent = `${slotLabel(k,lang)}: ${start} - ${end}`;
    wrap.appendChild(pill);
  });
}

$('#save-settings').addEventListener('click', () => {
  const sets = load(LS_KEYS.settings, DEFAULTS.settings);
  const newSets = {
    ...sets,
    theme: $('#theme-select').value,
    language: $('#lang-select').value,
    meals: {
      breakfast: { start: $('#bf-start').value, end: $('#bf-end').value },
      lunch:     { start: $('#lu-start').value, end: $('#lu-end').value },
      dinner:    { start: $('#di-start').value, end: $('#di-end').value },
    }
  };
  save(LS_KEYS.settings, newSets);
  applyTheme(newSets.theme);
  applyLanguage(newSets.language);
  renderSlotSummary();
  const msg = $('#settings-msg');
  msg.textContent = (I18N[newSets.language]||I18N.en).btnSaveSettings + ' ✓';
  msg.className = 'result ok';
});

$('#save-pin').addEventListener('click', () => {
  const oldPin = $('#old-pin').value.trim();
  const newPin = $('#new-pin').value.trim();
  const saved = load(LS_KEYS.adminPin, DEFAULTS.adminPin);
  const lang = load(LS_KEYS.settings, DEFAULTS.settings).language;
  const t = I18N[lang]||I18N.en;

  const msg = $('#pin-msg');
  if (oldPin !== saved) {
    msg.textContent = 'Old PIN is incorrect';
    msg.className = 'result bad';
    return;
  }
  if (!/^\d{4}$/.test(newPin)) {
    msg.textContent = 'PIN must be 4 digits';
    msg.className = 'result warn';
    return;
  }
  save(LS_KEYS.adminPin, newPin);
  adminSessionOpen = false; // force re-auth next time
  $('#old-pin').value = ''; $('#new-pin').value='';
  msg.textContent = 'PIN changed successfully';
  msg.className = 'result ok';
});

/* Quick Theme toggle */
$('#quickTheme').addEventListener('click', () => {
  const sets = load(LS_KEYS.settings, DEFAULTS.settings);
  const next = sets.theme === 'light' ? 'dark' : sets.theme === 'dark' ? 'auto' : 'light';
  sets.theme = next;
  save(LS_KEYS.settings, sets);
  applyTheme(next);
});

/* ===== Registration ===== */
$('#register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#reg-name').value.trim();
  const grade = $('#reg-grade').value.trim();
  const id = $('#reg-id').value.trim();
  const pass = $('#reg-pass').value.trim();
  const msg = $('#register-msg');
  const lang = load(LS_KEYS.settings, DEFAULTS.settings).language;

  if (!/^\d{4}$/.test(id)) { msg.textContent = 'ID must be exactly 4 digits'; msg.className='result warn'; return; }
  if (!/^\d{10}$/.test(pass)) { msg.textContent = 'Password must be exactly 10 digits'; msg.className='result warn'; return; }

  const students = load(LS_KEYS.students, []);
  if (students.some(s => s.id === id)) {
    msg.textContent = 'This 4-digit ID is already registered';
    msg.className='result bad'; return;
  }
  students.push({ id, name, grade, pass });
  save(LS_KEYS.students, students);

  msg.textContent = 'Student saved ✓';
  msg.className = 'result ok';
  e.target.reset();
  renderStudentsTable();
});

/* ===== Students List ===== */
function renderStudentsTable() {
  const students = load(LS_KEYS.students, []);
  const tbody = $('#students-table tbody');
  const q = ($('#student-search')?.value || '').toLowerCase();
  tbody.innerHTML = '';
  students
    .filter(s => `${s.name} ${s.grade} ${s.id}`.toLowerCase().includes(q))
    .forEach(s => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(s.name)}</td>
        <td>${escapeHtml(s.grade)}</td>
        <td>${s.id}</td>
        <td>${s.pass}</td>
      `;
      tbody.appendChild(tr);
    });
}
$('#student-search').addEventListener('input', renderStudentsTable);

/* ===== Meal Check-in ===== */
let triesLeft = 3;
let foundStudent = null;

$('#meal-id-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = $('#meal-id').value.trim();
  const students = load(LS_KEYS.students, []);
  const st = students.find(s => s.id === id);
  const card = $('#meal-student-card');
  const res = $('#meal-result');
  const triesEl = $('#tries-left');

  res.textContent = ''; res.className = 'result';
  triesLeft = 3;
  triesEl.textContent = '';

  if (!/^\d{4}$/.test(id)) {
    res.textContent = 'ID must be 4 digits';
    res.className = 'result warn';
    card.classList.add('hidden');
    return;
  }

  if (!st) {
    res.textContent = 'No student found for this ID';
    res.className = 'result bad';
    card.classList.add('hidden');
    return;
  }

  // Show info (without password)
  $('#meal-student-name').textContent = st.name;
  $('#meal-student-grade').textContent = st.grade;
  $('#meal-student-id').textContent = st.id;
  $('#meal-pass').value = '';
  card.classList.remove('hidden');
  $('#meal-pass').focus();
  foundStudent = st;
});

$('#meal-pass-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const res = $('#meal-result');
  const triesEl = $('#tries-left');
  if (!foundStudent) return;

  const pass = $('#meal-pass').value.trim();
  if (!/^\d{10}$/.test(pass)) {
    res.textContent = 'Password must be 10 digits';
    res.className = 'result warn';
    return;
  }

  if (pass !== foundStudent.pass) {
    triesLeft -= 1;
    if (triesLeft > 0) {
      res.textContent = `Incorrect password. ${triesLeft} attempt(s) left.`;
      res.className = 'result bad';
      triesEl.textContent = `Attempts left: ${triesLeft}`;
    } else {
      res.textContent = 'Please ask the admin your 10-digit password.';
      res.className = 'result bad';
      triesEl.textContent = '';
      // reset flow
      foundStudent = null;
      $('#meal-student-card').classList.add('hidden');
      $('#meal-id').value = '';
      $('#meal-id').focus();
    }
    return;
  }

  // Correct password -> check time slot and mark
  const slot = currentSlot();
  if (!slot) {
    res.textContent = 'Not within any meal time frame.';
    res.className = 'result warn';
    return;
  }
  const today = dateKey(new Date());
  const meals = load(LS_KEYS.meals, {});
  meals[today] = meals[today] || {};
  meals[today][foundStudent.id] = meals[today][foundStudent.id] || { breakfast:false, lunch:false, dinner:false };

  if (meals[today][foundStudent.id][slot]) {
    res.textContent = `Already, You have eaten ${slot} today.`;
    res.className = 'result warn';
  } else {
    meals[today][foundStudent.id][slot] = true;
    save(LS_KEYS.meals, meals);
    const lang = load(LS_KEYS.settings, DEFAULTS.settings).language;
    res.textContent = `Have a good ${slotLabel(slot, lang)}! ✅`;
    res.className = 'result ok';
    // Clear for next student
    setTimeout(() => {
      foundStudent = null;
      $('#meal-student-card').classList.add('hidden');
      $('#meal-id').value = '';
      $('#meal-id').focus();
      renderReportTable(); // live update report if open
    }, 7000);
  }
});

/* ===== Report ===== */
function renderReportTable() {
  const students = load(LS_KEYS.students, []);
  const meals = load(LS_KEYS.meals, {});
  const date = $('#report-date').value || dateKey(new Date());
  const tbody = $('#report-table tbody');
  tbody.innerHTML = '';
  students.forEach(s => {
    const rec = (meals[date] && meals[date][s.id]) || { breakfast:false, lunch:false, dinner:false };
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${escapeHtml(s.name)}</td>
      <td>${escapeHtml(s.grade)}</td>
      <td>${s.id}</td>
      <td>${rec.breakfast ? '☑️' : '❌'}</td>
      <td>${rec.lunch ? '☑️' : '❌'}</td>
      <td>${rec.dinner ? '☑️' : '❌'}</td>
    `;
    tbody.appendChild(row);
  });
}
$('#report-refresh').addEventListener('click', renderReportTable);
$('#report-date').addEventListener('change', renderReportTable);

/* ===== Helpers ===== */
function escapeHtml(s){ return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ===== Init ===== */
function init() {
  // Year in footer
  $('#year').textContent = new Date().getFullYear();

  // Load settings & apply
  loadSettingsUI();

  // Set default date to today for report
  $('#report-date').value = dateKey(new Date());

  // Render tables
  renderStudentsTable();
  renderReportTable();

  // Update slot summary every minute
  setInterval(renderSlotSummary, 60000);
}
document.addEventListener('DOMContentLoaded', init);