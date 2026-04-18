import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import { useLenis } from "../hooks/useLenis";

const RootsLayouts = () => {
  // ── Anti-Gravity Motion System: global smooth scroll ──────────────────
  useLenis();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootsLayouts;
