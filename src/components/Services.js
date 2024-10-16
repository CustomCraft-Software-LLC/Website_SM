import React from "react";
import "../styles/services.css";
import { FaCode, FaBullhorn, FaLaptop } from "react-icons/fa"; // Optional: Example icons

const servicesData = [
  {
    title: "Custom Software Development",
    description: "We provide end-to-end software development services, creating custom solutions tailored to your business needs, from web to mobile applications.",
    icon: <FaCode />,
  },
  {
    title: "Digital Marketing Strategy",
    description: "Boost your online presence with our data-driven digital marketing strategies. We specialize in SEO, social media, and paid advertising to help you reach your target audience.",
    icon: <FaBullhorn />,
  },
  {
    title: "IT Consulting & Support",
    description: "Our IT consulting and support services ensure that your business operates smoothly with up-to-date technology solutions, including cloud computing, cybersecurity, and infrastructure management.",
    icon: <FaLaptop />,
  },
];

const ServiceItem = ({ title, description, icon }) => (
  <li className="service-item">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </li>
);

const Services = () => (
  <section className="services-section">
    <div className="container">
      <h2 className="section-heading">Our Services</h2>
      <p className="section-description">Explore the range of services we offer to help your business succeed.</p>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={index} 
            title={service.title} 
            description={service.description} 
            icon={service.icon} // Adding icons here
          />
        ))}
      </ul>
    </div>
  </section>
);

export default Services;