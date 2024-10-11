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
    <section>
      <h2>Services</h2>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </section>
    <footer>
      <p>Contact us: <a href="/contact">Get in touch</a></p>
    </footer>
  </div>
);

export default IndexPage;