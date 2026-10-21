# Dr. Maya Reynolds, PsyD — homepage content adaptation

A Next.js recreation of the supplied reference homepage. The current phase prioritizes preserving the reference layout and appearance. Original page HTML and styles are intentionally isolated so the next profile-led redesign can replace content and sections in a controlled way.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. To verify a production build, run `npm run build`; then run `npm start`.

## Project structure

- `src/app/layout.tsx` — app shell and ordered stylesheet loading.
- `src/app/page.tsx` — homepage composition.
- `src/app/globals.css` — reset, image fallback, and centralized design tokens.
- `src/components/OriginalHomepage.tsx` — isolated rendering boundary for the reference HTML.
- `src/lib/original-homepage.html` — reference markup updated with Dr. Maya Reynolds profile-led copy while retaining the existing section structure and styling hooks.
- `src/lib/site-config.ts` — page metadata, original body classes, and stylesheet order.
- `public/original-assets/` — local reference assets and supporting styles.
- `tailwind.config.ts` — semantic Tailwind tokens mapped to CSS variables.

## Why the reference HTML is still present

This is a low-risk organization pass intended to preserve the visual clone. The saved page originated from Squarespace and depends on a large amount of platform CSS; rewriting all of it at once could introduce visual regressions. For the next phase, replace the isolated reference renderer with semantic React components section by section, then update imagery, logo, and visual styling while verifying screenshots after each change. Avoid carrying over unrelated Squarespace scripts or CSS when they are no longer needed.

## Suggested next phase: profile-led redesign

1. The first content pass is complete: homepage copy and metadata now reflect the supplied Dr. Maya Reynolds profile. Do not invent credentials, services, office addresses, or claims.
2. Build reusable components such as `Header`, `Hero`, `Services`, `Approach`, `OurOffice`, `ContactCTA`, and `Footer`.
3. Use `site-config.ts` for content/configuration that is genuinely shared, and use the CSS variables in `globals.css` as the design-token source of truth.
4. Add profile-appropriate imagery and 2–3 office photos only when the source materials support them.
5. Update metadata, headings, alt text, and location-specific SEO based on verified profile information.
6. Keep the current clone available as a visual reference and compare screenshots at desktop, tablet, and mobile widths.

## Notes

- Some original font or asset references may still use public CDNs, so internet access can be required.
- The CSS variables establish a reusable theme foundation; the existing reference CSS still controls much of the clone's styling. Full token adoption should happen incrementally during the redesign.
- A successful local run and production build should be confirmed in the target environment before submission.


## Dr. Maya Reynolds content update

The homepage copy has been adapted from the supplied fictional therapist profile while preserving the cloned page structure and stylesheet order. The profile lists the office address exactly as `123th Street 45 W, Santa Monica, CA 90401`; verify this unusual address with the assignment source before publishing. The profile does not supply a phone number, email address, booking URL, fees, insurance information, or hours, so none have been invented. Original image assets and image placements remain for the later visual-redesign step; the old logo image still needs replacement before publication.
<<<<<<< HEAD
=======


## Step 3 — theme & images
See `UPDATE-NOTES-STEP-3-THEME-AND-IMAGES.txt`. Palette lives in `public/original-assets/theme.css` (overrides) and the tokens in `site.css`/`globals.css`; images are in `public/images/`.
>>>>>>> ab5be9c288e3995116a8c04b6fed6bb19b1cf69f
