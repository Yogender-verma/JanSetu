document.addEventListener('DOMContentLoaded', () => {
    // Authentication & Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.classList.remove('hidden');
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('jansetu_officer_logged_in');
            window.location.href = 'portal.html';
        });
    }

    // Navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.dashboard-view');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            views.forEach(v => {
                v.classList.remove('active');
                v.classList.add('hidden');
            });

            btn.classList.add('active');
            const target = document.getElementById(btn.getAttribute('data-target'));
            target.classList.remove('hidden');
            target.classList.add('active');

            if (target.id === 'view-map') {
                setTimeout(() => {
                    if (window.officerMap) {
                        window.officerMap.invalidateSize();
                    } else {
                        if (typeof initOfficerMap === 'function') initOfficerMap();
                    }
                }, 100);
            }
        });
    });

    // Status Select Logic
    const statusSelects = document.querySelectorAll('.status-select');
    statusSelects.forEach(select => {
        select.addEventListener('change', (e) => {
            const ticketId = e.target.getAttribute('data-ticket');
            const resPanel = document.getElementById(`res-${ticketId}`);

            if (e.target.value === 'Resolved' || e.target.value === 'completed') {
                if (resPanel) resPanel.classList.remove('hidden');
            } else {
                if (resPanel) {
                    resPanel.classList.add('hidden');
                    const aiRes = document.getElementById(`ai-res-${ticketId}`);
                    const verifyBtn = document.getElementById(`verify-${ticketId}`);
                    if (aiRes) aiRes.classList.add('hidden');
                    if (verifyBtn) verifyBtn.classList.add('hidden');
                }
            }
        });
    });

    // Initial filter execution to show only assigned works on load
    if (typeof filterTasks === 'function') {
        const firstTab = document.querySelector('.task-tab-btn');
        filterTasks('assigned', firstTab);
    }
});

// Task Filtering Logic
window.filterTasks = function (status, btnElement) {
    // Update active tab button styling
    const tabs = document.querySelectorAll('.task-tab-btn');
    tabs.forEach(btn => {
        btn.classList.remove('btn-primary', 'btn-danger');

        if (btn.innerText.includes('Escalated')) {
            btn.classList.add('btn-outline-danger');
        } else {
            btn.classList.add('btn-outline-primary');
            btn.classList.remove('btn-outline-danger');
        }
    });

    if (btnElement) {
        btnElement.classList.remove('btn-outline-primary', 'btn-outline-danger');
        if (status === 'escalated') {
            btnElement.classList.add('btn-danger');
        } else {
            btnElement.classList.add('btn-primary');
        }
    }

    // Filter tasks
    const tasks = document.querySelectorAll('.task-item');
    tasks.forEach(task => {
        if (status === 'all' || task.getAttribute('data-status') === status) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    });
};

// Task Sorting Logic
window.sortTasks = function () {
    const sortBy = document.getElementById('sort-tasks').value;
    const taskGrid = document.getElementById('main-task-grid');
    const tasks = Array.from(taskGrid.querySelectorAll('.task-item'));

    tasks.sort((a, b) => {
        if (sortBy === 'urgency') {
            return parseInt(b.getAttribute('data-urgency')) - parseInt(a.getAttribute('data-urgency'));
        } else if (sortBy === 'time') {
            return parseInt(a.getAttribute('data-time')) - parseInt(b.getAttribute('data-time'));
        }
        return 0;
    });

    tasks.forEach(task => taskGrid.appendChild(task));
};

window.updateTaskStatus = function (selectElement, ticketId) {
    const newStatus = selectElement.value;
    const taskCard = selectElement.closest('.task-item');

    // Only update status if it's not 'completed' 
    // We wait for AI verification to mark it as truly completed
    if (newStatus !== 'completed' && newStatus !== 'Resolved') {
        taskCard.setAttribute('data-status', newStatus);
        
        // Hide resolution panel if moving away from 'Mark as Resolved'
        const resPanel = document.getElementById(`res-${ticketId}`);
        if (resPanel) resPanel.classList.add('hidden');
    }
};

