import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#top">
        <span className="brand-mark"><span className="leaf">✦</span>D</span>
        <span className="brand-copy"><strong>Devlisa</strong><small>Taste of Purity… Always</small></span>
      </a>
      <p>Real Spices. Real Taste.</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Devlisa Masale. All rights reserved.</span>
        <span>Made with a love for flavour <b>✳</b></span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}