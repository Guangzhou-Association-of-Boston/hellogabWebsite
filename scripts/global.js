document.addEventListener("DOMContentLoaded", () => {
    // Load the header dynamically
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setupMobileMenu();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load the footer dynamically
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) footerPlaceholder.innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-menu');
    const mobileNavContainer = document.querySelector('.mobile-nav');
    
    // 1. We dynamically clone desktop links into the mobile menu
    const desktopNavLinks = document.querySelector('.nav-links').innerHTML;
    const desktopLanguageLinks = document.querySelector('.dropdown-menu').innerHTML;
    
    mobileNavContainer.innerHTML = `
        <ul class="mobile-nav-links">
            ${desktopNavLinks}
        </ul>
        <div class="mobile-language" style="border-top: 1px solid #ddd; padding-top: 20px;">
            <button class="mobile-dropdown-toggle">Language ▼</button>
            <ul class="mobile-dropdown-menu">
                ${desktopLanguageLinks}
            </ul>
        </div>
    `;

    // 2. Handle Slide-in interactions
    const toggleMenu = () => {
        mobileMenu.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    };

    if (hamburger) hamburger.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    // 3. Handle Mobile Language Dropdown
    const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
    if (mobileDropdownToggle && mobileDropdownMenu) {
        mobileDropdownToggle.addEventListener('click', () => {
            mobileDropdownMenu.classList.toggle('open');
            const isOpen = mobileDropdownMenu.classList.contains('open');
            mobileDropdownToggle.innerHTML = isOpen ? 'Language ▲' : 'Language ▼';
        });
    }

    // 4. Set Active Page Indicator
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    allLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}