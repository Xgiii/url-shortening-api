/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
