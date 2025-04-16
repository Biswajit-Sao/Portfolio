// Toggle Menu
function bsToggleMenu() {
    const menu = document.querySelector(".bs-menu-links");
    const icon = document.querySelector(".bs-hamburger-icon");
    const body = document.body;
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    // Toggle body overflow to prevent scrolling when menu is open
    if (menu.classList.contains("open")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
}

// Close menu when clicking on a link (optional)
document.querySelectorAll('.bs-menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            bsToggleMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector(".bs-menu-links");
    const icon = document.querySelector(".bs-hamburger-icon");
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnIcon = icon.contains(e.target);
    
    if (menu.classList.contains('open') && !isClickInsideMenu && !isClickOnIcon) {
        bsToggleMenu();
    }
});

// Scroll to top button
const bsBackToTopButton = document.getElementById('bs-backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        bsBackToTopButton.classList.add('show');
    } else {
        bsBackToTopButton.classList.remove('show');
    }
});

bsBackToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.bs-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Set current year in footer
document.getElementById('bs-year').textContent = new Date().getFullYear();

// Typing effect
const bsTypingText = document.querySelector('.bs-typing-text');
const bsWords = ['MERN Stack Developer', 'Web Developer', 'Frontend Developer', 'Backend Developer'];
let bsWordIndex = 0;
let bsCharIndex = 0;
let bsIsDeleting = false;
let bsIsEnd = false;

function bsType() {
    const currentWord = bsWords[bsWordIndex];
    const currentChar = currentWord.substring(0, bsCharIndex);
    bsTypingText.textContent = currentChar;

    if (!bsIsDeleting && bsCharIndex < currentWord.length) {
        // Typing
        bsCharIndex++;
        setTimeout(bsType, 100);
    } else if (bsIsDeleting && bsCharIndex > 0) {
        // Deleting
        bsCharIndex--;
        setTimeout(bsType, 50);
    } else {
        // Change word
        bsIsDeleting = !bsIsDeleting;
        if (!bsIsDeleting) {
            bsWordIndex = (bsWordIndex + 1) % bsWords.length;
        }
        setTimeout(bsType, 1000);
    }
}

// Start typing effect
setTimeout(bsType, 1000);

// Contact form submission
const bsContactForm = document.getElementById('bs-contactForm');
bsContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = bsContactForm.querySelector('.bs-submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        bsContactForm.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
});

// Skills tabs functionality
const bsTabBtns = document.querySelectorAll('.bs-tab-btn');
const bsTabContents = document.querySelectorAll('.bs-tab-content');

bsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        bsTabBtns.forEach(btn => btn.classList.remove('active'));
        bsTabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Projects filter functionality
const bsFilterBtns = document.querySelectorAll('.bs-filter-btn');
const bsProjectCards = document.querySelectorAll('.bs-project-card');

bsFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        bsFilterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        bsProjectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (document.querySelector('.bs-menu-links').classList.contains('open')) {
                bsToggleMenu();
            }
        }
    });
});

// Initialize particles.js
particlesJS('bs-particles', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#6366f1"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#6366f1",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Animate elements when scrolling
const bsAnimateOnScroll = () => {
    const elements = document.querySelectorAll('.bs-section-container, .bs-skills-grid, .bs-project-card, .bs-contact-container');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
document.querySelectorAll('.bs-section-container, .bs-skills-grid, .bs-project-card, .bs-contact-container').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', bsAnimateOnScroll);
window.addEventListener('load', bsAnimateOnScroll);
