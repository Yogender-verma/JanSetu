/* Officer Dashboard Logic */

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

function initDashboard() {
    // Navigation handling
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.dashboard-view');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            
            // Update Active Buttons
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Switch Views
            views.forEach(v => {
                v.classList.add('hidden');
                v.classList.remove('active');
            });
            const activeView = document.getElementById(target);
            activeView.classList.remove('hidden');
            activeView.classList.add('active');

            // Init map if target is map
            if (target === 'view-map') {
                setTimeout(initOfficerMap, 100);
            }
        });
    });
}

// Sidebar Navigation Helper
window.viewEscalations = function() {
    const taskNavBtn = document.querySelector('.nav-btn[data-target="view-tasks"]');
    if (taskNavBtn) taskNavBtn.click();
    
    setTimeout(() => {
        const escalatedTab = document.querySelector('.task-tab-btn[onclick*="escalated"]');
        if (escalatedTab) escalatedTab.click();
    }, 100);
};

// Task Filtering
window.filterTasks = function(status, btn) {
    const taskItems = document.querySelectorAll('.task-item');
    const tabButtons = document.querySelectorAll('.task-tab-btn');

    // Update Tab UI
    tabButtons.forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-outline-primary');
        if (b.classList.contains('btn-outline-danger')) {
             b.classList.remove('btn-danger');
        }
    });
    
    if (status === 'escalated') {
        btn.classList.remove('btn-outline-danger');
        btn.classList.add('btn-danger');
    } else {
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-primary');
    }

    // Filter Grid
    taskItems.forEach(item => {
        if (item.getAttribute('data-status') === status) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
};

// Sorting
window.sortTasks = function() {
    const sortVal = document.getElementById('sort-tasks').value;
    const grid = document.getElementById('main-task-grid');
    const tasks = Array.from(grid.querySelectorAll('.task-item'));

    tasks.sort((a, b) => {
        if (sortVal === 'urgency') {
            return b.getAttribute('data-urgency') - a.getAttribute('data-urgency');
        } else {
            return a.getAttribute('data-time') - b.getAttribute('data-time');
        }
    });

    tasks.forEach(task => grid.appendChild(task));
};

// Task Actions Logic
window.startWork = function(ticketId) {
    const card = findTaskCard(ticketId);
    if (!card) return;

    card.setAttribute('data-status', 'started');
    card.classList.remove('border-warning');
    card.classList.add('border-primary');

    // Update Badge
    const badge = card.querySelector('.badge');
    badge.className = 'badge badge-info';
    badge.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Work Started';

    // Update Timeline
    const timeline = document.getElementById(`timeline-${ticketId}`);
    const newItem = document.createElement('div');
    newItem.className = 'timeline-item active';
    newItem.innerHTML = `
        <span class="time">Just now</span>
        <span class="status-text">Work Started by Officer</span>
    `;
    const prevActive = timeline.querySelector('.timeline-item.active');
    if (prevActive) prevActive.classList.remove('active');
    timeline.appendChild(newItem);

    // Update Buttons
    const actionContainer = document.getElementById(`actions-${ticketId}`);
    actionContainer.innerHTML = `
        <button class="btn btn-primary btn-action" onclick="openResolveModal('${ticketId}')"><i class="fa-solid fa-check-circle"></i> Resolve Work</button>
        <button class="btn btn-outline-danger btn-action" onclick="openEscalateModal('${ticketId}')"><i class="fa-solid fa-triangle-exclamation"></i> Escalate</button>
    `;

    // Alert User
    alert(`Task #${ticketId} has been moved to Started works.`);
    
    // Switch to started view
    filterTasks('started', document.querySelector('.task-tab-btn[onclick*="started"]'));
};

function findTaskCard(id) {
    return Array.from(document.querySelectorAll('.task-item')).find(card => 
        card.querySelector('.ticket-id').textContent.includes(id)
    );
}

// Modal Handlers
window.openResolveModal = function(ticketId) {
    document.getElementById('current-ticket-id').value = ticketId;
    document.getElementById('resolve-modal').classList.remove('hidden');
    
    // Clear previous
    document.getElementById('preview-before').classList.add('hidden');
    document.getElementById('preview-after').classList.add('hidden');
    document.getElementById('box-before').querySelector('.upload-placeholder').classList.remove('hidden');
    document.getElementById('box-after').querySelector('.upload-placeholder').classList.remove('hidden');
    document.getElementById('submit-resolution-btn').disabled = true;
    document.getElementById('upload-before').value = '';
    document.getElementById('upload-after').value = '';
};

window.closeResolveModal = function() {
    document.getElementById('resolve-modal').classList.add('hidden');
};

window.handleImagePreview = function(input, previewId) {
    const file = input.files[0];
    const preview = document.getElementById(previewId);
    const box = input.parentElement;
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            box.querySelector('.upload-placeholder').classList.add('hidden');
            
            // Remove existing status if any
            const oldStatus = box.querySelector('.ai-check-status');
            if (oldStatus) oldStatus.remove();

            // AI Authenticity Check Mock
            const statusEl = document.createElement('div');
            statusEl.className = 'ai-check-status scanning';
            statusEl.innerHTML = '<i class="fa-solid fa-microchip fa-spin"></i> Scanning for AI...';
            box.appendChild(statusEl);
            
            setTimeout(() => {
                // Demo Logic: Detect AI if filename contains "ai"
                const isAI = file.name.toLowerCase().includes('ai') || Math.random() > 0.85;

                statusEl.classList.remove('scanning');
                
                if (isAI) {
                    statusEl.classList.add('ai-detected');
                    statusEl.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> AI Generated Detected!';
                    
                    // Show Popup
                    alert("⚠️ Security Alert: AI-Generated Image Detected!\n\nThe system has identified this image as potentially synthetic or AI-generated. For accountability, only authentic real-time photos are accepted. Please upload a genuine photo.");
                    
                    // Reset box
                    preview.classList.add('hidden');
                    box.querySelector('.upload-placeholder').classList.remove('hidden');
                    input.value = '';
                    statusEl.remove();
                } else {
                    statusEl.classList.add('verified');
                    statusEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Authentic';
                    checkSubmitButton();
                }
            }, 1500);
        };
        reader.readAsDataURL(file);
    }
};

