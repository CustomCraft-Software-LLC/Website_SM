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
    <img src={imageSrc} alt={`${name}`} className="team-photo" />
    <p>{name} - {position}</p>
  </div>
);

const About = () => (
  <Layout>
    <Seo 
      title="About Us" 
      description="Discover the story behind our grocery store, our mission for quality, sustainability, and the team dedicated to bringing fresh food to your table." 
      url="https://yourdomain.com/about" 
      keywords="about us, grocery store, mission, team, values, fresh food"
    />

    <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Us</h1>

        <p className="about-overview">
          Welcome to [Your Grocery Store]! Since our founding in [Year Established], we’ve remained committed to 
          providing our community with fresh, high-quality groceries and a warm, friendly shopping experience. 
          From produce to pantry essentials, we aim to bring the best to your table.
        </p>

        <Section title="Our Mission">
          <p className="mission-text">
            Our mission is to deliver fresh, high-quality groceries at affordable prices, while supporting local 
            farmers and sustainable practices. We're dedicated to providing every customer with quality products 
            and exceptional service to make grocery shopping easy and enjoyable.
          </p>
        </Section>

        <Section title="Our Values">
          <ul className="values-list">
            <li><strong>Quality:</strong> We prioritize freshness and quality in everything we offer.</li>
            <li><strong>Customer Care:</strong> Our customers come first, and we strive to exceed their expectations.</li>
            <li><strong>Community Focus:</strong> We support our local community through partnerships and local sourcing.</li>
            <li><strong>Sustainability:</strong> We are committed to reducing waste and promoting eco-friendly practices.</li>
          </ul>
        </Section>

        <Section title="Meet Our Team">
          <p className="team-text">
            Our team is the heart of our store. They work tirelessly to ensure you have a great shopping experience, 
            whether you’re looking for advice on products or need help with your groceries.
          </p>

          <div className="team-gallery">
            <TeamMember name="John Doe" position="Store Manager" imageSrc="../images/john_doe.jpg" />
            <TeamMember name="Jane Smith" position="Head of Produce" imageSrc="../images/jane_smith.jpg" />
            {/* Add more team members as needed */}
          </div>
        </Section>

        <Section title="Our History">
          <p className="history-text">
            Founded in [Year], [Your Grocery Store] started as a small, family-run shop with a commitment to quality and 
            community. Over the years, we’ve grown, but our dedication to offering fresh groceries and friendly service 
            has stayed the same.
          </p>
        </Section>

        <Section title="What Our Customers Say">
          <blockquote className="testimonial">
            "I always find the freshest produce here, and the staff is incredibly helpful and friendly."
            <cite>- Satisfied Customer</cite>
          </blockquote>
          {/* Add more testimonials */}
        </Section>
      </div>
    </section>
  </Layout>
);

export default About;