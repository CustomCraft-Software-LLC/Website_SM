import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const Section = ({ title, children }) => (
  <Box sx={{ marginBottom: 6 }}>
    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const TeamMember = ({ name, position, imageSrc }) => (
  <Card sx={{ maxWidth: 300, margin: "16px auto" }}>
    <CardMedia component="img" height="200" image={imageSrc || "https://via.placeholder.com/150"} alt={name} />
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2" color="text.secondary">{position}</Typography>
    </CardContent>
  </Card>
);

const Testimonial = ({ quote, author }) => (
  <Box sx={{ textAlign: "center", fontStyle: "italic", margin: "16px 0" }}>
    <Typography variant="body1">"{quote}"</Typography>
    <Typography variant="body2" color="text.secondary">- {author}</Typography>
  </Box>
);

const About = () => (
  <Layout>
    <Seo 
      title="About Us" 
      description="Discover the story behind our grocery store, our mission for quality, sustainability, and the team dedicated to bringing fresh food to your table." 
      url="https://yourdomain.com/about" 
      keywords="about us, grocery store, mission, team, values, fresh food"
    />
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 600, margin: "0 auto", mb: 4 }}>
        Welcome to [Your Grocery Store]! Since [Year Established], we’ve been committed to providing our community with fresh, high-quality groceries.
      </Typography>

      <Section title="Our Mission">
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Our mission is to deliver fresh groceries at affordable prices, while supporting local farmers and sustainable practices.
        </Typography>
      </Section>

      <Section title="Our Values">
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {["Quality", "Customer Care", "Community Focus", "Sustainability"].map((value) => (
            <Box key={value} sx={{ width: { xs: '100%', sm: '45%', md: '22%' }, textAlign: "center", m: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {value === "Quality" && "Freshness and quality are our priorities."}
                {value === "Customer Care" && "We strive to exceed our customers' expectations."}
                {value === "Community Focus" && "Supporting our local community is key."}
                {value === "Sustainability" && "We're committed to eco-friendly practices."}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section title="Meet Our Team">
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {[
            { name: "John Doe", position: "Store Manager" },
            { name: "Jane Smith", position: "Head of Produce" }
          ].map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </Box>
      </Section>

      <Section title="What Our Customers Say">
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          {[
            { quote: "I always find the freshest produce here.", author: "Satisfied Customer" },
            { quote: "Their focus on sustainability makes me feel good about where I shop.", author: "Eco-Conscious Shopper" }
          ].map((testimonial) => (
            <Testimonial key={testimonial.author} {...testimonial} />
          ))}
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default About;