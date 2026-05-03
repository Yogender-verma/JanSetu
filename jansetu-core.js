// 1. Theme Logic
function applyTheme(theme) {
    localStorage.setItem('janSetuTheme', theme);
    if(theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('janSetuTheme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// 2. Setup UI Controls
document.addEventListener('DOMContentLoaded', () => {
    // The custom control panel (Dark Mode Only)
    const controlHTML = `
        <div class="control-panel">
            <button class="theme-toggle" onclick="toggleTheme()" title="Toggle Dark/Light Mode" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--text-dark); margin-left: 0.5rem;">
                <i class="fa-solid fa-circle-half-stroke"></i>
            </button>
        </div>
    `;

    const navActions = document.querySelector('.nav-actions'); 
    const portalHeader = document.querySelector('.portal-header .header-user'); 
    const adminHeader = document.querySelector('.admin-sidebar'); 

    if (navActions && !document.querySelector('.control-panel')) {
        navActions.insertAdjacentHTML('afterbegin', controlHTML);
    } else if (portalHeader && !document.querySelector('.control-panel')) {
        portalHeader.insertAdjacentHTML('beforebegin', controlHTML);
    } else if (adminHeader && !document.querySelector('.control-panel')) {
        const logo = adminHeader.querySelector('.sidebar-logo');
        if(logo) logo.insertAdjacentHTML('afterend', controlHTML);
    }

    const savedTheme = localStorage.getItem('janSetuTheme') || 'light';
    applyTheme(savedTheme);
});
