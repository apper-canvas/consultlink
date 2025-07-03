import React from 'react'
import Navigation from '@/components/molecules/Navigation'
import Footer from '@/components/molecules/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout