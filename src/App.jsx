import useReveal from './hooks/useReveal'
import React from 'react'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Products from './components/Products'
import Story from './components/Story'
import PromiseSection from './components/PromiseSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  useReveal()

  return (
    <>
      <Announcement />
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Ticker />
        <Products />
        <Story />
        <PromiseSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}