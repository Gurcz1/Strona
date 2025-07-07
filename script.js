/* ---------- SŁOWNIKI ---------- */
const dict={
  pl:{
    /* NAV & HERO */
    'nav.about':'O mnie','nav.projects':'Projekty','nav.contact':'Kontakt',
    tagline:'FULLSTACK DEVELOPER • SPORTOWIEC • CIĄGLE UCZĘ SIĘ NOWYCH RZECZY',
    headline:'Cześć! Jestem Jakub 👋\nTworzę nowoczesne aplikacje webowe z pasją.',
    intro:'Programista z Polski 🇵🇱 specjalizujący się w React i Node.js. Pasjonat sportu, który kod traktuje jak trening — ciągłe doskonalenie i przekraczanie granic. Obecnie dostępny na nowe projekty!',
    cta:'Zobacz moje projekty',
    'tech.label':'Stack technologiczny:',

    /* PROJEKTY */
    'projects.title':'Projekty',
    'projects.subtitle':'Ostatnie rzeczy, nad którymi pracowałem:',
    'features.title':'Funkcje:',

    'linki.desc':'Elegancka aplikacja "link hub" umożliwiająca tworzenie spersonalizowanej strony z przyciskami do ulubionych serwisów. Idealna dla twórców treści, influencerów i wszystkich, którzy chcą mieć swoje linki w jednym miejscu.',
    'linki.f1':'Nieograniczona liczba linków z możliwością dodawania własnych','linki.f2':'Pełna personalizacja - etykiety, kolory, ikony',
    'linki.f3':'Intuicyjne przesuwanie elementów metodą drag-and-drop','linki.f4':'Przechowywanie danych lokalnie - brak konieczności logowania',
    'linki.btn':'Repozytorium',
    'linki.demo':'Demo na żywo',

    'flow.desc':'Zaawansowany system zarządzania przepływem pracy zaprojektowany dla zespołów. Koordynuje zamówienia, zadania i komunikację między różnymi działami, zapewniając płynność procesów biznesowych.',
    'flow.f1':'Panel pracownika - zarządzanie zamówieniami i kategoriami',
    'flow.f2':'Widok realizatora - śledzenie statusów i kolejek zadań',
    'flow.f3':'Panel administratora - analiza danych i raporty',
    'flow.f4':'Działa lokalnie, bez wymagań rejestracyjnych',
    'flow.f5':'Łatwe wdrożenie z bazami danych (Firebase, Supabase)',
    'flow.btn':'Repozytorium',
    'flow.demo':'Demo na żywo',

    'soon.img':'Wkrótce','soon.title':'Projekt w przygotowaniu',
    'soon.desc':'Kolejna innowacyjna aplikacja jest w fazie rozwoju. Wykorzystuje najnowsze technologie i najlepsze praktyki programowania. Następny poziom moich umiejętności!',
    'soon.f1':'W pełni responsywny interfejs użytkownika','soon.f2':'Nowoczesny stack technologiczny','soon.f3':'RESTful API z dokumentacją',
    'soon.btn':'Wkrótce',

    /* CONTACT */
    'contact.title':'Kontakt','contact.note':'Chętnie odpowiem na Twoją wiadomość!',
    title:'Jakub Góralski – Programista & Sportowiec'
  },

  en:{
    'nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
    tagline:'FULLSTACK DEVELOPER • ATHLETE • ALWAYS LEARNING SOMETHING NEW',
    headline:"Hey there! I'm Jakub 👋\nBuilding modern web apps with passion.",
    intro:'Developer from Poland 🇵🇱 specializing in React & Node.js. Sports enthusiast who treats code like training — constant improvement and pushing boundaries. Currently available for new projects!',
    cta:'View my projects',
    'tech.label':'Tech Stack:',

    'projects.title':'Projects',
    'projects.subtitle':'Here are a few things I've been working on:',
    'features.title':'Features:',

    'linki.desc':'An elegant link hub application that enables creating a personalized page with buttons to your favorite services. Perfect for content creators, influencers, and anyone who wants to have all their links in one place.',
    'linki.f1':'Unlimited custom links with full customization options','linki.f2':'Complete personalization - custom labels, colors & icons',
    'linki.f3':'Intuitive drag-and-drop reordering','linki.f4':'Local data storage - no registration required',
    'linki.btn':'View repository',
    'linki.demo':'Live demo',
    
    'flow.desc':'Advanced workflow management system designed for teams. Coordinates orders, tasks and communication between different departments, ensuring smooth business processes.',
    'flow.f1':'Employee portal – order management and categories',
    'flow.f2':'Executor dashboard – status tracking and task queues',
    'flow.f3':'Admin panel – data analytics and reporting',
    'flow.f4':'Runs locally with no registration requirements',
    'flow.f5':'Easy deployment with databases (Firebase, Supabase)',
    'flow.btn':'View repository',
    'flow.demo':'Live demo',

    'soon.img':'Coming soon','soon.title':'Project in development',
    'soon.desc':'Another innovative application is in development phase. Utilizing the latest technologies and best programming practices. The next level of my skills!',
    'soon.f1':'Fully responsive user interface','soon.f2':'Modern technology stack','soon.f3':'RESTful API with documentation',
    'soon.btn':'Coming soon',

    'contact.title':'Contact','contact.note':'Feel free to drop me a message!',
    title:'Jakub Góralski – Developer & Athlete'
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

/* -------- Mobile Navigation -------- */
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    const isOpen = navLinks.classList.contains('mobile-open');
    mobileToggle.setAttribute('aria-expanded', isOpen);
    mobileToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Close mobile menu when clicking on a link
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('mobile-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.textContent = '☰';
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.textContent = '☰';
    }
  });
}

