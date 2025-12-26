// import { useEffect, useState } from "react";
// import BOD from "../components/BOD/BOD";
// import Hero from "../components/Hero/Hero";
// import HowWeDo from "../components/HowWeDo/HowWeDo";
// import NoticeModal from "../components/Modal/NoticeModal";
// import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
// import OurServices from "../components/ourServices/OurServices";
// import WhyUs from "../components/whyUs/WhyUs";

// const Home = () => {
//   const [open, setOpen] = useState(false);

//   // Runs every time Home page loads or reloads
//   useEffect(() => {
//     setOpen(true);
//   }, []);
//   return (
//     <div>
//       <NoticeModal open={open} onClose={() => setOpen(false)} />
//       <div
//         className={`transition duration-300 ${open ? "blur-md pointer-events-none select-none" : ""
//           }`}
//       >
//       </div>
//       <Hero />
//       <WhyUs />
//       <WhatWeDo />
//       <OurServices />
//       <HowWeDo />
//       <BOD />
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import { getNotices } from "../api/notice";
import BOD from "../components/BOD/BOD";
import Hero from "../components/Hero/Hero";
import HowWeDo from "../components/HowWeDo/HowWeDo";
import NoticeModal from "../components/Modal/NoticeModal";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import OurServices from "../components/ourServices/OurServices";
import WhyUs from "../components/whyUs/WhyUs";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const data = await getNotices();

        if (data?.length > 0) {
          const latest = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )[0];

          if (latest?.images?.length > 0) {
            setImages(latest.images);
            setOpen(true); // ✅ open only after images exist
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotice();
  }, []);

  return (
    <div>
      <NoticeModal
        open={open}
        images={images}
        onClose={() => setOpen(false)}
      />

      <div
        className={`transition duration-300 ${
          open ? "blur-md pointer-events-none select-none" : ""
        }`}
      >
        <Hero />
        <WhyUs />
        <WhatWeDo />
        <OurServices />
        <HowWeDo />
        <BOD />
      </div>
    </div>
  );
};

export default Home;
