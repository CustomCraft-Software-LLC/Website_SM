import React from "react";
import "../styles/services.css";

const Services = () => (
  <section className="services-section">
    <h2 className="services-heading">Our Services</h2>
    <ul className="services-list">
      <li className="services-item">
        <strong className="services-strong">Service 1</strong>: A brief description of Service 1.
      </li>
      <li className="services-item">
        <strong className="services-strong">Service 2</strong>: A brief description of Service 2.
      </li>
      <li className="services-item">
        <strong className="services-strong">Service 3</strong>: A brief description of Service 3.
      </li>
    </ul>
  </section>
);

export default Services;