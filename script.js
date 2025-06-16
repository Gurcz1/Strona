/* ───────── Słowniki i18n ───────── */
const dict = {
  pl: {
    'nav.about':'O mnie','nav.projects':'Projekty','nav.contact':'Kontakt',
    tagline:'CIEKAWY ROZWOJU SPORTOWIEC-STUDENT',
    headline:'Cześć, jestem Jakub —\nwszechstronny i zawsze chętny na coś nowego.',
    intro:'Programista, pasjonat sportu i ciągłego rozwoju.',
    cta:'Zobacz projekty',
    'projects.title':'Projekty',
    'projects.subtitle':'Kilka rzeczy, nad którymi pracowałem ostatnio:',
    'projects.example':'Generator planów posiłków z wykorzystaniem AI.',
    'contact.title':'Kontakt',
    'contact.note':'Chętnie odpowiem na Twoją wiadomość!',
    title:'Jakub Fabian – Programista & Sportowiec'
  },
  en: {
    'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
    tagline:'CURIOUS GROWTH-DRIVEN ATHLETE-SCHOLAR',
    headline:`Hi, I'm Jakub –\nversatile and always up for something new.`,
    intro:'Developer, sports enthusiast and lifelong learner.',
    cta:'See projects',
    'projects.title':'Projects',
    'projects.subtitle':'Here are a few things I’ve been working on:',
    'projects.example':'AI-powered meal-planning assistant.',
    'contact.title':'Contact',
    'contact.note':'Feel free to drop me a message!',
    title:'Jakub Fabian – Developer & Athlete'
  }
};

let currentLang = 'pl';
const toggleBtn = document.getElementById('lang-toggle');

/* ───── Zastosuj język ───── */
function applyLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(dict[lang][key]) el.textContent = dict[lang][key];
  });
  document.title = dict[lang].title;
  document.documentElement.lang = lang;

  if(lang === 'pl'){
    toggleBtn.textContent = 'EN';
    toggleBtn.setAttribute('aria-label','Change language to English');
  } else {
    toggleBtn.textContent = 'PL';
    toggleBtn.setAttribute('aria-label','Zmień język na polski');
  }
  currentLang = lang;
}

/* ───── Obsługa kliknięcia ───── */
toggleBtn.addEventListener('click', () =>
  applyLang(currentLang === 'pl' ? 'en' : 'pl')
);

/* ───── Inicjalizacja ───── */
applyLang('pl');
document.getElementById('year').textContent = new Date().getFullYear();
