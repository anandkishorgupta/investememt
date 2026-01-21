// PartnersSection.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GetHeroSectionData } from "../../api/apis";
// import devShree from "../../assets/logos/devshree.jpeg";
// import himRiver1 from "../../assets/logos/himRiver.png";
// import hulasInfra from "../../assets/logos/hulasInfra.webp";
// import hulasIron from "../../assets/logos/hulasIron.jpg";
// import hydroEmpire from "../../assets/logos/hydroEmpire.jpg";
// import puwa from "../../assets/logos/puwa.webp";
// import sparkHydro from "../../assets/logos/sparkHydro.jpg";
const API_URL = import.meta.env.VITE_API_URL;


// const logos = [himRiver1, devShree, hulasInfra, puwa, sparkHydro, hulasIron, hydroEmpire];

// Duplicate enough to cover overflow + smooth loop

const CARD_WIDTH_PX = 208;
const MARGIN_X_PX = 24;
const CARD_FULL_WIDTH_PX = CARD_WIDTH_PX + 2 * MARGIN_X_PX;

const MarqueeRow = ({ logos = [], reverse = false, duration = 20 }) => {
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple for safety
  return (
    <div className="relative w-full overflow-hidden mb-10">

      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: reverse ? [0, -CARD_FULL_WIDTH_PX * logos.length] : [-CARD_FULL_WIDTH_PX * logos.length, 0] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ willChange: 'transform' }}
      >
        {duplicatedLogos?.map((logo, index) => (
          <div
            key={`${index}-${logo}`}
            className="flex-shrink-0 mx-2 flex items-center bg-white p-2 shadow-md rounded-2xl justify-center opacity-70"
            style={{ width: CARD_WIDTH_PX }}
          >
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const PartnersSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  };

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        const res = await GetHeroSectionData();
        const investData = res?.portfolio?.filter(item => item.invest === true) || [];

        // Extract first image from each portfolio
        const logosFromBackend = investData?.map(
          (item) => getImageUrl(item.images?.[0])
        ) || [];
        setData(logosFromBackend);
      } catch (err) {
        setError(err);
        console.error("Hero API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-500">
        Loading partners...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500">
        Error loading partners
      </div>
    );
  }
  return (
    <div className=" absolute w-full  z-50 lg:-bottom-3 sm:-bottom-30">
      <div className="">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Trusted Partners</h2>
          <p className="text-gray-500 mt-2">Empowering growth through strategic collaboration</p>
        </div> */}

        <MarqueeRow duration={25} logos={data} />
        {/* <MarqueeRow reverse duration={22} />  */}
      </div>
    </div>
  );
};

export default PartnersSection;