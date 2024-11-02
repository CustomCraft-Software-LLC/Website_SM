import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import "../styles/about.css";

const Section = ({ title, children }) => (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const TeamMember = ({ name, position, imageSrc }) => (
  <div className="team-member">
    <img src={imageSrc} alt={name} className="team-photo" />
    <p>{name} - {position}</p>
  </div>
);

const About = () => (
  <Layout>
    <Seo 
      title="About Us - Your Grocery Store" 
      description="Learn about our grocery store's mission, values, and the dedicated team that brings fresh and quality products to you." 
      url="https://yourdomain.com/about" 
      keywords="about us, grocery store, mission, team, values, fresh produce"
    />

    <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Us</h1>

        <p className="about-overview">
          Welcome to [Your Grocery Store]! Since [Year Established], we've been dedicated to providing 
          our community with fresh, high-quality produce, dairy, snacks, and more. Our journey started with a simple 
          goal: to bring the best selection of groceries to your table. Learn more about our mission, values, and 
          meet the team that works hard to deliver excellence every day.
        </p>

        <Section title="Our Mission">
          <p className="mission-text">
            Our mission is to offer the freshest and most affordable groceries while providing outstanding service 
            to our community. We believe in sustainability, quality, and supporting local farmers and suppliers. 
            Through our commitment to quality, we aim to make every meal a fresh and enjoyable experience for you and your family.
          </p>
        </Section>

        <Section title="Our Values">
          <ul className="values-list">
            <li><strong>Quality:</strong> We are committed to offering fresh and high-quality products every day.</li>
            <li><strong>Customer Focus:</strong> Your satisfaction is our top priority, and we strive to meet your needs at every step.</li>
            <li><strong>Community Support:</strong> We believe in giving back to the community that supports us.</li>
            <li><strong>Environmental Responsibility:</strong> We aim to reduce waste and promote eco-friendly practices.</li>
          </ul>
        </Section>

        <Section title="Meet Our Team">
          <p className="team-text">
            Our team is dedicated to serving you with a smile and ensuring you find everything you need at our store. 
            Meet some of our team members who bring passion and commitment to their roles every day.
          </p>

          <div className="team-gallery">
            <TeamMember name="John Doe" position="Store Manager" imageSrc="../images/john_doe.jpg" />
            <TeamMember name="Jane Smith" position="Head of Produce" imageSrc="../images/jane_smith.jpg" />
            {/* Add more team members as needed */}
          </div>
        </Section>

        <Section title="Our History">
          <p className="history-text">
            Founded in [Year], [Your Grocery Store] began with a small storefront and a big vision: to provide our 
            neighborhood with high-quality, fresh groceries. Over the years, we've grown and expanded, thanks to the 
            trust and support of our loyal customers. Today, we're proud to be a staple in our community, known for our 
            friendly service and fresh products.
          </p>
        </Section>

        <Section title="What Our Customers Say">
          <blockquote className="testimonial">
            "Shopping at [Your Grocery Store] is always a pleasure. The produce is always fresh, and the staff goes 
            above and beyond to help you find what you need."
            <cite>- Satisfied Customer</cite>
          </blockquote>
          {/* Add more testimonials */}
        </Section>
      </div>
    </section>
  </Layout>
);

export default About;