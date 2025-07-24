import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'UzOPay',
  description: 'Upfinzo Assignment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"  className={inter.className}>
      <body className='bg-[#010203]'>{children}</body>
    </html>
  )
}
