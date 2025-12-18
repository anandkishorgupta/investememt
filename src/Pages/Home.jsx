import React from "react";
import Hero from "../components/sections/Hero";
import NoticeModal from "../components/Modal/NoticeModal";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  // Runs every time Home page loads or reloads
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div>
      <NoticeModal open={open} onClose={() => setOpen(false)} />
      <div
        className={`transition duration-300 ${
          open ? "blur-md pointer-events-none select-none" : ""
        }`}
      >
        <Hero />
      </div>
    </div>
  );
};

export default Home;
