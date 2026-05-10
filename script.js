document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.onetap-card, .feature-box, .timeline-item, .section-header');

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Counter Animation for Impact Metrics
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const counterOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true;
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;

                        // Lower inc to slow down the count
                        const inc = target / 100;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 20);
                        } else {
                            // Format number if it's large
                            if (target >= 1000) {
                                counter.innerText = (target / 1000).toFixed(target % 1000 === 0 ? 0 : 1) + 'k+';
                            } else {
                                counter.innerText = target + '+';
                            }
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, counterOptions);

    const impactSection = document.getElementById('impact');
    if (impactSection) {
        counterObserver.observe(impactSection);
    }

    // ============================================================
    // ONE-TAP REPORTING LOGIC
    // ============================================================
    const locBadge = document.getElementById('otLocationBadge');
    const toast = document.getElementById('otToast');
    const toastIcon = document.getElementById('otToastIcon');
    const toastTitle = document.getElementById('otToastTitle');
    const scrollHint = document.getElementById('scrollHint');
    
    let userLocation = "Unknown Location";

    // --- 1. Auto Detect Location ---
    function detectLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // In a real app, you'd use reverse geocoding here
                    // Mocking a nearby area for the UI
                    const lat = position.coords.latitude.toFixed(4);
                    const lon = position.coords.longitude.toFixed(4);
                    userLocation = `Detected: Sector 24, MG Road (Near ${lat}, ${lon})`;
                    
                    if (locBadge) {
                        locBadge.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${userLocation}`;
                        locBadge.style.background = "rgba(39, 174, 96, 0.2)";
                    }
                },
                (error) => {
                    console.warn("Location access denied.");
                    userLocation = "Location: MG Road, Smart City";
                    if (locBadge) {
                        locBadge.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${userLocation} (Manual)`;
                    }
                }
            );
        }
    }
    detectLocation();

    // --- 2. Scroll Hint Logic ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100 && scrollHint) {
            scrollHint.style.opacity = '0';
            scrollHint.style.pointerEvents = 'none';
        }
    });

    // --- 3. Instant Report Action ---
    function reportInstantly(category, icon) {
        // Show loading state on card
        const cards = document.querySelectorAll('.onetap-card');
        cards.forEach(c => {
            if (c.getAttribute('data-category') === category) {
                c.style.pointerEvents = 'none';
                c.style.opacity = '0.7';
                const cta = c.querySelector('.onetap-cta');
                if (cta) cta.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Reporting...';
            }
        });

        // Simulate network delay
        setTimeout(() => {
            showToast(category, icon);
            
            // Reset card state
            cards.forEach(c => {
                if (c.getAttribute('data-category') === category) {
                    c.style.pointerEvents = 'all';
                    c.style.opacity = '1';
                    const cta = c.querySelector('.onetap-cta');
                    if (cta) cta.innerHTML = 'Tap to Report';
                }
            });
        }, 1500);
    }

    function showToast(category, icon) {
        if (!toast) return;
        
        toastIcon.textContent = icon;
        toastTitle.textContent = `${category} Reported!`;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // --- 4. Event Listeners ---
    document.querySelectorAll('.onetap-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // If it's the photo card, let the input handle it
            if (card.classList.contains('onetap-card--photo')) {
                const input = document.getElementById('otPhotoInput');
                if (e.target !== input) {
                    input.click();
                }
                return;
            }

            const cat = card.getAttribute('data-category');
            const icon = card.getAttribute('data-icon');
            reportInstantly(cat, icon);
        });
    });

    // Handle Photo Upload
    const photoInput = document.getElementById('otPhotoInput');
    if (photoInput) {
        photoInput.addEventListener('change', () => {
            if (photoInput.files && photoInput.files[0]) {
                reportInstantly("Photo Report", "📸");
            }
        });
    }
});