import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/faq.css";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <SEO 
        title="FAQ" 
        description="Frequently asked questions about our services, pricing, and more."
        url="https://yourdomain.com/faq"
        keywords="faq, questions, help, support"
      />
      <section className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 onClick={() => toggleFAQ(index)} className="faq-question">
                {faq.question}
                <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
              </h3>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Faq;