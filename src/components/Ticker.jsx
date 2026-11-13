import React from 'react'

export default function Ticker() {
  const items = ['Pure Flavour', 'Everyday Magic', 'The Joy of Cooking', 'Real Spices, Real Taste']
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="ticker-group">
            {items.map(t => (
              <span key={t}>{t}<b>✳</b></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}