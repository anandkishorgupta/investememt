// import { LazyMotion, domAnimation, motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { HOW_WE_DO_CARDS, HOW_WE_DO_FEATURES } from "../../Constant/howWeDo.data";
// import HowWeDoCards from "./HowWeDoCards";
// import HowWeDoFeatures from "./HowWeDoFeatures";

// const HowWeDo = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { margin: "-100px" });
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setAnimate(isInView);
//   }, [isInView]);

//   return (
//     <LazyMotion features={domAnimation}>
//       <section
//         ref={sectionRef}
//         className="py-24 px-6 md:px-12 lg:px-24  relative overflow-hidden"
//       >
//         <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
//         {/* Gold ambient glows */}
//         <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10" />
//         <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10" />

//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
//           {/* Left */}
//           <div className="w-full lg:w-1/2 space-y-8">
//             <motion.h2
//               initial={{ y: 40, opacity: 0 }}
//               animate={animate ? { y: 0, opacity: 1 } : {}}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="text-4xl md:text-5xl font-bold text-amber-900 leading-tight"
//             >
//               How We Do?
//             </motion.h2>

//             <motion.p
//               initial={{ y: 30, opacity: 0 }}
//               animate={animate ? { y: 0, opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.15 }}
//               className="text-amber-800 text-lg max-w-xl leading-relaxed"
//             >
//               We specialize in creating personalized investment plans aligned
//               with your financial goals and risk tolerance.
//             </motion.p>

//             <HowWeDoFeatures
//               features={HOW_WE_DO_FEATURES}
//               animate={animate}
//             />
//           </div>

//           {/* Right */}
//           <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
//             <HowWeDoCards cards={HOW_WE_DO_CARDS} animate={animate} />
//           </div>
//         </div>
//       </section>
//     </LazyMotion>
//   );
// };

// export default HowWeDo;


import { LazyMotion, domAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HOW_WE_DO_CARDS, HOW_WE_DO_FEATURES } from "../../Constant/howWeDo.data";
import HowWeDoCards from "./HowWeDoCards";
import HowWeDoFeatures from "./HowWeDoFeatures";

const HowWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(isInView);
  }, [isInView]);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={sectionRef}
        className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden "
      >
        {/* background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

        {/* Ambient gold glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={animate ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-amber-900 leading-tight"
            >
              How We Do?
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={animate ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-amber-800 text-lg max-w-xl leading-relaxed"
            >
              We specialize in creating personalized investment plans aligned
              with your financial goals and risk tolerance.
            </motion.p>

            <HowWeDoFeatures features={HOW_WE_DO_FEATURES} animate={animate} />
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <HowWeDoCards cards={HOW_WE_DO_CARDS} animate={animate} />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default HowWeDo;
