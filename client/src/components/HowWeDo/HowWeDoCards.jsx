// import { motion } from "framer-motion";
// import { cardVariants, containerVariants } from "./howWeDo.motion";
// const HowWeDoCards = ({ cards, animate }) => {
//   return (
//     <motion.div
//       initial="hidden"
//       animate={animate ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="space-y-6"
//     >
//       {cards.map((card, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={cardVariants}
//           whileHover="hover"
//           className="bg-white rounded-2xl p-6 border border-[rgba(212,175,55,0.2)] shadow-sm"
//         >
//           <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
//             {card.title}
//           </h3>
//           <p className="text-[#5A5A5A] text-sm leading-relaxed">
//             {card.description}
//           </p>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default HowWeDoCards;



import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./howWeDo.motion";

const HowWeDoCards = ({ cards, animate }) => {
  return (
    <motion.div
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      variants={containerVariants}
      className="space-y-6"
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm"
        >
          <h3 className="text-xl font-bold text-amber-900 mb-2">
            {card.title}
          </h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HowWeDoCards;
