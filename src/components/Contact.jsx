import { CONFIG, waLink } from '../config'
import React from 'react'

export default function Contact() {
  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-copy">
        <div className="eyebrow light">
          <span />
          Let&apos;s Talk Flavour
        </div>
        <h2>
          Have a question?
          <br />
          <em>We&apos;re all ears.</em>
        </h2>
        <p>
          For product enquiries, distribution discussions or simply to say hello,
          reach out to the Devlisa team.
        </p>
        <div className="contact-details">
          <a href={`tel:${CONFIG.PHONE}`}>
            <span>Phone</span>
            {CONFIG.PHONE}
          </a>
          <a href={`mailto:${CONFIG.EMAIL}`}>
            <span>Email</span>
            {CONFIG.EMAIL}
          </a>
          <a
            href={`https://instagram.com/${CONFIG.INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>@{CONFIG.INSTAGRAM} ↗
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-card-top">
          <span>Devlisa</span>
          <span>✳</span>
        </div>
        <h3>
          Let&apos;s bring
          <br />
          more flavour
          <br />
          to the table.
        </h3>
        <p>Send us a message on WhatsApp. We&apos;d love to hear from you.</p>
        <a
          className="btn btn-primary btn-wide"
          href={waLink('Hello Devlisa, I would like to enquire about your spices.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp <span>↗</span>
        </a>
        <small>Usually the quickest way to reach us</small>
      </div>
    </section>
  )
}