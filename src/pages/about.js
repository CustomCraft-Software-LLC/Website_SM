import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = ({ title, children }) => (
  <Box sx={{ marginBottom: 6 }}>
    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
      {title}
    </Typography>
    <Box>{children}</Box>
  </Box>
);

const TeamMember = ({ name, position, imageSrc }) => (
  <Card sx={{ maxWidth: 300, margin: "auto" }}>
    <CardMedia component="img" height="200" image={imageSrc || "https://via.placeholder.com/150"} alt={name} />
    <CardContent>
      <Typography variant="h6" component="p">{name}</Typography>
      <Typography variant="body2" color="text.secondary">{position}</Typography>
    </CardContent>
  </Card>
);

const Testimonial = ({ quote, author }) => (
  <Box sx={{ textAlign: "center", fontStyle: "italic", marginBottom: 2 }}>
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
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 600, margin: "0 auto", mb: 4 }}>
        Welcome to [Your Grocery Store]! Since our founding in [Year Established], we’ve remained committed to providing our community with fresh, high-quality groceries and a warm, friendly shopping experience.
      </Typography>

      <Section title="Our Mission">
        <Typography variant="body1" sx={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          Our mission is to deliver fresh, high-quality groceries at affordable prices, while supporting local farmers and sustainable practices. We're dedicated to making grocery shopping easy and enjoyable.
        </Typography>
      </Section>

      <Section title="Our Values">
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {["Quality", "Customer Care", "Community Focus", "Sustainability"].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: "center" }}>{value}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                {value === "Quality" && "We prioritize freshness and quality in everything we offer."}
                {value === "Customer Care" && "Our customers come first, and we strive to exceed their expectations."}
                {value === "Community Focus" && "We support our local community through partnerships and local sourcing."}
                {value === "Sustainability" && "We are committed to reducing waste and promoting eco-friendly practices."}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title="Meet Our Team">
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <TeamMember name="John Doe" position="Store Manager" imageSrc="" />
          </Grid>
          <Grid item>
            <TeamMember name="Jane Smith" position="Head of Produce" imageSrc="" />
          </Grid>
        </Grid>
      </Section>

      <Section title="Our History">
        <Typography variant="body1" sx={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          Founded in [Year], [Your Grocery Store] started as a small, family-run shop with a commitment to quality and community. Over the years, we’ve grown, but our dedication to offering fresh groceries and friendly service has stayed the same.
        </Typography>
      </Section>

      <Section title="What Our Customers Say">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Testimonial quote="I always find the freshest produce here, and the staff is incredibly helpful and friendly." author="Satisfied Customer" />
          <Testimonial quote="Their focus on sustainability and local sourcing makes me feel good about where I shop." author="Eco-Conscious Shopper" />
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default About;