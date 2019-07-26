import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;