function checkSubmitButton() {
    const beforeVerified = document.querySelector('#box-before .ai-check-status.verified');
    const afterVerified = document.querySelector('#box-after .ai-check-status.verified');
    document.getElementById('submit-resolution-btn').disabled = !(beforeVerified && afterVerified);
}

window.submitResolution = function() {
    const ticketId = document.getElementById('current-ticket-id').value;
    const actualCard = findTaskCard(ticketId);
    
    if (!actualCard) return;

    // Simulate AI Verification
    const btn = document.getElementById('submit-resolution-btn');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying Proof...';
    btn.disabled = true;

    setTimeout(() => {
        actualCard.setAttribute('data-status', 'resolved');
        actualCard.classList.remove('border-primary', 'border-warning');
        actualCard.classList.add('border-success');

        // Update Badge
        const badge = actualCard.querySelector('.badge');
        badge.className = 'badge badge-success';
        badge.innerHTML = '<i class="fa-solid fa-check-circle"></i> Resolved';

        // Update Actions
        const actionContainer = document.getElementById(`actions-${ticketId}`);
        actionContainer.innerHTML = '';
        actionContainer.classList.add('hidden');

        // Show Proof in Gallery
        const proofGallery = document.getElementById(`proof-${ticketId}`);
        proofGallery.innerHTML = `
            <div class="proof-item">
                <img src="${document.getElementById('preview-before').src}" alt="Before">
                <span class="proof-label">Before Work</span>
            </div>
            <div class="proof-item">
                <img src="${document.getElementById('preview-after').src}" alt="After">
                <span class="proof-label">After Work</span>
            </div>
        `;
        proofGallery.classList.remove('hidden');

        // Add to Timeline
        const timeline = document.getElementById(`timeline-${ticketId}`);
        const newItem = document.createElement('div');
        newItem.className = 'timeline-item active';
        newItem.innerHTML = `
            <span class="time">Just now</span>
            <span class="status-text">Resolved with Verified Proof</span>
        `;
        const prevActive = timeline.querySelector('.timeline-item.active');
        if (prevActive) prevActive.classList.remove('active');
        timeline.appendChild(newItem);

        // Save History and Images
        const history = JSON.parse(localStorage.getItem('jansetu_complaint_history') || '{}');
        if (!history[ticketId]) history[ticketId] = { statusHistory: [], timestamps: [], images: {} };
        history[ticketId].statusHistory.push('resolved');
        history[ticketId].timestamps.push(new Date().toLocaleString());
        history[ticketId].images.before = document.getElementById('preview-before').src;
        history[ticketId].images.after = document.getElementById('preview-after').src;
        localStorage.setItem('jansetu_complaint_history', JSON.stringify(history));

        closeResolveModal();
        
        // Final Success notification
        alert(`Task #${ticketId} has been successfully resolved and proof archived.`);
        
        filterTasks('resolved', document.querySelector('.task-tab-btn[onclick*="resolved"]'));
    }, 2000);
};

// Map Marker Initialization (Existing Logic)
window.officerMap = null;
function initOfficerMap() {
    if (window.officerMap) return;
    window.officerMap = L.map('real-map').setView([12.9716, 77.5946], 13);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(window.officerMap);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19 }).addTo(window.officerMap);

    // Add Circular Hotspots
    const hotspots = [
        { lat: 12.9716, lng: 77.5946, color: '#ef4444', radius: 500, label: 'High Priority Cluster: 8 Complaints' },
        { lat: 12.9352, lng: 77.6245, color: '#f59e0b', radius: 800, label: 'Medium Priority Zone: 5 Complaints' },
        { lat: 12.9915, lng: 77.5946, color: '#3b82f6', radius: 400, label: 'Standard Maintenance: 3 Complaints' },
        { lat: 12.9550, lng: 77.6500, color: '#ef4444', radius: 600, label: 'Emergency Zone: 12 Complaints' }
    ];

    hotspots.forEach(spot => {
        L.circle([spot.lat, spot.lng], {
            color: spot.color,
            fillColor: spot.color,
            fillOpacity: 0.3,
            radius: spot.radius
        }).addTo(window.officerMap).bindPopup(`<strong>${spot.label}</strong>`);
    });
}