document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('admin-login-form');
    const loginSection = document.getElementById('admin-login-section');
    const dashboardSection = document.getElementById('admin-dashboard-section');
    const errorMsg = document.getElementById('login-error-msg');
    const logoutBtn = document.getElementById('admin-logout-btn');

    // Translation Helper
    function t(key) {
        const lang = localStorage.getItem('janSetuLang') || 'en';
        return (translations[lang] && translations[lang][key]) ? translations[lang][key] : key;
    }

    // Check if already logged in
    if (localStorage.getItem('jansetu_admin_logged_in') === 'true') {
        showDashboard();
    }

    // Login Logic
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('admin-user').value.trim();
            const pass = document.getElementById('admin-pass').value.trim();

            if (user === 'admin_demo' && pass === 'jan123') {
                localStorage.setItem('jansetu_admin_logged_in', 'true');
                showDashboard();
            } else {
                errorMsg.classList.remove('hidden');
                // Shake effect
                loginForm.style.transform = 'translateX(-10px)';
                setTimeout(() => loginForm.style.transform = 'translateX(10px)', 100);
                setTimeout(() => loginForm.style.transform = 'translateX(-10px)', 200);
                setTimeout(() => loginForm.style.transform = 'translateX(0)', 300);
            }
        });
    }

    // Logout Logic
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('jansetu_admin_logged_in');
            window.location.reload();
        });
    }



    // Sidebar Navigation Logic
    const navBtns = document.querySelectorAll('.sidebar-nav .nav-btn');
    const adminViews = document.querySelectorAll('.admin-view');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Hide all views
            adminViews.forEach(view => view.classList.add('hidden'));

            // Show targeted view
            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                const targetView = document.getElementById(targetId);
                if (targetView) {
                    targetView.classList.remove('hidden');

                    // If switching back to overview, resize map
                    if (targetId === 'view-overview' && hotspotMap) {
                        setTimeout(() => hotspotMap.invalidateSize(), 100);
                    }
                }
            }
        });
    });

    // Initialize Hotspot Map
    let hotspotMap = null;
    function initHotspotMap() {
        if (hotspotMap !== null || !document.getElementById('admin-hotspot-map')) return;

        // Default center
        hotspotMap = L.map('admin-hotspot-map').setView([28.6139, 77.2090], 12);

        // Add satellite + labels (Hybrid)
        const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 18,
            attribution: 'Tiles &copy; Esri'
        });
        
        const labels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 18,
            attribution: 'Labels &copy; Esri'
        });

        satellite.addTo(hotspotMap);
        labels.addTo(hotspotMap);

        // Define Hotspot Areas (Density visualization via circles)
        const hotspots = [
            { lat: 28.6139, lng: 77.2090, radius: 1500, color: '#e74c3c', density: 'High', issues: 145 }, // Central
            { lat: 28.5355, lng: 77.2910, radius: 1200, color: '#f39c12', density: 'Medium', issues: 82 }, // South
            { lat: 28.7041, lng: 77.1025, radius: 2000, color: '#e74c3c', density: 'High', issues: 210 }, // North
            { lat: 28.6505, lng: 77.2303, radius: 800, color: '#3498db', density: 'Low', issues: 34 }, // East
            { lat: 28.5961, lng: 77.0596, radius: 1800, color: '#f39c12', density: 'Medium', issues: 95 }  // West
        ];

        hotspots.forEach(spot => {
            // Draw density circle
            L.circle([spot.lat, spot.lng], {
                color: spot.color,
                fillColor: spot.color,
                fillOpacity: 0.4,
                radius: spot.radius,
                weight: 2
            }).addTo(hotspotMap).bindPopup(`
                <div style="font-family: 'Inter', sans-serif; text-align: ${localStorage.getItem('janSetuLang') === 'ur' ? 'right' : 'left'};">
                    <h4 style="margin:0 0 5px 0; color:var(--text-dark);">${spot.density} ${t('density_zone')}</h4>
                    <span style="font-size:1.5rem; font-weight:bold; color:${spot.color};">${spot.issues}</span> 
                    <span style="color:var(--text-muted); font-size:0.9rem;">${t('active_complaints')}</span>
                </div>
            `);
        });

        // Force map to recalculate size after being unhidden
        setTimeout(() => hotspotMap.invalidateSize(), 500);
    }

    function showDashboard() {
        loginSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        if (logoutBtn) logoutBtn.classList.remove('hidden');

        // Init map when dashboard is visible
        setTimeout(initHotspotMap, 100);
    }

    // Department Drill-down Modal Logic
    const deptModal = document.getElementById('dept-drill-modal');
    const closeDeptModal = document.getElementById('close-dept-modal');
    const modalTitle = document.getElementById('modal-dept-title');
    const deptButtons = document.querySelectorAll('.btn-dept-details');

    const deptHierarchy = {
        'water': {
            title: '<i class="fa-solid fa-faucet-drip"></i> Water Supply Details',
            head: { name: 'Priya Sharma', role: 'Chief Water Operations Officer', img: 'Priya+Sharma', bg: '3498db' },
            team: [
                { name: 'Karan Verma', role: 'Pipeline Inspector', img: 'Karan+Verma', bg: '2c3e50' },
                { name: 'Neha Joshi', role: 'Field Engineer', img: 'Neha+Joshi', bg: '2c3e50' }
            ]
        },
        'electricity': {
            title: '<i class="fa-solid fa-bolt"></i> Electricity Board Details',
            head: { name: 'Rajiv Menon', role: 'Chief Grid Engineer', img: 'Rajiv+Menon', bg: 'f39c12' },
            team: [
                { name: 'Suresh Patil', role: 'Substation Manager', img: 'Suresh+Patil', bg: '2c3e50' },
                { name: 'Anjali Gupta', role: 'Line Technician', img: 'Anjali+Gupta', bg: '2c3e50' }
            ]
        },
        'waste': {
            title: '<i class="fa-solid fa-dumpster"></i> Waste Management Details',
            head: { name: 'Amit Desai', role: 'Director of Sanitation', img: 'Amit+Desai', bg: '8e44ad' },
            team: [
                { name: 'Sunita Rao', role: 'Fleet Coordinator', img: 'Sunita+Rao', bg: '2c3e50' },
                { name: 'Vikram Singh', role: 'Zone Supervisor', img: 'Vikram+Singh', bg: 'e74c3c' } // Reusing flagged officer for continuity
            ]
        },
        'public': {
            title: '<i class="fa-solid fa-road"></i> Public Works Details',
            head: { name: 'Ravi Kumar', role: 'Chief Civil Engineer', img: 'Ravi+Kumar', bg: '7f8c8d' },
            team: [
                { name: 'Sneha Reddy', role: 'Asphalt Supervisor', img: 'Sneha+Reddy', bg: '2c3e50' },
                { name: 'Arjun Mehta', role: 'Site Inspector', img: 'Arjun+Mehta', bg: '2c3e50' }
            ]
        }
    };

    const modalOfficerList = document.querySelector('#dept-drill-modal .officer-list');

    deptButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const dept = btn.getAttribute('data-dept');
            const data = deptHierarchy[dept];

            if (data) {
                modalTitle.innerHTML = data.title;

                // Inject hierarchy HTML
                let html = `
                    <div class="hierarchy-head" style="border: 1px solid var(--border-color); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; background: #f8faff;">
                        <p style="margin:0 0 0.5rem 0; font-size:0.8rem; font-weight:bold; color:var(--text-muted); text-transform:uppercase;">${t('chief_admin')}</p>
                        <div style="display:flex; align-items:center; gap: 1rem;">
                            <img src="https://ui-avatars.com/api/?name=${data.head.img}&background=${data.head.bg}&color=fff&size=48" style="border-radius: 50%;">
                            <div>
                                <h4 style="margin:0; font-size:1.1rem;">${data.head.name}</h4>
                                <p style="margin:0; color:var(--primary-color); font-weight:500;">${data.head.role}</p>
                            </div>
                        </div>
                    </div>
                    <div class="hierarchy-team">
                        <p style="margin:0 0 0.5rem 0; font-size:0.8rem; font-weight:bold; color:var(--text-muted); text-transform:uppercase;">${t('supporting_team')}</p>
                `;

                data.team.forEach(member => {
                    html += `
                        <div class="officer-item" style="padding: 0.5rem; margin-bottom: 0.5rem; border: 1px solid var(--border-color); border-radius: 6px;">
                            <img src="https://ui-avatars.com/api/?name=${member.img}&background=${member.bg}&color=fff&size=32" style="width: 32px; height: 32px; border-radius: 50%;">
                            <div class="officer-details">
                                <h5 style="margin:0; font-size:0.95rem;">${member.name}</h5>
                                <p style="font-size:0.85rem; margin:0; color:var(--text-muted);">${member.role}</p>
                            </div>
                        </div>
                    `;
                });

                html += `</div>`;

                if (modalOfficerList) {
                    modalOfficerList.innerHTML = html;
                }
            }

            deptModal.classList.remove('hidden');
        });
    });

    if (closeDeptModal) {
        closeDeptModal.addEventListener('click', () => {
            deptModal.classList.add('hidden');
        });
    }

});