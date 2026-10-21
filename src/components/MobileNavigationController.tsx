'use client';

import { useEffect } from 'react';

/** Restores the small amount of Squarespace navigation behavior needed by the static HTML clone. */
export default function MobileNavigationController() {
  useEffect(() => {
    const body = document.body;
    const menu = document.querySelector<HTMLElement>('.header-menu');
    if (!menu) return;

    const setOpen = (open: boolean) => {
      body.classList.toggle('mr-mobile-menu-open', open);
      document.querySelectorAll<HTMLButtonElement>('[data-test="header-burger"]').forEach((button) => {
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
      menu.setAttribute('aria-hidden', String(!open));
      if (!open) {
        menu.querySelectorAll<HTMLElement>('.header-menu-nav-folder[data-folder]').forEach((folder) => {
          folder.classList.toggle('mr-folder-active', folder.dataset.folder === 'root');
        });
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const burger = target.closest('[data-test="header-burger"]');
      if (burger) {
        event.preventDefault();
        setOpen(!body.classList.contains('mr-mobile-menu-open'));
        return;
      }
      if (!body.classList.contains('mr-mobile-menu-open')) return;

      const back = target.closest('[data-action="back"]');
      if (back) {
        event.preventDefault();
        const folder = back.closest<HTMLElement>('.header-menu-nav-folder');
        folder?.classList.remove('mr-folder-active');
        menu.querySelector<HTMLElement>('.header-menu-nav-folder[data-folder="root"]')?.classList.add('mr-folder-active');
        return;
      }

      const folderLink = target.closest<HTMLAnchorElement>('.header-menu-nav-item a[data-folder-id]');
      if (folderLink) {
        event.preventDefault();
        const folderId = folderLink.dataset.folderId;
        menu.querySelectorAll<HTMLElement>('.header-menu-nav-folder[data-folder]').forEach((folder) => {
          folder.classList.toggle('mr-folder-active', folder.dataset.folder === folderId);
        });
        return;
      }

      if (target.closest('.header-menu a[href]')) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    menu.setAttribute('aria-hidden', 'true');
    menu.querySelectorAll<HTMLElement>('.header-menu-nav-folder[data-folder]').forEach((folder) => {
      folder.classList.toggle('mr-folder-active', folder.dataset.folder === 'root');
    });
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
      body.classList.remove('mr-mobile-menu-open');
    };
  }, []);

  return null;
}
