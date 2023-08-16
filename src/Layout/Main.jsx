// src/Main.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooterRoutes = ["/dashboard"];

  const shouldRenderNavbarAndFooter = !hideNavbarAndFooterRoutes.includes(
    location.pathname
  );

  return (
    <div>
      {shouldRenderNavbarAndFooter && <Navbar />}
      <Outlet />
      {shouldRenderNavbarAndFooter && <Footer />}
    </div>
  );
};

export default Main;
