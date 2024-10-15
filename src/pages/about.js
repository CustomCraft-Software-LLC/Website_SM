import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import "../styles/about.css";

const About = () => (
  <Layout>
    <SEO 
      title="About Us - Your Business Name" 
      description="Discover the story of Your Business Name, our mission, values, and meet the team that drives our success." 
      url="https://yourdomain.com/about" 
      key="about us, company history, mission, team, values, your business name"
    />

    <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Us</h1>

        {/* Company Overview */}
        <p className="about-overview">
          Welcome to [Your Business Name]! We have been delivering excellence since [Year Established]. 
          Our passion for [Industry or Service] drives us to constantly innovate and provide the best 
          solutions to our customers. Discover our journey, our values, and the team behind our success.
        </p>

        {/* Mission Statement */}
        <section className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            Our mission is to [insert mission statement]. We believe in [highlight core value or philosophy]. 
            Through our commitment to [key product or service offering], we aim to create lasting value 
            for our customers and the communities we serve.
          </p>
        </section>

        {/* Core Values */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <ul className="values-list">
            <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.</li>
            <li><strong>Customer Commitment:</strong> We develop relationships that make a positive difference in our customers’ lives.</li>
            <li><strong>Innovation:</strong> We continuously improve and embrace new ideas to drive progress.</li>
            <li><strong>Collaboration:</strong> We work together to meet the needs of our customers and to help the company win.</li>
          </ul>
        </section>

        {/* Team Introduction */}
        <section className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-text">
            Our team is the backbone of [Your Business Name]. Each of our talented members brings unique skills 
            and expertise that enable us to deliver outstanding results. From leadership to customer service, 
            we're all committed to excellence.
          </p>

          {/* Optional: Team Images */}
          <div className="team-gallery">
            <div className="team-member">
              <img src="path-to-team-member1.jpg" alt="Team Member 1" className="team-photo" />
              <p>John Doe - CEO</p>
            </div>
            <div className="team-member">
              <img src="path-to-team-member2.jpg" alt="Team Member 2" className="team-photo" />
              <p>Jane Smith - CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        {/* Optional: Company History */}
        <section className="history-section">
          <h2 className="section-title">Our History</h2>
          <p className="history-text">
            Founded in [Year], [Your Business Name] began with a simple vision: [Insert vision or early history]. 
            Since then, we have grown to become a leader in [industry] and have expanded our reach to [location or number of clients].
          </p>
        </section>

        {/* Optional: Testimonials */}
        <section className="testimonials-section">
          <h2 className="section-title">What Our Clients Say</h2>
          <blockquote className="testimonial">
            "The team at [Your Business Name] has exceeded our expectations. Their dedication and innovation 
            have helped our business grow tremendously."
            <cite>- Happy Client</cite>
          </blockquote>
          {/* Add more testimonials */}
        </section>
      </div>
    </section>
  </Layout>
);

export default About;