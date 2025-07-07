// ──────── NAVIGATION FUNCTIONALITY ────────
document.addEventListener('DOMContentLoaded', function() {
  // Navigation items and content sections
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');
  
  // Handle navigation clicks
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all nav items and sections
      navItems.forEach(nav => nav.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));
      
      // Add active class to clicked nav item
      this.classList.add('active');
      
      // Show corresponding content section
      const targetSection = this.getAttribute('data-section');
      const targetContent = document.getElementById(targetSection);
      
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
  
  // Mobile sidebar toggle (for responsive design)
  const sidebar = document.querySelector('.sidebar');
  let sidebarOpen = false;
  
  // Add mobile menu button functionality if needed
  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    sidebar.classList.toggle('open', sidebarOpen);
  }
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && sidebarOpen && !sidebar.contains(e.target)) {
      toggleSidebar();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('open');
      sidebarOpen = false;
    }
  });
  
  // Initialize animations
  initializeAnimations();
});

// ──────── NAVIGATION BUTTON FUNCTIONALITY ────────
function navigateToNewPage() {
  // You can customize this function to navigate to different pages
  // For now, it will create a simple standalone page
  
  // Option 1: Navigate to an external URL
  // window.open('https://example.com', '_blank');
  
  // Option 2: Navigate to an internal route
  // window.location.href = '/portfolio';
  
  // Option 3: Create a new standalone page dynamically
  createStandalonePage();
}

function createStandalonePage() {
  // Create a new window with portfolio content
  const newWindow = window.open('', '_blank', 'width=1200,height=800');
  
  const standaloneHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio - Om Kharche</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', sans-serif;
                background: #0a0a0a;
                color: #e4e6ea;
                line-height: 1.6;
                padding: 40px;
            }
            
            .header {
                text-align: center;
                margin-bottom: 50px;
            }
            
            .header h1 {
                font-size: 3rem;
                font-weight: 700;
                color: #fff;
                margin-bottom: 20px;
                background: linear-gradient(135deg, #26a6ff, #00ff88);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .header p {
                font-size: 1.2rem;
                color: #b3b3b3;
                max-width: 600px;
                margin: 0 auto;
            }
            
            .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 30px;
                max-width: 1200px;
                margin: 0 auto;
            }
            
            .project-card {
                background: #1a1a1a;
                border: 1px solid #2a2a2a;
                border-radius: 16px;
                padding: 30px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .project-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #26a6ff, #00ff88);
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }
            
            .project-card:hover::before {
                transform: scaleX(1);
            }
            
            .project-card:hover {
                transform: translateY(-8px);
                border-color: #26a6ff;
                box-shadow: 0 20px 40px rgba(38, 166, 255, 0.1);
            }
            
            .project-image {
                width: 100%;
                height: 200px;
                background: linear-gradient(135deg, #26a6ff, #00ff88);
                border-radius: 12px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #000;
                font-weight: 600;
                font-size: 1.1rem;
            }
            
            .project-title {
                font-size: 1.4rem;
                font-weight: 600;
                color: #fff;
                margin-bottom: 12px;
            }
            
            .project-description {
                color: #b3b3b3;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .project-tech {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 20px;
            }
            
            .tech-tag {
                background: #2a2a2a;
                color: #26a6ff;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.85rem;
                font-weight: 500;
            }
            
            .project-links {
                display: flex;
                gap: 12px;
            }
            
            .project-link {
                padding: 8px 16px;
                border: 2px solid #26a6ff;
                color: #26a6ff;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            
            .project-link:hover {
                background: #26a6ff;
                color: #000;
            }
            
            .project-link.primary {
                background: #26a6ff;
                color: #000;
            }
            
            .project-link.primary:hover {
                background: #1c86e6;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>My Portfolio</h1>
            <p>A collection of my recent projects and work. Each project represents a journey of learning, creativity, and problem-solving.</p>
        </div>
        
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">Project Preview</div>
                <div class="project-title">E-Commerce Platform</div>
                <div class="project-description">A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.</div>
                <div class="project-tech">
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">MongoDB</span>
                    <span class="tech-tag">Stripe API</span>
                </div>
                <div class="project-links">
                    <a href="#" class="project-link primary">Live Demo</a>
                    <a href="#" class="project-link">GitHub</a>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">Project Preview</div>
                <div class="project-title">Task Management App</div>
                <div class="project-description">A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</div>
                <div class="project-tech">
                    <span class="tech-tag">Vue.js</span>
                    <span class="tech-tag">Firebase</span>
                    <span class="tech-tag">Socket.io</span>
                    <span class="tech-tag">Vuetify</span>
                </div>
                <div class="project-links">
                    <a href="#" class="project-link primary">Live Demo</a>
                    <a href="#" class="project-link">GitHub</a>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">Project Preview</div>
                <div class="project-title">Weather Dashboard</div>
                <div class="project-description">A responsive weather dashboard that provides current weather conditions, forecasts, and interactive maps using multiple weather APIs.</div>
                <div class="project-tech">
                    <span class="tech-tag">JavaScript</span>
                    <span class="tech-tag">Chart.js</span>
                    <span class="tech-tag">Weather API</span>
                    <span class="tech-tag">CSS Grid</span>
                </div>
                <div class="project-links">
                    <a href="#" class="project-link primary">Live Demo</a>
                    <a href="#" class="project-link">GitHub</a>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">Project Preview</div>
                <div class="project-title">Social Media Analytics</div>
                <div class="project-description">A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights.</div>
                <div class="project-tech">
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">D3.js</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">PostgreSQL</span>
                </div>
                <div class="project-links">
                    <a href="#" class="project-link primary">Live Demo</a>
                    <a href="#" class="project-link">GitHub</a>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
  
  newWindow.document.write(standaloneHTML);
  newWindow.document.close();
  newWindow.focus();
}

// ──────── SMOOTH ANIMATIONS ────────
function initializeAnimations() {
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe animated elements
  const animatedElements = document.querySelectorAll('.service-card, .testimonial-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ──────── UTILITY FUNCTIONS ────────
// Add any additional utility functions here
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add smooth scroll behavior for any internal links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});