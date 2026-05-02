document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const loginSection = document.getElementById('login-section');
    const reportSection = document.getElementById('report-section');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Main Tabs
    const mainTabBtns = document.querySelectorAll('.main-tab-btn');
    const mainTabPanes = document.querySelectorAll('.main-tab-pane');

    // Sub Tabs (Report Mode)
    const subTabBtns = document.querySelectorAll('.sub-tab-btn');
    const subTabPanes = document.querySelectorAll('.sub-tab-pane');
    
    // Quick Report Elements
    const quickLocationText = document.getElementById('quick-location-text');
    const quickCategoryCards = document.querySelectorAll('.quick-grid .category-card');
    const quickProcessing = document.getElementById('quick-processing');
    const quickGrid = document.querySelector('.quick-grid');
    
    // Detailed Report Elements
    const detailedForm = document.getElementById('detailed-form');
    const uploadArea = document.getElementById('upload-area');
    const mediaUpload = document.getElementById('media-upload');
    const filePreview = document.getElementById('file-preview');
    const fileName = document.getElementById('file-name');
    const removeFileBtn = document.getElementById('remove-file');
    
    const issueTitle = document.getElementById('issue-title');
    const issueDescription = document.getElementById('issue-description');
    const voiceBtn = document.getElementById('voice-btn');
    
    const analyzeBtn = document.getElementById('analyze-btn');
    const detailedProcessing = document.getElementById('detailed-processing');
    const aiResultsBox = document.getElementById('ai-results');
    
    const aiCategory = document.getElementById('ai-category');
    const aiUrgency = document.getElementById('ai-urgency');
    const aiSummaryText = document.getElementById('ai-summary-text');
    
    // Success Modal
    const successModal = document.getElementById('success-modal');
    const trackBtn = document.getElementById('track-btn');
    const newComplaintBtn = document.getElementById('new-complaint-btn');

    // Location Data
    let currentLocation = "Detecting...";
    
    // Civic Score State
    let civicScore = 150;

    // --- Role Selection Logic ---
    let currentRole = 'citizen';
    const roleCitizenBtn = document.getElementById('role-citizen');
    const roleOfficerBtn = document.getElementById('role-officer');
    const demoCredsCitizen = document.getElementById('demo-creds-citizen');
    const demoCredsOfficer = document.getElementById('demo-creds-officer');

    if (roleCitizenBtn && roleOfficerBtn) {
        roleCitizenBtn.addEventListener('click', () => {
            currentRole = 'citizen';
            roleCitizenBtn.classList.add('btn-primary');
            roleCitizenBtn.style.background = '';
            roleCitizenBtn.style.color = '';
            roleCitizenBtn.style.boxShadow = 'none';

            roleOfficerBtn.classList.remove('btn-primary');
            roleOfficerBtn.style.background = 'transparent';
            roleOfficerBtn.style.color = 'var(--text-muted)';
            
            demoCredsCitizen.classList.remove('hidden');
            demoCredsOfficer.classList.add('hidden');
        });

        roleOfficerBtn.addEventListener('click', () => {
            currentRole = 'officer';
            roleOfficerBtn.classList.add('btn-primary');
            roleOfficerBtn.style.background = '';
            roleOfficerBtn.style.color = '';
            roleOfficerBtn.style.boxShadow = 'none';

            roleCitizenBtn.classList.remove('btn-primary');
            roleCitizenBtn.style.background = 'transparent';
            roleCitizenBtn.style.color = 'var(--text-muted)';

            demoCredsOfficer.classList.remove('hidden');
            demoCredsCitizen.classList.add('hidden');
        });
    }

    // --- Authentication ---
    if (localStorage.getItem('jansetu_logged_in') === 'true') {
        showDashboard();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (currentRole === 'citizen') {
            if (username === 'citizen_demo' && password === 'jan123') {
                localStorage.setItem('jansetu_logged_in', 'true');
                showDashboard();
            } else {
                alert('Invalid credentials. Please use the citizen demo credentials provided.');
            }
        } else if (currentRole === 'officer') {
            if (username === 'officer_demo' && password === 'jan123') {
                localStorage.setItem('jansetu_officer_logged_in', 'true');
                window.location.href = 'officer.html';
            } else {
                alert('Invalid credentials. Please use the officer demo credentials provided.');
            }
        }
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('jansetu_logged_in');
        resetAllState();
        loginSection.classList.add('active');
        loginSection.classList.remove('hidden');
        reportSection.classList.remove('active');
        reportSection.classList.add('hidden');
        logoutBtn.classList.add('hidden');
    });

    function showDashboard() {
        loginSection.classList.remove('active');
        loginSection.classList.add('hidden');
        reportSection.classList.add('active');
        reportSection.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
        
        // Auto-detect location for quick report using real Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        // Reverse geocoding using Nominatim (OpenStreetMap)
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        
                        if (data && data.address) {
                            // Try to get a concise neighborhood/city name
                            const city = data.address.city || data.address.town || data.address.county || "";
                            const area = data.address.suburb || data.address.neighbourhood || data.address.residential || "";
                            
                            if (area && city) {
                                currentLocation = `${area}, ${city}`;
                            } else if (city || area) {
                                currentLocation = city || area;
                            } else {
                                currentLocation = "Location Found";
                            }
                        } else {
                            currentLocation = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
                        }
                    } catch (error) {
                        console.error("Geocoding failed:", error);
                        currentLocation = "Location Found (GPS)";
                    }
                    quickLocationText.textContent = currentLocation;
                },
                (error) => {
                    console.warn("Geolocation error:", error);
                    currentLocation = "Location access denied";
                    quickLocationText.textContent = currentLocation;
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            currentLocation = "Geolocation not supported";
            quickLocationText.textContent = currentLocation;
        }
    }

    // --- Tabs Logic ---
    
    // Main Tabs (Dashboard Level)
    mainTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all main tabs
            mainTabBtns.forEach(b => b.classList.remove('active'));
            mainTabPanes.forEach(p => {
                p.classList.remove('active');
                p.classList.add('hidden');
            });
            
            // Add active to clicked main tab
            btn.classList.add('active');
            const targetPane = document.getElementById(btn.getAttribute('data-tab'));
            targetPane.classList.add('active');
            targetPane.classList.remove('hidden');
        });
    });

    // Sub Tabs (Report Level)
    subTabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            subTabBtns.forEach(b => b.classList.remove('active'));
            subTabPanes.forEach(p => {
                p.classList.remove('active');
                p.classList.add('hidden');
            });
            
            btn.classList.add('active');
            const targetPane = document.getElementById(btn.getAttribute('data-tab'));
            targetPane.classList.add('active');
            targetPane.classList.remove('hidden');
        });
    });

    // --- Quick Report Mode (1-Click) ---
    quickCategoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const issueName = card.querySelector('span').textContent.trim();
            
            // Hide grid, show processing
            quickGrid.classList.add('hidden');
            quickProcessing.classList.remove('hidden');
            
            // Simulate AI processing and submission
            setTimeout(() => {
                quickProcessing.classList.add('hidden');
                quickGrid.classList.remove('hidden'); // Reset for next time
                showSuccessModal(issueName);
            }, 1800);
        });
    });

    // --- Detailed Report Mode ---

    // Media Upload
    uploadArea.addEventListener('click', () => mediaUpload.click());
    uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) handleFileUpload(e.dataTransfer.files[0]);
    });
    mediaUpload.addEventListener('change', () => {
        if (mediaUpload.files.length > 0) handleFileUpload(mediaUpload.files[0]);
    });

    function handleFileUpload(file) {
        uploadArea.classList.add('hidden');
        filePreview.classList.remove('hidden');
        fileName.textContent = file.name;
    }

    removeFileBtn.addEventListener('click', resetUpload);

    function resetUpload() {
        mediaUpload.value = '';
        uploadArea.classList.remove('hidden');
        filePreview.classList.add('hidden');
        fileName.textContent = '';
    }

    // Voice Input (Mock UI)
    let isRecording = false;
    let recordingTimer;

    voiceBtn.addEventListener('click', () => {
        if (!isRecording) {
            isRecording = true;
            voiceBtn.classList.add('recording');
            voiceBtn.innerHTML = '<i class="fa-solid fa-stop"></i>';
            issueDescription.placeholder = 'Listening... Speak your issue clearly.';
            
            recordingTimer = setTimeout(() => {
                stopRecording("There is a massive pothole causing severe traffic jams on the main road.");
            }, 4000);
        } else {
            stopRecording("The streetlights are completely off in our lane, making it unsafe.");
        }
    });

    function stopRecording(mockText) {
        clearTimeout(recordingTimer);
        isRecording = false;
        voiceBtn.classList.remove('recording');
        voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        issueDescription.placeholder = 'Additional details...';
        issueDescription.value = issueDescription.value ? issueDescription.value + " " + mockText : mockText;
    }

    // AI Analysis Simulation
    analyzeBtn.addEventListener('click', () => {
        // Validate at least one input
        const hasTitle = issueTitle.value.trim().length > 0;
        const hasDesc = issueDescription.value.trim().length > 0;
        const hasMedia = mediaUpload.files.length > 0;
        
        if (!hasTitle && !hasDesc && !hasMedia) {
            alert('Please provide at least one detail (Title, Description, or Media) for the AI to analyze.');
            return;
        }

        // Hide button, show processing
        analyzeBtn.parentNode.classList.add('hidden');
        detailedProcessing.classList.remove('hidden');
        aiResultsBox.classList.add('hidden');

        // Simulate AI logic based on inputs
        setTimeout(() => {
            detailedProcessing.classList.add('hidden');
            aiResultsBox.classList.remove('hidden');
            
            const combinedText = (issueTitle.value + " " + issueDescription.value).toLowerCase();
            
            let cat = "General Infrastructure";
            let urg = "Medium";
            let urgClass = "medium-urgency";
            
            if (combinedText.includes('water') || combinedText.includes('pipe')) {
                cat = "Water Supply";
                urg = "High";
                urgClass = "high-urgency";
            } else if (combinedText.includes('garbage') || combinedText.includes('trash')) {
                cat = "Garbage & Waste";
            } else if (combinedText.includes('light') || combinedText.includes('electric')) {
                cat = "Electricity & Lights";
            } else if (combinedText.includes('pothole') || combinedText.includes('road')) {
                cat = "Roads & Potholes";
                urg = "High";
                urgClass = "high-urgency";
            }
            
            aiCategory.innerHTML = `<i class="fa-solid fa-check"></i> ${cat}`;
            aiUrgency.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${urg}`;
            aiUrgency.className = urgClass;
            
            aiSummaryText.textContent = `Official Report: Citizen has reported an issue related to ${cat.toLowerCase()}. Location identified near ${currentLocation}. Priority assigned as ${urg.toLowerCase()} based on impact assessment. Immediate assignment to respective department is recommended.`;

        }, 2500);
    });

    detailedForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userTitle = issueTitle.value.trim();
        const aiCatStr = aiCategory.textContent.trim();
        const issueName = userTitle || (aiCatStr ? aiCatStr : "Civic Issue");
        showSuccessModal(issueName);
    });

    // --- Success Modal Logic ---
    function showSuccessModal(issueName = "Civic Issue") {
        successModal.classList.remove('hidden');
        // Generate random ticket ID
        const ticketId = '#JAN-' + Math.floor(1000 + Math.random() * 9000);
        document.getElementById('new-ticket-id').textContent = ticketId;
        
        // Add to My Reports Validation
        const myReportsContainer = document.getElementById('my-reports-validation');
        if (myReportsContainer) {
            const cardHtml = `
                <div class="dashboard-card tracking-card mb-3" style="animation: fadeIn 0.5s ease;">
                    <div class="tracking-header mb-2" style="border-bottom:none; padding-bottom:0; margin-bottom:0;">
                        <div>
                            <h4>${issueName}</h4>
                            <span class="ticket-id">${ticketId}</span>
                        </div>
                        <span class="status-badge badge-warning">Under Verification</span>
                    </div>
                    <div class="validation-progress mt-3">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.85rem; color:var(--text-muted);">
                            <span>Authenticity Votes</span>
                            <strong><span style="color: var(--accent-color);"><i class="fa-solid fa-thumbs-up"></i> 0</span> &nbsp;|&nbsp; <span style="color: #e74c3c;"><i class="fa-solid fa-thumbs-down"></i> 0</span></strong>
                        </div>
                        <div class="progress-bar-bg" style="width:100%; height:8px; background:#eaf2f8; border-radius:4px; overflow:hidden; display:flex;">
                            <div class="progress-bar-fill" style="width:0%; height:100%; background:var(--accent-color);"></div>
                            <div class="progress-bar-fill" style="width:0%; height:100%; background:#e74c3c;"></div>
                        </div>
                    </div>
                </div>
            `;
            myReportsContainer.insertAdjacentHTML('afterbegin', cardHtml);
        }

        // Add to Community Complaint Verification Queue
        const communityGrid = document.getElementById('community-complaints-grid');
        if (communityGrid) {
            const commCardHtml = `
                <div class="validation-card" style="animation: fadeIn 0.5s ease;">
                    <div class="validation-img" style="background: #eaf2f8; display:flex; align-items:center; justify-content:center; font-size:3rem; color:var(--primary-color);">
                        <i class="fa-solid fa-bullhorn"></i>
                    </div>
                    <div class="validation-content">
                        <h4>${issueName}</h4>
                        <p class="loc"><i class="fa-solid fa-location-dot"></i> Near your location</p>
                        <p class="desc">A citizen reported this issue just now. Is this issue genuine?</p>
                        <div class="validation-actions">
                            <button class="btn btn-outline-success"><i class="fa-solid fa-thumbs-up"></i> Yes, It's Real</button>
                            <button class="btn btn-outline-danger"><i class="fa-solid fa-thumbs-down"></i> No, Invalid</button>
                        </div>
                    </div>
                </div>
            `;
            communityGrid.insertAdjacentHTML('afterbegin', commCardHtml);
            bindValidationButtons();
        }

        // Add to Active Tracking
        const trackingList = document.getElementById('tracking-list');
        if (trackingList) {
            const trackingHtml = `
                <div class="tracking-card mb-4" style="animation: fadeIn 0.5s ease;">
                    <div class="tracking-header">
                        <div>
                            <h4>${issueName}</h4>
                            <span class="ticket-id">${ticketId}</span>
                        </div>
                        <span class="status-badge badge-warning">Submitted</span>
                    </div>
                    
                    <div class="timeline-container">
                        <div class="timeline-step active">
                            <div class="step-icon"><i class="fa-solid fa-check"></i></div>
                            <div class="step-content">
                                <h5>Submitted</h5>
                                <p>Just now</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-icon" style="color:transparent;"><i class="fa-solid fa-user-tie"></i></div>
                            <div class="step-content">
                                <h5>Assigned</h5>
                                <p>Pending</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            trackingList.insertAdjacentHTML('afterbegin', trackingHtml);
        }

        // Add to Complaint History
        const historyList = document.getElementById('history-list');
        if (historyList) {
            const historyHtml = `
                <div class="history-item" style="animation: fadeIn 0.5s ease;">
                    <div class="history-icon text-white" style="background:#f39c12;"><i class="fa-solid fa-clock"></i></div>
                    <div class="history-details">
                        <h4>${issueName}</h4>
                        <p>${currentLocation} • <span class="text-muted">Just now</span></p>
                    </div>
                    <span class="status-badge badge-warning" style="background:#fff3cd; color:#856404;">Submitted</span>
                </div>
            `;
            historyList.insertAdjacentHTML('afterbegin', historyHtml);
        }
        
        // Update Civic Score for submitting a report
        updateCivicScore(15, `Submitted Valid Report: ${issueName}`);
    }

    trackBtn.addEventListener('click', () => {
        successModal.classList.add('hidden');
        resetReportingForm();
        // Route to Tracking Tab
        document.querySelector('[data-tab="tab-complaints"]').click();
        window.scrollTo(0, 0);
    });

    newComplaintBtn.addEventListener('click', () => {
        successModal.classList.add('hidden');
        resetReportingForm();
        window.scrollTo(0, 0);
    });
    
    function resetReportingForm() {
        detailedForm.reset();
        resetUpload();
        analyzeBtn.parentNode.classList.remove('hidden');
        detailedProcessing.classList.add('hidden');
        aiResultsBox.classList.add('hidden');
    }

    function resetAllState() {
        resetReportingForm();
        
        // Reset to first tab
        document.querySelector('[data-tab="tab-report"]').click();
        
        // Reset quick report processing just in case
        quickGrid.classList.remove('hidden');
        quickProcessing.classList.add('hidden');
    }

    // Community Validation Buttons Mock
    function bindValidationButtons() {
        document.querySelectorAll('.validation-actions button').forEach(btn => {
            // Clone to remove existing listeners and prevent duplicates
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', function() {
                const card = this.closest('.validation-card');
                card.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--accent-color);">
                    <i class="fa-solid fa-circle-check" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h4>Thank you for validating!</h4>
                    <p class="text-muted">You helped maintain accountability.</p>
                </div>`;
                updateCivicScore(5, 'Verified Community Issue');
            });
        });
    }
    
    // Initial bind
    bindValidationButtons();

    // --- Civic Score Logic ---
    function updateCivicScore(points, reason) {
        civicScore += points;
        const scoreDisplay = document.getElementById('civic-score-display');
        if (scoreDisplay) scoreDisplay.textContent = civicScore;
        
        const activityList = document.getElementById('score-activity-list');
        if (activityList) {
            const isPositive = points >= 0;
            const sign = isPositive ? '+' : '';
            const iconClass = isPositive ? 'fa-plus' : 'fa-minus';
            const color = isPositive ? 'var(--accent-color)' : '#e74c3c';
            const bgLight = isPositive ? '#d4edda' : '#f8d7da';
            
            const activityHtml = `
                <div class="history-item" style="animation: fadeIn 0.5s ease;">
                    <div class="history-icon text-white" style="background:${color};"><i class="fa-solid ${iconClass}"></i></div>
                    <div class="history-details">
                        <h4>${reason}</h4>
                        <p>Civic Contribution • <span class="text-muted">Just now</span></p>
                    </div>
                    <span class="status-badge" style="background:${bgLight}; color:${color}; font-weight:bold;">${sign}${points} Pts</span>
                </div>
            `;
            activityList.insertAdjacentHTML('afterbegin', activityHtml);
        }
    }
});
