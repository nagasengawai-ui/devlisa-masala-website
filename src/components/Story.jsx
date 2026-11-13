import React from 'react'
import heroImage from '../assets/devlisa-spice-range.png'

export default function Story() {
  return (
    <section className="story-section reveal" id="story">
      <div className="story-image">
        <img
  src={heroImage}
  alt="The Devlisa spice range — Red Chili, Haldi, Kitchen King and Garam Masala"
/>
        <div className="story-stamp">
          Real
          <br />
          <b>Flavour</b>
          <br />✳ Always
        </div>
      </div>

      <div className="story-copy">
        <div className="eyebrow light">
          <span />
          A Brand Built Around Taste
        </div>
        <h2>
          Because the best
          <br />
          memories are made
          <br />
          <em>around food.</em>
        </h2>
        <p>
          At Devlisa, we believe flavour is more than an ingredient. It is the little
          detail that turns an everyday meal into a moment worth sharing.
        </p>
        <p>
          Our growing spice collection is designed to be part of your everyday
          cooking — from familiar family favourites to recipes waiting to be
          discovered.
        </p>
        <a className="btn btn-light" href="#contact">
          Let&apos;s connect <span>↗</span>
        </a>
      </div>
    </section>
  )
}