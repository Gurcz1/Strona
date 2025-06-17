/* i18n */
const dict={pl:{'nav.about':'O mnie','nav.projects':'Projekty','nav.contact':'Kontakt',tagline:'CIEKAWY ROZWOJU SPORTOWIEC-STUDENT',headline:'Cześć, jestem Jakub —\nwszechstronny i zawsze chętny na coś nowego.',intro:'Programista, pasjonat sportu i ciągłego rozwoju.',cta:'Zobacz projekty','projects.title':'Projekty','projects.subtitle':'Ostatnie rzeczy, nad którymi pracowałem:','linki.desc':'Prosta aplikacja „link hub”, która pozwala stworzyć elegancką stronę z przyciskami do wybranych serwisów.','linki.f1':'Dowolna liczba linków','linki.f2':'Etykiety, kolory, ikony','linki.f3':'Własne ikony i drag-&-drop','linki.f4':'Dane lokalnie – bez logowania','linki.btn':'Repozytorium','pos.desc':'System POS dla restauracji: obsługa zamówień, stolików i płatności w jednym miejscu.','pos.f1':'Zamówienia w czasie rzeczywistym','pos.f2':'Panel kelnera i kuchni','pos.f3':'Integracja płatności online','pos.f4':'Statystyki sprzedaży','pos.btn':'Repozytorium','contact.title':'Kontakt','contact.note':'Chętnie odpowiem na Twoją wiadomość!',title:'Jakub Góralski – Programista & Sportowiec'},en:{'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',tagline:'CURIOUS GROWTH-DRIVEN ATHLETE-SCHOLAR',headline:"Hi, I'm Jakub —\nversatile and always up for something new.",intro:'Developer, sports enthusiast and lifelong learner.',cta:'See projects','projects.title':'Projects','projects.subtitle':'Here are a few things I’ve been working on:','linki.desc':'A simple “link hub” app that lets you build a sleek page with buttons to any services you choose.','linki.f1':'Unlimited number of links','linki.f2':'Custom labels, colors & icons','linki.f3':'Upload icons & drag-and-drop order','linki.f4':'Data stored locally – no login','linki.btn':'View repository','pos.desc':'Restaurant POS system: orders, tables and payments in one dashboard.','pos.f1':'Real-time order tracking','pos.f2':'Waiter & kitchen panels','pos.f3':'Online payment integration','pos.f4':'Sales analytics','pos.btn':'View repository','contact.title':'Contact','contact.note':'Feel free to drop me a message!',title:'Jakub Góralski – Developer & Athlete'}};

let currentLang='pl';
const toggleBtn=document.getElementById('lang-toggle');

function applyLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n;
    if(dict[lang][k]) el.textContent=dict[lang][k];
  });
  document.title=dict[lang].title;
  document.documentElement.lang=lang;
  if(lang==='pl'){
    toggleBtn.textContent='EN';
    toggleBtn.setAttribute('aria-label','Change language to English');
  }else{
    toggleBtn.textContent='PL';
    toggleBtn.setAttribute('aria-label','Zmień język na polski');
  }
  currentLang=lang;
}

toggleBtn.addEventListener('click',()=>applyLang(currentLang==='pl'?'en':'pl'));

applyLang('pl');
document.getElementById('year').textContent=new Date().getFullYear();

/* scroll-spy */
const sections=[...document.querySelectorAll('section[id]')];
const navLinks=[...document.querySelectorAll('.nav-links a')];
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    const id=e.target.id;
    const link=navLinks.find(a=>a.getAttribute('href')==='#'+id);
    if(link) link.classList.toggle('active',e.isIntersecting);
  });
},{rootMargin:'-40% 0px -45% 0px'});
sections.forEach(sec=>obs.observe(sec));
