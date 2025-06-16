const dict={
  pl:{
    'nav.about':'O mnie','nav.projects':'Projekty','nav.contact':'Kontakt',
    tagline:'CIEKAWY ROZWOJU SPORTOWIEC-STUDENT',
    headline:'Cześć, jestem Jakub —\nwszechstronny i zawsze chętny na coś nowego.',
    intro:'Programista, pasjonat sportu i ciągłego rozwoju.',
    cta:'Zobacz projekty',
    'projects.title':'Projekty',
    'projects.subtitle':'Kilka rzeczy, nad którymi pracowałem ostatnio:',
    'projects.example':'Generator planów posiłków z wykorzystaniem AI.',
    'contact.title':'Kontakt',
    'contact.note':'Chętnie odpowiem na Twoją wiadomość!'
  },
  en:{
    'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
    tagline:'CURIOUS GROWTH-DRIVEN ATHLETE-SCHOLAR',
    headline:`Hi, I'm Jakub –\nversatile and always up for something new.`,
    intro:'Developer, sports enthusiast and lifelong learner.',
    cta:'See projects',
    'projects.title':'Projects',
    'projects.subtitle':'Here are a few things I’ve been working on:',
    'projects.example':'AI-powered meal-planning assistant.',
    'contact.title':'Contact',
    'contact.note':'Feel free to drop me a message!'
  }
};

let currentLang='pl';
const toggle=document.getElementById('lang-toggle');

function applyLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent=dict[lang][el.dataset.i18n];
  });
  document.documentElement.lang=lang;
  toggle.textContent=lang==='pl'?'EN':'PL';
  toggle.setAttribute(
    'aria-label',
    lang==='pl'?'Change language to English':'Zmień język na polski'
  );
  currentLang=lang;
}

toggle.addEventListener('click',()=>applyLang(currentLang==='pl'?'en':'pl'));
applyLang('pl');
document.getElementById('year').textContent=new Date().getFullYear();
