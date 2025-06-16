const dict={
  pl:{
    tagline:'CIEKAWY ROZWOJU SPORTOWIEC-STUDENT',
    headline:'Cześć, jestem Jakub —\nwszechstronny i zawsze chętny na coś nowego.',
    lead:'Programista-pasjonat sportu i ciągłego rozwoju.',
    cta:'Zobacz moje projekty',
    'projects.title':'Projekty',
    'projects.subtitle':'Poniżej kilka rzeczy, nad którymi pracowałem ostatnio:',
    'projects.example':'Generator planów posiłków z wykorzystaniem AI i OpenAI API.',
    'cv.title':'CV',
    'cv.subtitle':'Chcesz poznać moją ścieżkę edukacji i doświadczenie?',
    'cv.button':'Pobierz PDF',
    'contact.title':'Kontakt',
    'contact.note':'Chętnie odpowiem na Twoją wiadomość!'
  },
  en:{
    tagline:'CURIOUS GROWTH-DRIVEN ATHLETE-SCHOLAR',
    headline:`Hi, I'm Jakub –\nversatile and always up for something new.`,
    lead:'Developer, sports enthusiast and lifelong learner.',
    cta:'See my projects',
    'projects.title':'Projects',
    'projects.subtitle':'Here are a few things I\'ve been working on lately:',
    'projects.example':'AI meal-planning assistant using the OpenAI API.',
    'cv.title':'CV',
    'cv.subtitle':'Want to see my education and experience?',
    'cv.button':'Download PDF',
    'contact.title':'Contact',
    'contact.note':'Feel free to drop me a message!'
  }
};

let currentLang='pl';
const toggleBtn=document.getElementById('lang-toggle');

function switchLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent=dict[lang][el.getAttribute('data-i18n')];
  });
  toggleBtn.textContent=lang==='pl'?'EN':'PL';
  document.documentElement.lang=lang;
  currentLang=lang;
}

toggleBtn.addEventListener('click',()=>switchLang(currentLang==='pl'?'en':'pl'));
switchLang('pl');
document.getElementById('year').textContent=new Date().getFullYear();