/* -------- Enhanced Smooth Scrolling -------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* rok w stopce */
document.getElementById('year').textContent=new Date().getFullYear();

/* -------- Enhanced Scroll-spy -------- */
const sections=[...document.querySelectorAll('section[id]')];
const navLinksAnchors=[...document.querySelectorAll('.nav-links a[href^="#"]')];

// Enhanced intersection observer with better thresholds
const spy=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const link=navLinksAnchors.find(a=>a.getAttribute('href')==='#'+entry.target.id);
    if(link) {
      link.classList.toggle('active', entry.isIntersecting);
    }
  });
},{
  rootMargin:'-20% 0px -60% 0px',
  threshold: [0.1, 0.5, 0.9]
});

sections.forEach(section => spy.observe(section));

/* -------- Header Background on Scroll -------- */
const header = document.querySelector('.site-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  // Add/remove scrolled class for background opacity
  if (currentScrollY > 100) {
    header.style.background = 'rgba(0,0,0,0.95)';
  } else {
    header.style.background = 'rgba(0,0,0,0.9)';
  }
  
  lastScrollY = currentScrollY;
});

/* -------- Performance Optimization -------- */
// Lazy load images when they come into view
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    }
  });
});

// Observe all images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

/* -------- Enhanced Animations on Scroll -------- */
const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px'
});

// Observe elements for animation
document.querySelectorAll('.project-card, .tech-badge').forEach(el => {
  animateOnScroll.observe(el);
});

/* -------- Accessibility Enhancements -------- */
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks && navLinks.classList.contains('mobile-open')) {
    navLinks.classList.remove('mobile-open');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.textContent = '☰';
      mobileToggle.focus();
    }
  }
});

// Focus management for better keyboard navigation
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function trapFocus(element) {
  const focusables = element.querySelectorAll(focusableElements);
  const firstFocusable = focusables[0];
  const lastFocusable = focusables[focusables.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// Apply focus trapping to mobile menu when open
if (navLinks) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (navLinks.classList.contains('mobile-open')) {
          trapFocus(navLinks);
        }
      }
    });
  });
  observer.observe(navLinks, { attributes: true });
}
