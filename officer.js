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
        });
    });

    // Status Select Logic
    const statusSelects = document.querySelectorAll('.status-select');
    statusSelects.forEach(select => {
        select.addEventListener('change', (e) => {
            const ticketId = e.target.getAttribute('data-ticket');
            const resPanel = document.getElementById(`res-${ticketId}`);
            
            if (e.target.value === 'Resolved') {
                resPanel.classList.remove('hidden');
            } else {
                resPanel.classList.add('hidden');
                document.getElementById(`ai-res-${ticketId}`).classList.add('hidden');
                document.getElementById(`verify-${ticketId}`).classList.add('hidden');
            }
        });
    });
});

// Image Preview for Resolution
function previewResolution(input, previewId, verifyBtnId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById(previewId);
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            input.parentElement.querySelector('i').classList.add('hidden');
            input.parentElement.querySelector('small').classList.add('hidden');
            
            // Show AI Verification button
            document.getElementById(verifyBtnId).classList.remove('hidden');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// AI Verification Simulation
function runAIVerification(ticketId) {
    const btn = document.getElementById(`verify-${ticketId}`);
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Verifying...';
    btn.disabled = true;

    setTimeout(() => {
        btn.classList.add('hidden');
        document.getElementById(`ai-res-${ticketId}`).classList.remove('hidden');
        
        // After 2 seconds showing result, show success modal
        setTimeout(() => {
            document.getElementById('officer-success-modal').classList.remove('hidden');
        }, 2000);
    }, 2000);
}

function closeSuccessModal() {
    document.getElementById('officer-success-modal').classList.add('hidden');
}
