import React from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services, including consulting, implementation, and ongoing support. Please visit our Services page for more details.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us through our Contact page or by emailing us at info@yourdomain.com.",
  },
  {
    question: "What are your pricing plans?",
    answer: "We offer flexible pricing plans to suit different business needs. Check out our Pricing page for more information.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, we provide full support to our clients. You can contact us anytime for assistance with your service needs.",
  },
];

const Faq = () => {
  return (
    <Layout>
      <Seo 
        title="FAQ" 
        description="Frequently asked questions about our services, pricing, and more."
        url="https://yourdomain.com/faq"
        keywords="faq, questions, help, support"
      />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Frequently Asked Questions
        </Typography>
        <div>
          {faqData.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Faq;