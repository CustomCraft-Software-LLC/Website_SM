import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import { FaBullhorn, FaBriefcase, FaLightbulb, FaPaintBrush, FaTasks } from "react-icons/fa";
import "../styles/services.css";

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
  <ListItem className="service-item">
    <ListItemIcon className="service-icon">
      {icon}
    </ListItemIcon>
    <Box>
      <Typography variant="h6" className="service-title">{title}</Typography>
      <Typography variant="body2" className="service-description">{description}</Typography>
    </Box>
  </ListItem>
);

const Services = () => (
  <section className="services-section">
    <div className="container">
      <Typography variant="h4" className="section-heading">Our Services</Typography>
      <Typography variant="body1" className="section-description">
        We offer a variety of services tailored to meet your business needs and help you succeed.
      </Typography>
      <List className="services-list">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </List>
    </div>
  </section>
);

export default Services;