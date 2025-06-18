/* ---------- SŁOWNIKI ---------- */
const dict={
  pl:{
    /* NAV & HERO */
    'nav.about':'O mnie','nav.projects':'Projekty','nav.contact':'Kontakt',
    tagline:'CIEKAWY ROZWOJU SPORTOWIEC-STUDENT',
    headline:'Cześć, jestem Jakub —\nwszechstronny i zawsze chętny na coś nowego.',
    intro:'Programista, pasjonat sportu i ciągłego rozwoju.',
    cta:'Zobacz projekty',

    /* PROJEKTY */
    'projects.title':'Projekty',
    'projects.subtitle':'Ostatnie rzeczy, nad którymi pracowałem:',

    'linki.desc':'Prosta aplikacja „link hub”, która pozwala stworzyć elegancką stronę z przyciskami do wybranych serwisów.',
    'linki.f1':'Dowolna liczba linków','linki.f2':'Etykiety, kolory, ikony',
    'linki.f3':'Drag-&-drop','linki.f4':'Dane lokalnie – bez logowania',
    'linki.btn':'Repozytorium',

    'soon.img':'Wkrótce','soon.title':'Projekt w przygotowaniu',
    'soon.desc':'Kolejna aplikacja pojawi się tutaj niedługo – zaglądaj!',
    'soon.f1':'Responsywny UI','soon.f2':'Nowoczesny stack','soon.f3':'Otwarte API',
    'soon.btn':'Wkrótce',

    /* CONTACT */
    'contact.title':'Kontakt','contact.note':'Chętnie odpowiem na Twoją wiadomość!',
    title:'Jakub Góralski – Programista & Sportowiec'

    dict.pl['linki.demo'] = 'Demo';
  },

  en:{
    'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
    tagline:'CURIOUS GROWTH-DRIVEN ATHLETE-SCHOLAR',
    headline:"Hi, I'm Jakub —\nversatile and always up for something new.",
    intro:'Developer, sports enthusiast and lifelong learner.',
    cta:'See projects',

    'projects.title':'Projects',
    'projects.subtitle':'Here are a few things I’ve been working on:',

    'linki.desc':'A simple “link hub” app that lets you build a sleek page with buttons to any services you choose.',
    'linki.f1':'Unlimited number of links','linki.f2':'Custom labels, colors & icons',
    'linki.f3':'Drag-and-drop order','linki.f4':'Data stored locally – no login',
    'linki.btn':'View repository',

    'soon.img':'Coming soon','soon.title':'Project in progress',
    'soon.desc':'A brand-new app will land here soon – stay tuned!',
    'soon.f1':'Responsive UI','soon.f2':'Modern stack','soon.f3':'Open API',
    'soon.btn':'Coming soon',

    'contact.title':'Contact','contact.note':'Feel free to drop me a message!',
    title:'Jakub Góralski – Developer & Athlete'

    dict.en['linki.demo'] = 'Live demo';
  }
};

/* -------- I18N LOGIKA -------- */
let currentLang='pl';
const toggle=document.getElementById('lang-toggle');

function applyLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n;
    if(dict[lang][k]) el.textContent=dict[lang][k];
  });
  document.title=dict[lang].title;
  document.documentElement.lang=lang;
  toggle.textContent=lang==='pl'?'EN':'PL';
  toggle.setAttribute('aria-label',lang==='pl'?'Change language to English':'Zmień język na polski');
  currentLang=lang;
}
toggle.addEventListener('click',()=>applyLang(currentLang==='pl'?'en':'pl'));
applyLang('pl');

/* rok w stopce */
document.getElementById('year').textContent=new Date().getFullYear();

/* -------- Scroll-spy -------- */
const sections=[...document.querySelectorAll('section[id]')];
const navLinks=[...document.querySelectorAll('.nav-links a')];
const spy=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    const link=navLinks.find(a=>a.getAttribute('href')==='#'+e.target.id);
    if(link) link.classList.toggle('active',e.isIntersecting);
  });
},{rootMargin:'-40% 0px -45% 0px'});
sections.forEach(s=>spy.observe(s));
