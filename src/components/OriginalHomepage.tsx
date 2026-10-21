/**
 * Reference-page rendering boundary. Keeping the supplied HTML isolated here
 * lets the next redesign replace individual sections without changing the app shell.
 * The HTML is a local project asset supplied for this cloning exercise.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';

const originalHomepageHtml = readFileSync(
  path.join(process.cwd(), 'src/lib/original-homepage.html'),
  'utf8',
);

export default function OriginalHomepage() {
  return (
    <div
      id="siteWrapper"
      className="clearfix site-wrapper"
      dangerouslySetInnerHTML={{ __html: originalHomepageHtml }}
    />
  );
}
