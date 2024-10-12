import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css"; 

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;