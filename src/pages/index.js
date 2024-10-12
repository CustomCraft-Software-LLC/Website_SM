import React from "react";
import { Helmet } from "react-helmet";
import "../styles/styles.scss";

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Your Business Name</title>
      <meta name="description" content="A brief description of your small business." />
    </Helmet>
    <header>
      <h1>Welcome to Your Business Name!</h1>
      <p>Your business tagline or introduction goes here.</p>
    </header>

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <section>
      <h2>Our Services</h2>
      <ul>
        <li>
          <strong>Service 1</strong>: A brief description of Service 1.
        </li>
        <li>
          <strong>Service 2</strong>: A brief description of Service 2.
        </li>
        <li>
          <strong>Service 3</strong>: A brief description of Service 3.
        </li>
      </ul>
    </section>

    <footer>
      <p>Contact us: <a href="/contact">Get in touch</a></p>
    </footer>
  </div>
);

export default IndexPage;