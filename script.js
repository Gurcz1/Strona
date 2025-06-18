/* ==================================================================== */
/* ░░ 1. SŁOWNIKI (PL / EN) ░░                                          */
/* ==================================================================== */
const dict = {
  pl: {
    /* — NAV & HERO — */
    'nav.about':'O mnie','nav.projects':'Projekty','nav.contact':'Kontakt',
    tagline:'CIEKAWY ROZWOJU SPORTOWIEC-STUDENT',
    headline:'Cześć, jestem Jakub —\nwszechstronny i zawsze chętny na coś nowego.',
    intro:'Programista, pasjonat sportu i ciągłego rozwoju.',
    cta:'Zobacz projekty',

    /* — MyLaunchpad — */
    'linki.desc':'Prosta aplikacja „link hub”, która pozwala stworzyć elegancką stronę z przyciskami do wybranych serwisów.',
    'linki.f1':'Dowolna liczba linków',
    'linki.f2':'Etykiety, kolory, ikony',
    'linki.f3':'Własne ikony i drag-&-drop',
    'linki.f4':'Dane lokalnie – bez logowania',
    'linki.btn':'Repozytorium','linki.demo':'Demo',

    /* — FlowPanel — */
    'flow.desc':'System zarządzania procesem obsługi, który koordynuje zamówienia i przepływ informacji.',
    'flow.f1':'Panel pracownika – zamówienia, kategorie',
    'flow.f2':'Widok realizatora – statusy, kolejki',
    'flow.f3':'Panel administratora – dane, raporty',
    'flow.f4':'Działa lokalnie, bez logowania',
    'flow.f5':'Łatwy do wdrożenia (Firebase / Supabase)',
    'flow.btn':'Repozytorium','flow.demo':'Demo',

    /* — Placeholder — */
    'soon.title':'Projekt w przygotowaniu',
    'soon.desc':'Kolejna aplikacja pojawi się tutaj niedługo – zaglądaj!',
    'soon.f1':'Responsywny UI','soon.f2':'Nowoczesny stack','soon.f3':'Otwarte API',
    'soon.btn':'Wkrótce',

    /* — CONTACT — */
    'contact.title':'Kontakt',
    'contact.name':'Imię','contact.email':'Email','contact.msg':'Wiadomość',
    'contact.send':'Wyślij','contact.note':'Chętnie odpowiem na Twoją wiadomość!'
  },

  en: {
    'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
    tagline:'CURIOUS GROWTH-DRIVEN ATHLETE-SCHOLAR',
    headline:"Hi, I'm Jakub —\nversatile and always up for something new.",
    intro:'Developer, sports enthusiast and lifelong learner.',
    cta:'See projects',

    'linki.desc':'A simple “link hub” app that lets you build a sleek page with buttons to any services you choose.',
    'linki.f1':'Unlimited number of links',
    'linki.f2':'Custom labels, colors & icons',
    'linki.f3':'Upload icons & drag-and-drop order',
    'linki.f4':'Data stored locally – no login',
    'linki.btn':'View repository','linki.demo':'Live demo',

    'flow.desc':'A workflow-management system coordinating orders, tasks and information flow between teams.',
    'flow.f1':'Employee panel – orders & categories',
    'flow.f2':'Executor view – statuses & queues',
    'flow.f3':'Admin panel – data & reports',
    'flow.f4':'Runs locally – no login',
    'flow.f5':'Easy to deploy (Firebase / Supabase)',
    'flow.btn':'View repository','flow.demo':'Live demo',

    'soon.title':'Project in progress',
    'soon.desc':'A brand-new app will appear here soon – stay tuned!',
    'soon.f1':'Responsive UI','soon.f2':'Modern stack','soon.f3':'Open API',
    'soon.btn':'Coming soon',

    'contact.title':'Contact',
    'contact.name':'Name','contact.email':'Email','contact.msg':'Message',
    'contact.send':'Send','contact.note':'Feel free to drop me a message!'
  }
};


/* ==================================================================== */
/* ░░ 2. FUNKCJE i18n ░░                                                */
/* ==================================================================== */
function applyLang(lang){
  document.documentElement.lang = lang;
  const trans = dict[lang] || dict.pl;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(trans[key]) el.textContent = trans[key];
  });
}
let currentLang = 'pl';
applyLang(currentLang);

/* toggle przycisku */
document.getElementById('lang-toggle').addEventListener('click',()=>{
  currentLang = currentLang === 'pl' ? 'en' : 'pl';
  applyLang(currentLang);
  document.getElementById('lang-toggle').textContent = currentLang.toUpperCase()==='PL'?'EN':'PL';
});


/* ==================================================================== */
/* ░░ 3. Scroll-spy → aria-current ░░                                   */
/* ==================================================================== */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...navLinks].map(a=>document.querySelector(a.getAttribute('href')));

function setCurrent(){
  const pos = window.scrollY + 100;         // offset dla sticky nav
  sections.forEach((sec,i)=>{
    const link = navLinks[i];
    if(pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight){
      link.setAttribute('aria-current','page');
    }else link.removeAttribute('aria-current');
  });
}
setCurrent();
addEventListener('scroll',setCurrent);


/* ==================================================================== */
/* ░░ 4. Rok w stopce ░░                                                */
/* ==================================================================== */
document.getElementById('year').textContent = new Date().getFullYear();


/* ==================================================================== */
/* ░░ 5. Focus-outline dla .btn-mini generowanych dynamicznie ░░        */
/* ==================================================================== */
document.addEventListener('keydown',e=>{
  if(e.key==='Tab'){
    document.body.classList.add('user-is-tabbing');
  }
});
