import React from "react";
import "../styles/cta.css";

const Cta = () => (
  <section className="cta-section">
    <h2 className="cta-heading">Ready to get started?</h2>
    <p className="cta-description">
      Contact us today to learn more about how we can help you achieve your business goals.
    </p>
    <a href="/contact" className="btn-secondary">Contact Us</a>
  </section>
);

export default Cta;