// Image Preview for Resolution
function previewResolution(input, previewId, verifyBtnId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById(previewId);
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            
            const uploadBox = input.parentElement;
            uploadBox.querySelector('i').classList.add('hidden');
            
            // Check if both images are uploaded for this ticket
            const ticketId = verifyBtnId.replace('verify-', '');
            const beforeInput = document.getElementById(`file-before-${ticketId}`);
            const afterInput = document.getElementById(`file-after-${ticketId}`);
            
            if (beforeInput.files.length > 0 && afterInput.files.length > 0) {
                document.getElementById(verifyBtnId).classList.remove('hidden');
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// AI Verification Simulation
function runAIVerification(ticketId) {
    const btn = document.getElementById(`verify-${ticketId}`);
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing Images...';
    btn.disabled = true;

    setTimeout(() => {
        btn.classList.add('hidden');
        document.getElementById(`ai-res-${ticketId}`).classList.remove('hidden');

        // After 2 seconds showing result, show success modal
        setTimeout(() => {
            document.getElementById('officer-success-modal').classList.remove('hidden');
            
            // Actually update the card to completed in UI
            const taskCard = btn.closest('.task-item');
            const statusSelect = taskCard.querySelector('.status-select');
            statusSelect.value = 'completed';
            updateTaskStatus(statusSelect, ticketId);
        }, 2000);
    }, 2500);
}

function closeSuccessModal() {
    document.getElementById('officer-success-modal').classList.add('hidden');
}

// Leaflet Map Initialization
window.officerMap = null;
function initOfficerMap() {
    if (window.officerMap) return;

    window.officerMap = L.map('real-map').setView([12.9716, 77.5946], 13); // Default to a city view (e.g., Bangalore)

    // Satellite layer
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Tiles &copy; Esri'
    });

    // Street Labels layer (Hybrid)
    const labels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: 'Labels &copy; Esri'
    });

    satellite.addTo(window.officerMap);
    labels.addTo(window.officerMap);

    const redIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const orangeIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const activeWorks = [
        { lat: 12.9716, lng: 77.5946, title: "Severe Water Pipe Burst", area: "Sector 14 Main Road", status: "assigned" },
        { lat: 12.9816, lng: 77.5846, title: "Uncollected Garbage Pile", area: "Indiranagar, Market Area", status: "progress" },
        { lat: 12.9616, lng: 77.6046, title: "Pothole on Main Road", area: "Sector 14 Main Road", status: "assigned" },
        { lat: 12.9916, lng: 77.5746, title: "Streetlight Malfunction", area: "Indiranagar, Market Area", status: "progress" },
        { lat: 12.9223, lng: 77.5736, title: "Pothole Repair", area: "Sector 14 Main Road", status: "assigned" },
        { lat: 12.9030, lng: 77.5219, title: "Streetlight Outage", area: "HSR Layout Sector 1", status: "assigned" },
        { lat: 12.9199, lng: 77.5650, title: "Illegal Parking", area: "HSR Layout Sector 1", status: "assigned" },
        { lat: 12.9589, lng: 77.5809, title: "Traffic Light Broken", area: "HSR Layout Sector 1", status: "assigned" },
        { lat: 12.9278, lng: 77.5215, title: "Water Leakage", area: "Sector 14 Main Road", status: "progress" },
        { lat: 12.9097, lng: 77.5847, title: "Streetlight Outage", area: "Koramangala 1st Block", status: "progress" },
        { lat: 12.9459, lng: 77.5125, title: "Broken Sidewalk", area: "HSR Layout Sector 1", status: "progress" },
        { lat: 12.9619, lng: 77.5862, title: "Streetlight Outage", area: "MG Road Metro Station", status: "progress" },
        { lat: 12.9661, lng: 77.5773, title: "Garbage Pile", area: "HSR Layout Sector 1", status: "completed" },
        { lat: 12.9278, lng: 77.5636, title: "Garbage Pile", area: "Sector 14 Main Road", status: "completed" },
        { lat: 12.9210, lng: 77.5267, title: "Water Leakage", area: "Koramangala 1st Block", status: "completed" },
        { lat: 12.9729, lng: 77.5163, title: "Illegal Parking", area: "Sector 14 Main Road", status: "completed" },
        { lat: 12.9229, lng: 77.5032, title: "Broken Sidewalk", area: "MG Road Metro Station", status: "escalated" },
        { lat: 12.9876, lng: 77.5315, title: "Traffic Light Broken", area: "Koramangala 1st Block", status: "escalated" },
        { lat: 12.9247, lng: 77.5561, title: "Traffic Light Broken", area: "MG Road Metro Station", status: "escalated" },
        { lat: 12.9219, lng: 77.5998, title: "Illegal Parking", area: "Koramangala 1st Block", status: "escalated" }
    ];


    const areaCounts = {};
    activeWorks.forEach(w => {
        areaCounts[w.area] = (areaCounts[w.area] || 0) + 1;
    });


    const labeledAreas = new Set();

    activeWorks.forEach(work => {
        let markerIcon = work.status === 'assigned' ? redIcon : orangeIcon;
        let marker = L.marker([work.lat, work.lng], { icon: markerIcon }).addTo(window.officerMap);

        let statusBadge = work.status === 'assigned'
            ? '<span style="background:#fbe3e4; color:#e74c3c; padding:2px 6px; border-radius:10px; font-size:12px;">Assigned</span>'
            : '<span style="background:#fff3cd; color:#856404; padding:2px 6px; border-radius:10px; font-size:12px;">In Progress</span>';

        marker.bindPopup(`
            <div style="font-family: 'Inter', sans-serif; padding: 5px;">
                <h4 style="margin: 0 0 8px 0; color: #0b3b60;">${work.title}</h4>
                <p style="margin: 0 0 5px 0; font-size: 13px;"><i class="fa-solid fa-location-dot" style="color: #0b3b60;"></i> <strong>Area:</strong> ${work.area}</p>
                <p style="margin: 0 0 8px 0; font-size: 13px;"><strong>Status:</strong> ${statusBadge}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 8px 0;">
                <p style="margin: 0; font-size: 12px; color: #666; font-weight: 500;">Total Active Works Here: <span style="color: #0b3b60; font-weight: 700;">${areaCounts[work.area]}</span></p>
            </div>
        `);

        if (!labeledAreas.has(work.area)) {
            marker.bindTooltip(`<b>${work.area}</b><br><span style="color:#e74c3c;">${areaCounts[work.area]} Reports</span>`, {
                permanent: true,
                direction: 'right',
                offset: [15, -20],
                className: 'area-tooltip'
            });
            labeledAreas.add(work.area);
        }
    });
}

