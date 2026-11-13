import { PRODUCTS } from '../data/products'
import { waLink } from '../config'
import React from 'react'

export default function Products() {
  return (
    <section className="section products-section reveal" id="products">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span />
            The Devlisa Collection
          </div>
          <h2>
            Flavour for every
            <br />
            <em>kind of craving.</em>
          </h2>
        </div>
        <p>
          From a gentle golden touch to a bold, warming finish — find the flavour
          that makes your cooking yours.
        </p>
      </div>

      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <article key={p.id} className={`product-card ${p.className}`}>
            <div className="product-top">
              <span className="product-number">
                {p.number} / {p.tag}
              </span>
              <span className="product-icon">{p.icon}</span>
            </div>
            <div className="product-art">
              <div className={`powder powder-${p.powderClass}`} />
              <div className="mini-spice">{p.mini}</div>
            </div>
            <div className="product-info">
              <div className="product-kicker">{p.kicker}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a
                href={waLink(`Hello Devlisa, I am interested in ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire about this <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="product-note">
        Product descriptions are brand presentation copy. Final ingredients, claims
        and pack details should match the actual product and applicable regulations.
      </p>
    </section>
  )
}