import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import requests from '@/utils/requests'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" >
      <body className="bg-[#141414] text-white overflow-x-hidden !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-red-600">
        <div className='{`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] '>
          <Header />
          <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 " >{children}</main>
        </div>
      </body>
    </html>
      
    
  )
}