// Auto Escalation Logic (Simulating time passage for demo)
setInterval(() => {
    const tasks = document.querySelectorAll('.task-item[data-status="assigned"], .task-item[data-status="progress"]');
    let escalatedCount = 0;
    tasks.forEach(task => {
        let time = parseInt(task.getAttribute('data-time'));

        // For demonstration, decrease time rapidly
        time -= 1;
        task.setAttribute('data-time', time);

        const timeStat = task.querySelector('.task-stats strong');
        if (time > 0) {
            if (timeStat && !timeStat.innerHTML.includes('Overdue') && !timeStat.innerHTML.includes('Completed')) {
                timeStat.innerHTML = `${time} Hours`;
            }
        } else if (time === 0 || time < 0) {
            // Escalate!
            task.setAttribute('data-status', 'escalated');
            task.className = 'task-card border-danger task-item';

            const header = task.querySelector('.task-header');
            const oldBadge = header.querySelector('.badge');
            if (oldBadge) {
                oldBadge.className = 'badge badge-danger';
                oldBadge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Escalated (Forwarded to Higher Officials)';
            }

            const desc = task.querySelector('.task-desc');
            if (desc && !desc.innerHTML.includes('Escalation Reason')) {
                desc.innerHTML += '<br><strong style="color:#e74c3c; display:block; margin-top:8px;">Escalation Reason: Exceeded SLA Time Limit. Case forwarded to Regional Supervisor.</strong>';
            }

            if (timeStat) {
                timeStat.innerHTML = `<span style="color:#e74c3c;">${Math.abs(time)} Hours Overdue</span>`;
            }

            const timeLabel = task.querySelector('.task-stats small');
            if (timeLabel && !timeLabel.innerHTML.includes('Overdue Duration')) {
                timeLabel.innerHTML = 'Overdue Duration:';
            }

            const select = task.querySelector('.status-select');
            if (select) {
                select.value = 'escalated';
            }
            escalatedCount++;
        }
    });

    if (escalatedCount > 0) {
        const activeBtn = document.querySelector('.task-tab-btn.btn-primary, .task-tab-btn.btn-danger');
        if (activeBtn) {
            const status = activeBtn.innerText.toLowerCase().includes('escalated') ? 'escalated' :
                activeBtn.innerText.toLowerCase().includes('progress') ? 'progress' :
                    activeBtn.innerText.toLowerCase().includes('completed') ? 'completed' : 'assigned';

            if (typeof window.filterTasks === 'function') {
                window.filterTasks(status, activeBtn);
            }
        }
    }
}, 3000); // Trigger every 3 seconds for immediate visibility of escalation