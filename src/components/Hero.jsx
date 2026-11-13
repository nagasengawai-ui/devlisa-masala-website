import React from 'react'
import heroImage from '../assets/devlisa-spice-range.png'
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-orb orb-one" />
      <div className="hero-bg-orb orb-two" />

      <div className="hero-content">
        <div className="eyebrow">
          <span />
          The Art of Authentic Flavour
        </div>
        <h1>
          Make every meal
          <br />
          <em>a little more</em> <span>memorable.</span>
        </h1>
        <p className="hero-description">
          A thoughtful blend of colour, aroma and flavour — crafted for the moments
          that bring everyone to the table.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#products">
            Explore our spices <span>↗</span>
          </a>
          <a className="text-link" href="#story">
            Discover Devlisa <span>→</span>
          </a>
        </div>
        <div className="hero-proof">
          <div className="proof-icon">✳</div>
          <div>
            <strong>Real Spices. Real Taste.</strong>
            <small>Your kitchen&apos;s everyday flavour companion</small>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
         <img
  src={heroImage}
  alt="The Devlisa spice range — Red Chili, Haldi, Kitchen King and Garam Masala"
/>
        </div>
        <div className="floating-note note-top">
          <span>✦</span> Made for flavour
        </div>
        <div className="floating-note note-bottom">
          <b>04</b>
          <span>
            Everyday
            <br />
            essentials
          </span>
        </div>
      </div>

      <div className="hero-bottom-label">
        A Little Magic in Every Pinch <span>✳</span>
      </div>
    </section>
  )
}