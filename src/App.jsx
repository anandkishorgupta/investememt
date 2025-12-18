import React from "react";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetails from "./Pages/PortfolioDetails";
import HeroSection from "./Pages/HeroSection";
const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* this is new design of hero section  */}
            <Route path="/hero" element={<HeroSection />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
