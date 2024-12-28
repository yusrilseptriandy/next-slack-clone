import type { Metadata } from "next";
import localFont from 'next/font/local';
import './globals.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'], // Pilih subset sesuai kebutuhan
  weight: ['400', '500', '800'], // Pilih berat font yang diinginkan
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
