/* Main JS for index.html
   - Manages sidebar navigation
   - Renders tools list
   - Language and theme handling (persisted in localStorage)
*/

const TRANSLATIONS = {
  "en":{
    app_title: "Service Tools",
    app_sub: "Modern 3D Dashboard",
    nav_preview: "Preview",
    nav_tools: "Tools",
    nav_settings: "Settings",
    preview_title: "Welcome to IB TECH Service",
    preview_desc: "This is the advanced service controller.In the case of giving multi directional service that occur in our society that doesn't get a care by others but leads us to many loss or degradation of our economic capacity. Though it's not necessary to list these problems, we tried to solve them as much as we can and we provided some fully functional service against them.And the goal of this web app is to give at least  10 different urgent solution for societal problem that seen repeatedly,For coming 5 years.We have been providing the solution package Among them IMESOB was the one that launched completely to start a service.Additionally  Our wish is to see the complete implications of our job.Than any people I have a thanks to Prime Minister of Ethiopia, D.r Abiy Ahmed who started the 5 million E-coders initiatives.And by this way I wish to handover my admire to him.",
    feature_1: "Simple and accessible",
    feature_2: "By three languages (EN / AM / OR)",
    feature_3: "Advanced settings",
    settings_title: "Settings",
    settings_language: "Language",
    settings_theme: "Theme",
    settings_reset: "Reset to defaults",
    sidebar_help: "Tip: Click cards to open tools",
    tool_meal_title: "I-MESOB",
    tool_meal_desc: "Manage menus, schedules and notifications for meals.",
    tool_vote_title: "Coming Soon",
    tool_vote_desc: "Would be released later.",
    tool_tv_title: "Coming Soon",
    tool_tv_desc: "Would be released later .",
    tool_lib_title: "Coming Soon",
    tool_lib_desc: "Would be released later.",
  },
  "am":{
    app_title: "አገልግሎት መሣሪያዎች",
    app_sub: "ዘመናዊ 3D ዳሽቦርድ",
    nav_preview: "ንድፍ",
    nav_tools: "መሣሪያዎች",
    nav_settings: "ማቀናበሪያ",
    preview_title: "እንኳን በደህና ወደ IB TECH አገልግሎት መጡ",
    preview_desc: "ይህ የዘመናዊ አገልግሎት መቆጣጠሪያ መስጫ ስሆን፣የተለያዩ አገልግሎቶችን በብዙ ቋንቋዎች ለመስጠት እና በማኅበረሠባችን ዉስጥ ያሉ ነገርግን በብዙዎች ያልተስተዋሉ እናም በክፉኛ የኢኮኖሚ ማሽቆልቆል ምክንያት የሆኑትን ለማቅረፍ የተሰራ ነው። ምንም እንኳን ችግሮችን መዘርዘር አስፈላጊ ባይሆንም፣ የችግሮቹን መፍትሄ ልናቀርብ ሞክረናል።እናም የዚህ ዌብ አፕ ሕልም ፣በሚቀጥሉት ፭ ዓመት ውስጥ ብያንስ  አሥር መፍቴዎችን ማቅረብ ነው።አሁንም ተሰርተዉ ወደ ስራ የሚገቡ አገልግሎቶችን እየሰጠን እንገኛለን። ከነዝህ መካከል እመሶብ ሙሉ በሙሉ አገልግሎት ለመስጠጥ የተልቀቀው አንዱ ነው።ስል ሆነም የኛ መፍትሄ በእዉኑ ለማኅበረሠቡ መፍትሄ ስሆን ማየት የኛ ታላቅ ደስታ ንዉ።",
    feature_1: "ለቀላል አጠቃቀም",
    feature_2: "በ ሥስት ቋንቋዉች(EN/AM/OR)",
    feature_3: "ማራኪ ማስተካከያ/ማቀናበሪ",
    settings_title: "ማቀናበሪያ",
    settings_language: "ቋንቋ",
    settings_theme: "ብርኃን",
    settings_reset: "ወደ መጀመርያ ተመለስ",
    sidebar_help: "ለመክፈት ካርዶችን ይጫኑ",
    tool_meal_title: "እ-መሶብ",
    tool_meal_desc: "የምግብ ማዕከላዊ መረጃዎችን ለመከታተል።",
    tool_vote_title: "በቅርብ ግዜ",
    tool_vote_desc: "በቅርቡ ይለቀቃ።",
    tool_tv_title: "በቅርብ ግዜ",
    tool_tv_desc: "በቅርቡ ይለቀቃ።",
    tool_lib_title: "በቅርብ ግዜ",
    tool_lib_desc: "በቅርቡ ይለቀቃል።",
  },
  "or":{
    app_title: "Tolaalee Tajaajilaa",
    app_sub: "3D Haala Ammee",
    nav_preview: "Ibsa",
    nav_tools: "meeshaalee",
    nav_settings: "Sirreeffama",
    preview_title: "Baga Nagaan Gara Tajaajila IB TECH tti Dhuftan",
    preview_desc: "Kun to'annoo tajaajila ammayyaatiif gadhiifame yoo ta'u,tajaajiloota adda addaa afaan adda addaatiin kennuu fi ,rakkoowwan hawaasa keessa jiran garuu namoota baay'een hin yaadamne garuu Gadi bu'uu ikonoomii tiif sababa guddaa ta'aniif furmaata kennuuf kan qophaa'edha.Rakkoowwan jiran tarrreessun hagas mara barbaachisaa ta'uu baatus,Furmaata isaanii dhiyeessuuf yaallee jirra.Kaayyoon guddaa weeb appii kanaa waggoota 5 dhufan keessatti yoo xiqqaate furmaatawwan kudhan dhiyeessuudha.Ammas Furmaatota adda addaa dhiyeessaa jira isaan keessaa I-MESOOOB tajaajila kennuuf guutummaa guututti kan gadhiifame isa tokko.Dhugumaan furmaanni keenya rakkoo hawaasaa furee arguun abjuu keenya guddaadha.",
    feature_1: "Fayyadama salphaa",
    feature_2: "Afaanota sadiin (ENGLISH / AMHARIC / OROMIC)",
    feature_3: "Sirreeffamoota hawwataan",
    settings_title: "Sirreeffama",
    settings_language: "Afaan",
    settings_theme: "Ifa",
    settings_reset: "Gara duraanitti deebisi",
    sidebar_help: "Kaardii cuqaasi tajaajila banuuf",
    tool_meal_title: "I-MESOB",
    tool_meal_desc: "Odeeffannoo nyaataa To'achuuf.",
    tool_vote_title: "Yeroo dhiyootti",
    tool_vote_desc: "Yeroo muraasa booda nii gadhiifama.",
    tool_tv_title: "Yeroo dhiyootti",
    tool_tv_desc: "Yeroo muraasa booda nii gadhiifama.",
    tool_lib_title: "Yeroo dhiyootti",
    tool_lib_desc: "Yeroo muraasa booda nii gadhiifama."
  }
};

