
import { useEffect, useState } from 'react'
import { waLink } from '../config'
import React from 'react'
const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Our Spices' },
  { href: '#story', label: 'Our Story' },
  { href: '#quality', label: 'Our Promise' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <span className="brand-mark">
          <span className="leaf">✦</span>D
        </span>
        <span className="brand-copy">
          <strong>Devlisa</strong>
          <small>Taste of Purity… Always</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen(v => !v)}
      >
        {open ? '✕' : '☰'}
      </button>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href={waLink('Hello Devlisa, I want to know more about your spices.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        Enquire <span>↗</span>
      </a>
    </header>
  )
}
