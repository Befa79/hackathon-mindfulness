function hamburgerMenu() {
    const menuNavBar = document.getElementById('menu-navbar');
    const dropDownHamburger = document.getElementById('dropdown-menu-nav');
    if (menuNavBar.style.display === 'flex') {
        menuNavBar.style.display = 'none';
        dropDownHamburger.style.width = '';
        dropDownHamburger.style.justifyContent = '';
    } else {
        menuNavBar.style.display = 'flex';
        dropDownHamburger.style.width = '100%';
        dropDownHamburger.style.justifyContent = 'center';
    }
};
