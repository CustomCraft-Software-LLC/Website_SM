import React from "react";
import "../styles/services.css";
import { FaBullhorn, FaBriefcase, FaLightbulb, FaPaintBrush, FaTasks } from "react-icons/fa";

const servicesData = [
  {
    title: "Consulting Services",
    description: "We provide expert guidance and insights to help businesses make informed decisions and achieve their strategic goals.",
    icon: <FaLightbulb />,
  },
  {
    title: "Marketing Solutions",
    description: "Our marketing services help businesses enhance their brand presence, attract customers, and grow through customized strategies.",
    icon: <FaBullhorn />,
  },
  {
    title: "Business Support & Operations",
    description: "We offer comprehensive support and operational services to streamline your business processes and improve efficiency.",
    icon: <FaBriefcase />,
  },
  {
    title: "Creative Design",
    description: "Our design services bring your brand to life with unique visuals, from logos to promotional materials, tailored to your needs.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Project Management",
    description: "We help manage projects from start to finish, ensuring they are completed on time, within budget, and to your satisfaction.",
    icon: <FaTasks />,
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
      <p className="section-description">We offer a variety of services tailored to meet your business needs and help you succeed.</p>
      <ul className="services-list">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </ul>
    </div>
  </section>
);

export default Services;