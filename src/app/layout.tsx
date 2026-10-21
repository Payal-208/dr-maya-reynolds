import type { ReactNode } from 'react';
import './globals.css';
import { metadata, originalBodyClasses, originalStylesheets } from '@/lib/site-config';

export { metadata };

type RootLayoutProps = Readonly<{ children: ReactNode }> ;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-US">
      <head>
        {originalStylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body
        id="collection-670423e206da6c036366fd5c"
        className={originalBodyClasses}
        tabIndex={-1}
      >
        {children}
      </body>
    </html>
  );
}