const TOOLS = [
  {id:'meal', titleKey:'tool_meal_title', descKey:'tool_meal_desc', icon:'fa-utensils', href:'meals.html'},
  {id:'voting', titleKey:'tool_vote_title', descKey:'tool_vote_desc', icon:'fa-gift', href:'voting.html'},
  {id:'tv', titleKey:'tool_tv_title', descKey:'tool_tv_desc', icon:'fa-gift', href:'tv.html'},
  {id:'library', titleKey:'tool_lib_title', descKey:'tool_lib_desc', icon:'fa-gift', href:'library.html'},
];

/* --- State persistence --- */
const KEY_LANG = 'st_lang';
const KEY_THEME = 'st_theme';

function getSavedLang(){ return localStorage.getItem(KEY_LANG) || navigator.language?.startsWith('am')? 'am': (navigator.language?.startsWith('om')? 'or':'en'); }
function getSavedTheme(){ return localStorage.getItem(KEY_THEME) || 'system'; }

/* Apply theme */
function applyTheme(theme){
  document.body.classList.remove('light','dark');
  if(theme==='light') document.body.classList.add('light');
  else if(theme==='dark') document.body.classList.add('dark');
  else {
    // system
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(prefersDark? 'dark':'light');
  }
}

/* Translate all nodes with data-i18n attribute */
function translatePage(lang){
  const map = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(map[k]) el.textContent = map[k];
  });
}

/* Initialize tools grid */
function renderTools(lang){
  const grid = document.getElementById('tools-grid');
  grid.innerHTML = '';
  TOOLS.forEach(t=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="icon"><i class="fa-solid ${t.icon}"></i></div>
      <h3 data-title>${TRANSLATIONS[lang][t.titleKey] || TRANSLATIONS.en[t.titleKey]}</h3>
      <p data-desc>${TRANSLATIONS[lang][t.descKey] || TRANSLATIONS.en[t.descKey]}</p>
      <div class="badge"><small>Open</small><i class="fa-solid fa-arrow-right-long"></i></div>
    `;
    card.addEventListener('click', ()=>{ window.location.href = t.href; });
    card.addEventListener('keydown', (e)=>{ if(e.key==='Enter') window.location.href = t.href; });
    grid.appendChild(card);
  });
}

/* Navigation behaviour */
function activateSection(target){
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.target===target));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id===target));
}

/* Hook up events */
window.addEventListener('DOMContentLoaded', ()=>{
  // Initialize language & theme from storage
  const lang = localStorage.getItem(KEY_LANG) || 'en';
  const theme = getSavedTheme();
  document.getElementById('lang-select').value = lang;
  document.getElementById('theme-select').value = theme;
  applyTheme(theme);
  translatePage(lang);
  renderTools(lang);

  // Sidebar buttons
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activateSection(btn.dataset.target);
    });
  });

  // Language selector
  document.getElementById('lang-select').addEventListener('change', (e)=>{
    const v = e.target.value; localStorage.setItem(KEY_LANG, v); translatePage(v); renderTools(v);
    // provide live change for other strings inserted dynamically
  });

  // Theme selector
  document.getElementById('theme-select').addEventListener('change', (e)=>{
    const v = e.target.value; localStorage.setItem(KEY_THEME,v); applyTheme(v);
  });

  document.getElementById('reset-btn').addEventListener('click', ()=>{
    localStorage.removeItem(KEY_LANG); localStorage.removeItem(KEY_THEME);
    document.getElementById('lang-select').value = getSavedLang();
    document.getElementById('theme-select').value = getSavedTheme();
    translatePage(getSavedLang()); applyTheme(getSavedTheme()); renderTools(getSavedLang());
  });

});

// Ensure sidebar remains left on orientation change (CSS with fixed position handles it). No JS needed.