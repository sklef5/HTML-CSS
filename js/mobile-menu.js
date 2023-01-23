(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const MenuBtn = document.querySelector('.js-menu-btn');
    // const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
      const isMenuOpen =
        MenuBtn.getAttribute('aria-expanded') === 'true' || false;
      MenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      MenuBtn.classList.toggle('is-open');

      mobileMenu.classList.toggle('is-open');



      // const scrollLockMethod = !isMenuOpen
      //   ? 'disableBodyScroll'
      //   : 'enableBodyScroll';
      // bodyScrollLock[scrollLockMethod](document.body);
    };

    MenuBtn.addEventListener('click', toggleMenu);
    // closeMenuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    //   if (!e.matches) return;
    //   mobileMenu.classList.remove('is-open');
    //   openMenuBtn.setAttribute('aria-expanded', false);
    //   bodyScrollLock.enableBodyScroll(document.body);
    // });
  })();