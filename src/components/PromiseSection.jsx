import React from 'react'

const ITEMS = [
  {
    icon: '✳',
    title: 'Flavour first',
    text: 'Spice essentials created around the joy of everyday cooking.',
  },
  {
    icon: '◈',
    title: 'Made for kitchens',
    text: 'Familiar favourites for the meals and traditions we love.',
  },
  {
    icon: '♡',
    title: 'Growing with you',
    text: 'A brand that looks forward to being part of your food story.',
  },
]

export default function PromiseSection() {
  return (
    <section className="section promise-section reveal" id="quality">
      <div className="center-heading">
        <div className="eyebrow">
          <span />
          The Devlisa Promise
        </div>
        <h2>
          Good food starts
          <br />
          <em>with good flavour.</em>
        </h2>
        <p>Our brand promise is simple: make every sprinkle count.</p>
      </div>

      <div className="promise-grid">
        {ITEMS.map((i) => (
          <div key={i.title} className="promise-item">
            <div className="promise-symbol">{i.icon}</div>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}