/* Minimal local replacement for the original site's unavailable menu runtime. */
(() => {
  const init = () => {
    const body = document.body;
    const menu = document.querySelector('[data-test="header-menu"]');
    const burgerButtons = document.querySelectorAll('[data-test="header-burger"]');
    if (!menu || !burgerButtons.length || menu.dataset.localNavReady === 'true') return;
    menu.dataset.localNavReady = 'true';

    const folders = Array.from(menu.querySelectorAll('.header-menu-nav-folder'));
    const root = menu.querySelector('.header-menu-nav-folder[data-folder="root"]');

    const closeMenu = () => {
      body.classList.remove('header--menu-open');
      burgerButtons.forEach((button) => {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open menu');
      });
      resetFolders();
    };

    const resetFolders = () => {
      folders.forEach((folder) => {
        folder.classList.remove('header-menu-nav-folder--open', 'header-menu-nav-folder--active');
      });
      if (root) root.classList.add('header-menu-nav-folder--active');
    };

    const openMenu = () => {
      resetFolders();
      body.classList.add('header--menu-open');
      burgerButtons.forEach((button) => {
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Close menu');
      });
    };

    burgerButtons.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open menu');
      button.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.contains('header--menu-open') ? closeMenu() : openMenu();
      });
    });

    menu.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const back = target.closest('[data-action="back"]');
      if (back) {
        event.preventDefault();
        const activeFolder = back.closest('.header-menu-nav-folder[data-folder]');
        if (activeFolder && activeFolder !== root) {
          activeFolder.classList.remove('header-menu-nav-folder--active');
          const parent = activeFolder.parentElement?.closest('.header-menu-nav-folder');
          if (parent) parent.classList.remove('header-menu-nav-folder--open');
        }
        return;
      }

      const folderLink = target.closest('[data-folder-id]');
      if (folderLink) {
        const folderId = folderLink.getAttribute('data-folder-id');
        const nextFolder = folders.find((folder) => folder.getAttribute('data-folder') === folderId);
        if (nextFolder) {
          event.preventDefault();
          const parent = folderLink.closest('.header-menu-nav-folder');
          if (parent) parent.classList.add('header-menu-nav-folder--open');
          nextFolder.classList.add('header-menu-nav-folder--active');
        }
        return;
      }

      if (target.closest('a[href^="#"]') || target.closest('.header-menu-cta a')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && body.classList.contains('header--menu-open')) closeMenu();
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
  window.addEventListener('load', init, { once: true });
})();
