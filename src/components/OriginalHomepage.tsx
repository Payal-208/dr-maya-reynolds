/**
 * Reference-page rendering boundary. Keeping the supplied HTML isolated here
 * lets the next redesign replace individual sections without changing the app shell.
 * The HTML is a local project asset supplied for this cloning exercise.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
<<<<<<< HEAD
=======
import Script from 'next/script';
>>>>>>> ab5be9c288e3995116a8c04b6fed6bb19b1cf69f

const originalHomepageHtml = readFileSync(
  path.join(process.cwd(), 'src/lib/original-homepage.html'),
  'utf8',
);

export default function OriginalHomepage() {
  return (
<<<<<<< HEAD
    <div
      id="siteWrapper"
      className="clearfix site-wrapper"
      dangerouslySetInnerHTML={{ __html: originalHomepageHtml }}
    />
=======
    <>
      <Script src="/original-assets/mobile-nav.js" strategy="afterInteractive" />
      <Script src="/original-assets/mobile-images.js" strategy="afterInteractive" />
      <div
      id="siteWrapper"
      className="clearfix site-wrapper"
      dangerouslySetInnerHTML={{ __html: originalHomepageHtml }}
      />
    </>
>>>>>>> ab5be9c288e3995116a8c04b6fed6bb19b1cf69f
  );
}
