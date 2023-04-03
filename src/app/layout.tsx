// "use client"
import './globals.css'
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body> 
        {/*
        <SessionProvider>
          {children}
        </SessionProvider>
        */}
        {children}
      </body>
    </html>
  )
}
