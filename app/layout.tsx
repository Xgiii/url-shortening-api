/* eslint-disable @next/next/no-head-element */
import '../styles/globals.css';
import { Poppins } from '@next/font/google';
import MainHeader from '../components/MainHeader';

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
      <body className='p-6 lg:px-32 lg:pt-12'>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
