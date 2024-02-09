import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* FIXME:
          - fix footer
      */}
      <Footer />
    </>
  );
};

export default Layout;