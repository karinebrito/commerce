import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ['greek'] })

export const metadata = {
  title: "Commerce",
  description: "Next commerce"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
    <body className={`${inter.className} bg-gray-100`}>
      <CartProvider>
        <Header />
          <main className='h-full p-16'>
              {children}
          </main>
      </CartProvider>
      </body>
    </html>
  )
}
