import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stickify',
  description: 'Print your ideas into reality with us',
  generator: 'StickifyNepal',
  applicationName: 'StickifyNepal',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'stickers',
    'custom stickers',
    'print stickers',
    'sticker printing',
    'custom printing',
    'Nepal',
    'stickifynepal',
    'stickify',
    'stickifynepal.com',
    'stickifynepal.com.np',],
  authors: [{ name: 'StickifyNepal' }],
  creator: 'StickifyNepal',
  publisher: 'StickifyNepal',
  colorScheme: 'light dark',

   icons: {
    icon: 'https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/logo.jpeg', // or .ico, svg, whatever you have in public/
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
