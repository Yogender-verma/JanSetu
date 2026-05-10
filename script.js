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
        let isPhoto = category === "Photo Report";

        cards.forEach(c => {
            if (c.getAttribute('data-category') === category) {
                c.style.pointerEvents = 'none';
                c.style.opacity = '0.7';
                const cta = c.querySelector('.onetap-cta');
                if (cta) {
                    if (isPhoto) {
                        cta.innerHTML = '<i class="fa-solid fa-microchip fa-spin"></i> Analyzing Authenticity...';
                    } else {
                        cta.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Reporting...';
                    }
                }
            }
        });

        // Simulate network and AI detection delay
        const delay = isPhoto ? 3000 : 1500;
        
        setTimeout(() => {
            if (isPhoto) {
                showToast("Authenticity Verified", "🛡️", "Image passed AI-integrity check.");
            } else {
                showToast(category, icon);
            }
            
            // Reset card state
            cards.forEach(c => {
                if (c.getAttribute('data-category') === category) {
                    c.style.pointerEvents = 'all';
                    c.style.opacity = '1';
                    const cta = c.querySelector('.onetap-cta');
                    if (cta) {
                        if (isPhoto) cta.innerHTML = 'Tap to Upload';
                        else cta.innerHTML = 'Tap to Report';
                    }
                }
            });
        }, delay);
    }

    function showToast(category, icon, customMsg) {
        if (!toast) return;
        
        toastIcon.textContent = icon;
        toastTitle.textContent = category.includes("Verified") ? category : `${category} Reported!`;
        if (customMsg) {
            const msgEl = document.getElementById('otToastMsg');
            if (msgEl) msgEl.textContent = customMsg;
        } else {
            const msgEl = document.getElementById('otToastMsg');
            if (msgEl) msgEl.textContent = "Your issue has been logged.";
        }
        
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

            // If it's the voice card, open modal
            if (card.classList.contains('onetap-card--voice')) {
                openVoiceModal();
                return;
            }

            const cat = card.getAttribute('data-category');
            const icon = card.getAttribute('data-icon');
            reportInstantly(cat, icon);
        });
    });

    // Voice/Text Modal Logic
    window.openVoiceModal = function() {
        document.getElementById('voice-modal').classList.remove('hidden');
    };

    window.closeVoiceModal = function() {
        document.getElementById('voice-modal').classList.add('hidden');
    };

    let isRecording = false;
    const voiceBtn = document.getElementById('start-voice-btn');
    const voiceStatus = document.getElementById('voice-status');

    if (voiceBtn) {
        voiceBtn.addEventListener('click', () => {
            isRecording = !isRecording;
            if (isRecording) {
                voiceBtn.classList.add('pulse');
                voiceBtn.style.background = '#e74c3c';
                voiceStatus.innerHTML = '<i class="fa-solid fa-circle fa-beat" style="color:#e74c3c;"></i> Recording... (Tap to stop)';
            } else {
                voiceBtn.classList.remove('pulse');
                voiceBtn.style.background = 'var(--accent-color)';
                voiceStatus.textContent = 'Voice captured! You can also add text below.';
            }
        });
    }

    window.submitVoiceTextReport = function() {
        const text = document.getElementById('text-complaint').value;
        const cat = "Voice/Text Report";
        const icon = "🎙️";
        
        const aiStatus = document.getElementById('modal-ai-status');
        if (aiStatus && aiStatus.classList.contains('ai-detected')) {
            alert("Please remove the AI-generated image before submitting.");
            return;
        }

        closeVoiceModal();
        reportInstantly(cat, icon);
        
        // Reset modal
        document.getElementById('text-complaint').value = '';
        document.getElementById('voice-status').textContent = 'Tap the mic to start recording';
        isRecording = false;
        if (voiceBtn) {
            voiceBtn.classList.remove('pulse');
            voiceBtn.style.background = 'var(--accent-color)';
        }
        removeModalImage();
    };

    // Modal Image Upload Logic
    const modalUploadBox = document.getElementById('modal-upload-box');
    if (modalUploadBox) {
        modalUploadBox.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                document.getElementById('modal-file-input').click();
            }
        });
    }

    window.handleModalImageUpload = function(input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        const preview = document.getElementById('modal-image-preview');
        const container = document.getElementById('modal-image-preview-container');
        const placeholder = document.getElementById('modal-upload-placeholder');
        const status = document.getElementById('modal-ai-status');

        reader.onload = function(e) {
            preview.src = e.target.result;
            container.classList.remove('hidden');
            placeholder.classList.add('hidden');

            // AI Check Logic
            status.className = 'ai-check-status scanning';
            status.classList.remove('hidden');
            status.innerHTML = '<i class="fa-solid fa-microchip fa-spin"></i> Checking for AI...';
            document.getElementById('modal-submit-btn').disabled = true;

            setTimeout(() => {
                const isAI = file.name.toLowerCase().includes('ai') || Math.random() > 0.9;
                status.classList.remove('scanning');
                
                if (isAI) {
                    status.classList.add('ai-detected');
                    status.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> AI Generated!';
                    alert("🚫 AI Detected: This photo appears to be synthetic. Please upload a real photo.");
                    document.getElementById('modal-submit-btn').disabled = true;
                } else {
                    status.classList.add('verified');
                    status.innerHTML = '<i class="fa-solid fa-circle-check"></i> Authentic';
                    document.getElementById('modal-submit-btn').disabled = false;
                }
            }, 1500);
        };
        reader.readAsDataURL(file);
    };

    window.removeModalImage = function(e) {
        if (e) e.stopPropagation();
        document.getElementById('modal-file-input').value = '';
        document.getElementById('modal-image-preview-container').classList.add('hidden');
        document.getElementById('modal-upload-placeholder').classList.remove('hidden');
        document.getElementById('modal-ai-status').classList.add('hidden');
        document.getElementById('modal-submit-btn').disabled = false;
    };

    // Handle Photo Upload
    const photoInput = document.getElementById('otPhotoInput');
    if (photoInput) {
        photoInput.addEventListener('change', () => {
            if (photoInput.files && photoInput.files[0]) {
                const file = photoInput.files[0];
                const isAI = file.name.toLowerCase().includes('ai') || Math.random() > 0.9;

                if (isAI) {
                    alert("🚫 AI Detected: The image you uploaded appears to be AI-generated or manipulated. JanSetu only accepts authentic, live photos to ensure the accuracy of civic reports. Please try again with a real photo.");
                    photoInput.value = '';
                } else {
                    reportInstantly("Photo Report", "📸");
                }
            }
        });
    }
});