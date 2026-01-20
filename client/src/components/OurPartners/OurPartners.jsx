// PartnersSection.js
import { motion } from "framer-motion";
import devShree from "../../assets/logos/devshree.jpeg";
import himRiver1 from "../../assets/logos/himRiver.png";
import hulasInfra from "../../assets/logos/hulasInfra.webp";
import hulasIron from "../../assets/logos/hulasIron.jpg";
import hydroEmpire from "../../assets/logos/hydroEmpire.jpg";
import puwa from "../../assets/logos/puwa.webp";
import sparkHydro from "../../assets/logos/sparkHydro.jpg";

const logos = [himRiver1, devShree, hulasInfra, puwa, sparkHydro, hulasIron, hydroEmpire];

// Duplicate enough to cover overflow + smooth loop
const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple for safety

const CARD_WIDTH_PX = 208;
const MARGIN_X_PX = 24;
const CARD_FULL_WIDTH_PX = CARD_WIDTH_PX + 2 * MARGIN_X_PX;

const MarqueeRow = ({ reverse = false, duration = 20 }) => {
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
        {duplicatedLogos.map((logo, index) => (
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
  return (
    <div className=" absolute w-full  z-50 lg:-bottom-3 sm:-bottom-30">
      <div className="">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Trusted Partners</h2>
          <p className="text-gray-500 mt-2">Empowering growth through strategic collaboration</p>
        </div> */}

        <MarqueeRow duration={25}/>
        {/* <MarqueeRow reverse duration={22} />  */}
      </div>
    </div>
  );
};

export default PartnersSection;