import React from 'react';
import './contactus.css';

function ContactUs() {
  return (
    <div className="contact-section">
      <h2>Got Any Questions?</h2>
      <div className="form-container">
        <form
          id="contact-form"
          title="contact-form"
          action="https://formspree.io/f/xldjzkzb"
          method="POST"
        >
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />

          <button id="contact-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;