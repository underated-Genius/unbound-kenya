// ============================================
// UNBOUND KENYA - MAIN JAVASCRIPT
// Three.js, GSAP, Quiz, Interactions
// ============================================

// Global variables
let heroScene, heroCamera, heroRenderer, heroOrb;
let currentQuestionIndex = 0;
let quizAnswers = {};
let explorerCount = 1247;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initHeroCanvas();
    initScrollAnimations();
    initQuiz();
    initMobileGallery();
    initExplorerCounter();
    initNavigation();
    smoothScrollLinks();
});

// ============================================
// THREE.JS HERO SECTION
// ============================================

function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const container = canvas.parentElement;

    // Scene setup
    heroScene = new THREE.Scene();
    
    // Camera
    heroCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    heroCamera.position.z = 5;

    // Renderer
    heroRenderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: true 
    });
    heroRenderer.setSize(window.innerWidth, window.innerHeight);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create glowing orb
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0xd4a574,
        emissive: 0xd4a574,
        emissiveIntensity: 0.5,
        shininess: 100,
        transparent: true,
        opacity: 0.8
    });
    
    heroOrb = new THREE.Mesh(geometry, material);
    heroOrb.position.set(2, 1, 0);
    heroScene.add(heroOrb);

    // Add point light for glow effect
    const pointLight = new THREE.PointLight(0xd4a574, 2, 10);
    pointLight.position.copy(heroOrb.position);
    heroScene.add(pointLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    heroScene.add(ambientLight);

    // Add particles
    addParticles();

    // Handle window resize
    window.addEventListener('resize', onHeroResize);

    // Animation loop
    animateHero();
}

function addParticles() {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    heroScene.add(particlesMesh);
}

function animateHero() {
    requestAnimationFrame(animateHero);

    if (heroOrb) {
        // Rotate orb
        heroOrb.rotation.x += 0.003;
        heroOrb.rotation.y += 0.005;
        
        // Gentle floating motion
        heroOrb.position.y = 1 + Math.sin(Date.now() * 0.001) * 0.3;
    }

    // Rotate particles
    heroScene.children.forEach(child => {
        if (child instanceof THREE.Points) {
            child.rotation.y += 0.0005;
        }
    });

    if (heroRenderer && heroScene && heroCamera) {
        heroRenderer.render(heroScene, heroCamera);
    }
}

function onHeroResize() {
    if (heroCamera && heroRenderer) {
        heroCamera.aspect = window.innerWidth / window.innerHeight;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// ============================================
// GSAP SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Parallax backgrounds
    gsap.utils.toArray('.parallax-bg').forEach((bg, index) => {
        gsap.to(bg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: bg.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Region cards fade-in
    gsap.utils.toArray('.region-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate hero content on load
    gsap.from('.hero-content', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Stagger hero stats
    gsap.from('.stat-item', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'power2.out'
    });
}

// ============================================
// QUIZ FUNCTIONALITY
// ============================================

function initQuiz() {
    const questions = document.querySelectorAll('.quiz-question');
    const optionButtons = document.querySelectorAll('.option-button');

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            const questionNum = question.dataset.question;
            const value = this.dataset.value;

            // Store answer
            quizAnswers[questionNum] = value;

            // Highlight selected option
            question.querySelectorAll('.option-button').forEach(btn => {
                btn.style.borderColor = 'transparent';
                btn.style.transform = 'scale(1)';
            });
            this.style.borderColor = 'var(--color-primary)';
            this.style.transform = 'scale(1.05)';

            // Move to next question or show result
            setTimeout(() => {
                if (currentQuestionIndex < questions.length - 1) {
                    questions[currentQuestionIndex].classList.remove('active');
                    currentQuestionIndex++;
                    questions[currentQuestionIndex].classList.add('active');
                } else {
                    showQuizResult();
                }
            }, 500);
        });
    });
}

function showQuizResult() {
    // Hide questions
    document.querySelectorAll('.quiz-question').forEach(q => {
        q.style.display = 'none';
    });

    // Build recommendation key
    const landscape = quizAnswers['1'] || 'coast';
    const activity = quizAnswers['2'] || 'relaxed';
    const vibe = quizAnswers['3'] || 'comfort';
    
    const recommendationKey = `${landscape}-${activity}-${vibe}`;
    
    // Get recommendation
    let recommendedGemId = QUIZ_RECOMMENDATIONS[recommendationKey];
    
    // Fallback to default if no exact match
    if (!recommendedGemId) {
        recommendedGemId = DEFAULT_RECOMMENDATIONS[landscape] || 'lamu-island';
    }
    
    const recommendedGem = GEMS_DATA.find(gem => gem.id === recommendedGemId);

    // Show result
    const resultSection = document.getElementById('quizResult');
    document.getElementById('resultImage').src = recommendedGem.image;
    document.getElementById('resultName').textContent = recommendedGem.name;
    document.getElementById('resultDescription').textContent = recommendedGem.description;
    
    resultSection.style.display = 'block';

    // Animate result
    gsap.from(resultSection, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Setup explore button
    document.getElementById('exploreOnMap').onclick = function() {
        window.location.href = `map.html?highlight=${recommendedGem.id}`;
    };
}

// ============================================
// MOBILE GALLERY
// ============================================

function initMobileGallery() {
    const galleryScroll = document.getElementById('galleryScroll');
    if (!galleryScroll) return;

    // Show on mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
        document.querySelector('.mobile-gallery').style.display = 'block';
        
        // Populate gallery
        const featured = GEMS_DATA.slice(0, 9);
        
        galleryScroll.innerHTML = featured.map(gem => `
            <div class="gallery-card glass-card">
                <img src="${gem.image}" alt="${gem.name}" class="gallery-image">
                <h3 class="gallery-name">${gem.name}</h3>
                <p class="gallery-region">${gem.region.toUpperCase()}</p>
                <button class="gallery-button" onclick="window.location.href='map.html?highlight=${gem.id}'">
                    Learn More
                </button>
            </div>
        `).join('');
    }
}

// ============================================
// EXPLORER COUNTER
// ============================================

function initExplorerCounter() {
    const counterElement = document.getElementById('explorerCount');
    if (!counterElement) return;

    // Animate initial count
    animateCounter(counterElement, 0, explorerCount, 2000);

    // Increment randomly every 10 seconds
    setInterval(() => {
        explorerCount += Math.floor(Math.random() * 5) + 1;
        animateCounter(counterElement, parseInt(counterElement.textContent), explorerCount, 1000);
    }, 10000);
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function smoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function smoothScroll(selector) {
    const target = document.querySelector(selector);
    if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Debounce function for performance
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Log page load time
window.addEventListener('load', () => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                     window.performance.timing.navigationStart;
    console.log(`🚀 Unbound Kenya loaded in ${loadTime}ms`);
});

// ============================================
// ERROR HANDLING
// ============================================

window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.message);
    // In production, you'd send this to an error tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ============================================
// EXPORT FOR TESTING
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        smoothScroll,
        formatNumber,
        debounce,
        isInViewport
    };
}

console.log('🦁 Unbound Kenya - Discover the 95%');
console.log('📍 Interactive map, quizzes, and hidden gems await!');
