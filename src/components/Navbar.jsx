import React from 'react';
import './Navbar.css';
import img from '../assets/1.png';
function Navbar() {
  return (
    <>
      <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <span className="caption">CAPTION</span>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Bibendum amet at molestie mattis.
          </h1>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit.
            Condimentum sit nunc in eros scelerisque sed.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Primary Action</button>
            <button className="btn secondary">Secondary Action</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={img} alt="Basketball player" />
        </div>
      </div>
    </section>




    <section className="hero1">
      
      <div className="hero-container">
        <div className="hero-image1">
          <img src={img} alt="Basketball player" />
        </div>
        <div className="hero-text1">
          <span className="caption">CAPTION</span>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Bibendum amet at molestie mattis.
          </h1>
          <p>
            Rhoncus morbi et augue nec, in id ullamcorper at sit.
            Condimentum sit nunc in eros scelerisque sed.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Primary Action</button>
            <button className="btn secondary">Secondary Action</button>
          </div>
        </div>

        
      </div>
    </section>











    <div className="contact-form-container">
      <h2 className="form-title">CONTACT ME</h2>
      <p className="form-subtitle">
        Bibendum amet at molestie mattis.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Label Name</label>
          <input
            type="text"
            id="name"
            placeholder="Placeholder"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Label Name</label>
          <input
            type="email"
            id="email"
            placeholder="Placeholder"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">Label Name</label>
          <select id="subject" className="form-select">
            <option value="">Placeholder</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Label Name</label>
          <textarea
            id="message"
            placeholder="Placeholder"
            rows={5}
            className="form-textarea"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>

    </>
  );
}
export default Navbar;