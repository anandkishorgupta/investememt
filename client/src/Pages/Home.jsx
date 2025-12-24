import { useEffect, useState } from "react";
import BOD from "../components/BOD/BOD";
import Hero from "../components/Hero/Hero";
import HowWeDo from "../components/HowWeDo/HowWeDo";
import NoticeModal from "../components/Modal/NoticeModal";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import OurServices from "../components/ourServices/OurServices";
import WhyUs from "../components/whyUs/WhyUs";

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
        className={`transition duration-300 ${open ? "blur-md pointer-events-none select-none" : ""
          }`}
      >
      </div>
      <Hero />
      <WhyUs />
      <WhatWeDo />
      <OurServices />
      <HowWeDo />
      <BOD />
    </div>
  );
};

export default Home;
