/* Fallback for imageFluid blocks in the saved HTML. Squarespace normally reveals
   and sizes these images with its component runtime, which is intentionally not
   loaded in this local Next.js clone. Keep the original image and add a simple
   responsive copy only at mobile widths. */
(() => {
  const media = window.matchMedia('(max-width: 767px)');
  const sync = () => {
    document.querySelectorAll('.sqs-block[data-definition-name="website.components.imageFluid"]').forEach((block) => {
      const content = block.querySelector(':scope > .sqs-block-content');
      const original = block.querySelector('img[data-sqsp-image-block-image]');
      if (!content || !original) return;
      let fallback = content.querySelector(':scope > img.mr-mobile-image-fallback');
      if (!fallback) {
        fallback = document.createElement('img');
        fallback.className = 'mr-mobile-image-fallback';
        fallback.alt = original.alt || '';
        fallback.src = original.getAttribute('data-src') || original.currentSrc || original.src;
        fallback.width = Number(original.getAttribute('width')) || original.naturalWidth || 1200;
        fallback.height = Number(original.getAttribute('height')) || original.naturalHeight || 900;
        fallback.loading = original.loading || 'lazy';
        fallback.decoding = 'async';
        fallback.setAttribute('data-mobile-fallback-for', block.id || 'image');
        content.appendChild(fallback);
      }
      fallback.style.setProperty('display', media.matches ? 'block' : 'none', 'important');
    });
  };
  const start = () => { sync(); media.addEventListener?.('change', sync); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
  window.addEventListener('load', sync, { once: true });
})();
