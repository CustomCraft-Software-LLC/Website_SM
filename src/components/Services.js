import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import { FaShoppingCart, FaTruck, FaAppleAlt, FaSeedling, FaGift } from "react-icons/fa";
import "../styles/services.css";

const servicesData = [
  {
    title: "Fresh Produce Selection",
    description: "We offer a wide range of fresh fruits and vegetables sourced from local farms and trusted suppliers.",
    icon: FaAppleAlt,
  },
  {
    title: "Home Delivery",
    description: "Convenient grocery delivery services right to your doorstep. Enjoy fresh groceries without leaving home.",
    icon: FaTruck,
  },
  {
    title: "Organic & Specialty Foods",
    description: "A variety of organic and specialty food products to meet diverse dietary needs and preferences.",
    icon: FaSeedling,
  },
  {
    title: "Weekly Discounts & Deals",
    description: "Take advantage of weekly promotions and discounts on popular items throughout the store.",
    icon: FaShoppingCart,
  },
  {
    title: "Gift Baskets",
    description: "Custom gift baskets for any occasion, featuring a selection of our finest products.",
    icon: FaGift,
  },
];

const ServiceItem = ({ title, description, IconComponent }) => (
  <ListItem className="services__item">
    <ListItemIcon className="services__icon">
      <IconComponent size="2em" color="#3f51b5" />
    </ListItemIcon>
    <Box>
      <Typography variant="h6" className="services__title">{title}</Typography>
      <Typography variant="body2" className="services__description">{description}</Typography>
    </Box>
  </ListItem>
);

const Services = () => (
  <section className="services">
    <div className="container">
      <Typography variant="h4" className="services__heading">Our Services</Typography>
      <Typography variant="body1" className="services__subheading">
        Discover our range of services designed to make your grocery shopping experience more enjoyable and convenient.
      </Typography>
      <List className="services__list">
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={index} 
            title={service.title} 
            description={service.description} 
            IconComponent={service.icon} 
          />
        ))}
      </List>
    </div>
  </section>
);

export default Services;