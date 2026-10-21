'use client';

import { useEffect } from 'react';

/**
 * Re-creates the small bit of behavior the original Squarespace scripts provided:
 *  - hamburger button opens/closes the full-screen menu
 *  - folders (Specialties, Methods) slide in, with a Back button
 *  - tapping any in-page link closes the menu and scrolls to the section
 */
export default function SiteInteractions() {
  useEffect(() => {
    const body = document.body;
    const menu = document.querySelector<HTMLElement>('.header-menu');
    const list = menu?.querySelector<HTMLElement>('.header-menu-nav-list');
    if (!menu || !list) return;

    // Folders are nested inside the root folder in the markup; the slide animation needs them as siblings.
    menu.querySelectorAll<HTMLElement>('.header-menu-nav-folder[data-folder]:not([data-folder="root"])').forEach((f) => {
      if (f.parentElement !== list) list.appendChild(f);
    });
    const root = list.querySelector<HTMLElement>('.header-menu-nav-folder[data-folder="root"]');

    const burgers = () => Array.from(document.querySelectorAll<HTMLElement>('.header-burger-btn'));
    const resetFolders = () => {
      root?.classList.remove('header-menu-nav-folder--open');
      list.querySelectorAll('.header-menu-nav-folder--active').forEach((f) => f.classList.remove('header-menu-nav-folder--active'));
    };
    const setOpen = (open: boolean) => {
      body.classList.toggle('header--menu-open', open);
      burgers().forEach((b) => {
        b.classList.toggle('burger--active', open);
        b.setAttribute('aria-expanded', String(open));
      });
      if (!open) resetFolders();
    };

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('.header-burger-btn')) {
        e.preventDefault();
        setOpen(!body.classList.contains('header--menu-open'));
        return;
      }
      // Desktop/tablet dropdowns: tap or click toggles (hover already works with a mouse)
      const navFolderBtn = t.closest<HTMLElement>('.header-nav-folder-title');
      const openNavBtns = Array.from(document.querySelectorAll<HTMLElement>('.header-nav-folder-title[aria-expanded="true"]'));
      if (navFolderBtn) {
        const wasOpen = navFolderBtn.getAttribute('aria-expanded') === 'true';
        openNavBtns.forEach((b) => b.setAttribute('aria-expanded', 'false'));
        navFolderBtn.setAttribute('aria-expanded', String(!wasOpen));
        return;
      }
      openNavBtns.forEach((b) => b.setAttribute('aria-expanded', 'false'));
      const folderLink = t.closest<HTMLElement>('a[data-folder-id]');
      if (folderLink && menu.contains(folderLink)) {
        const target = list.querySelector<HTMLElement>(`.header-menu-nav-folder[data-folder="${folderLink.dataset.folderId}"]`);
        if (target) {
          e.preventDefault();
          target.classList.add('header-menu-nav-folder--active');
          root?.classList.add('header-menu-nav-folder--open');
        }
        return;
      }
      if (t.closest('[data-action="back"]') && menu.contains(t)) {
        e.preventDefault();
        resetFolders();
        return;
      }
      const link = t.closest<HTMLAnchorElement>('a[href^="#"]');
      if (link && menu.contains(link)) setOpen(false); // default behavior then scrolls to the section
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
