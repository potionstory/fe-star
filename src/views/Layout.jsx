import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <section className="container">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;