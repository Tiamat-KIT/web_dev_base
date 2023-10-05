// "use client"
import HeadNavbar from '@/components/Auto/UI/HeadNavbar';
import './globals.css'
import { SessionProvider } from "next-auth/react";
import Footer from '@/components/Auto/UI/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className='bg-pink-200'>
      <body>
        <HeadNavbar />
        {/*
        <SessionProvider>
          {children}
        </SessionProvider>
        */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
