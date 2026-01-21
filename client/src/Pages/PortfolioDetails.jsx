// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FiArrowLeft } from "react-icons/fi";
// import { Link, useParams } from "react-router-dom";
// import { GetHeroSectionDataById } from "../api/apis";
// const API_URL = import.meta.env.VITE_API_URL;

// const PortfolioDetails = () => {
//   const { id } = useParams();
//   console.log("id", id)


//   // const company = portfolioData.find((p) => p.id === Number(id));

//   // if (!company) {
//   //   return (
//   //     <div className="min-h-screen flex items-center justify-center text-neutral-500">
//   //       Company not found
//   //     </div>
//   //   );
//   // }

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getImageUrl = (path) => {
//     if (!path) return "";
//     if (path.startsWith("http")) return path;
//     return `${API_URL}${path}`;
//   };

//   useEffect(() => {
//     const fetchHeroDataById = async (id) => {
//       try {
//         setLoading(true);
//         const res = await GetHeroSectionDataById(id);
//         console.log("response", res)
//         setData(res);
//       } catch (err) {
//         setError(err);
//         console.error("Hero API Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeroDataById(id);
//     return
//   }, [id]);
//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-neutral-500">
//         Loading...
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         Error loading company data.
//       </div>
//     );
//   }

//   // No data found
//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-neutral-500">
//         Company not found
//       </div>
//     );
//   }
//   console.log('data', data)


//   return (
//     <div className="bg-neutral-50 min-h-screen text-neutral-900 ">
//       {/* Back Button */}

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="absolute top-6 left-6 z-50"
//       >
//         <Link
//           to="/portfolio"
//           className="mt-15 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-sm hover:text-amber-600 transition"
//         >
//           <FiArrowLeft /> Back
//         </Link>
//       </motion.div>

//       {/* Main Section */}
//       <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image on left */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="rounded-3xl overflow-hidden shadow-lg"
//         >
//           <img
//             // src={company.image}
//             src={getImageUrl(data?.images?.[0])}
//             alt={data?.title}
//             className="w-full h-full object-cover rounded-3xl"
//           />
//         </motion.div>

//         {/* Content on right */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-6"
//         >
//           {/* <motion.span
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="inline-block mb-2 px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium"
//           >
//             {company.category}
//           </motion.span> */}

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-3xl md:text-5xl font-semibold"
//           >
//             {data?.title}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-neutral-600 leading-relaxed"
//           >
//             {data?.description}
//           </motion.p>

//           {/* Tags */}
//           {/* <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="flex flex-wrap gap-3"
//           >
//             {company.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="px-4 py-1.5 rounded-full bg-white border border-amber-200 text-amber-700 text-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </motion.div> */}

//           {/* Key Metrics */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-4"
//           >
//             {/* <div className="flex items-center gap-3 text-neutral-700">
//               <FiMapPin className="text-amber-600" /> {data?.location}
//             </div> */}

//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioDetails;


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FiArrowLeft, FiFileText } from "react-icons/fi";
// import { Link, useParams } from "react-router-dom";
// import { GetHeroSectionDataById } from "../api/apis";

// const API_URL = import.meta.env.VITE_API_URL;

// const PortfolioDetails = () => {
//   const { id } = useParams();

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getImageUrl = (path) => {
//     if (!path) return "";
//     if (path.startsWith("http")) return path;
//     return `${API_URL}${path}`;
//   };

//   const getPdfUrl = (path) => {
//     if (!path) return "";
//     if (path.startsWith("http")) return path;
//     return `${API_URL}${path}`;
//   };

//   useEffect(() => {
//     const fetchHeroDataById = async (id) => {
//       try {
//         setLoading(true);
//         const res = await GetHeroSectionDataById(id);
//         setData(res);
//       } catch (err) {
//         setError(err);
//         console.error("Hero API Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeroDataById(id);
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-neutral-500">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         Error loading company data.
//       </div>
//     );
//   }

//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-neutral-500">
//         Company not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-neutral-50 min-h-screen text-neutral-900 ">
//       {/* Back Button */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="absolute top-6 left-6 z-50"
//       >
//         <Link
//           to="/portfolio"
//           className="mt-15 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-sm hover:text-amber-600 transition"
//         >
//           <FiArrowLeft /> Back
//         </Link>
//       </motion.div>

//       {/* Main Section */}
//       <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image on left */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="rounded-3xl overflow-hidden shadow-lg"
//         >
//           <img
//             src={getImageUrl(data?.images?.[0])}
//             alt={data?.title}
//             className="w-full h-full object-cover rounded-3xl"
//           />
//         </motion.div>

//         {/* Content on right */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-6"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="text-3xl md:text-5xl font-semibold"
//           >
//             {data?.title}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-neutral-600 leading-relaxed"
//           >
//             {data?.description}
//           </motion.p>

//           {/* PDF Section */}
//           {data?.Pdf?.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="space-y-3"
//             >
//               <h3 className="text-lg font-medium text-neutral-800">PDFs:</h3>
//               <div className="flex flex-wrap gap-4">
//                 {data.Pdf.map((pdf, index) => {
//                   const pdfUrl = getPdfUrl(pdf);
//                   return (
//                     <div key={index} className="flex gap-2 items-center">
//                       <FiFileText className="text-amber-600 text-xl" />
//                       <a
//                         href={pdfUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-sm text-amber-700 hover:underline"
//                       >
//                         View
//                       </a>
//                       <a
//                         href={pdfUrl}
//                         download
//                         className="text-sm text-neutral-700 hover:text-neutral-900 border border-neutral-300 px-2 py-1 rounded-md ml-2"
//                       >
//                         Download
//                       </a>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           )}
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default PortfolioDetails;



import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiFileText } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { GetHeroSectionDataById } from "../api/apis";

const API_URL = import.meta.env.VITE_API_URL;

const PortfolioDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  };

  const getPdfUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  };

  // Function to force download cross-origin PDFs
  const handleDownloadPdf = async (pdfPath, filename) => {
    const url = getPdfUrl(pdfPath);
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename || "file.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl); // Clean up
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  useEffect(() => {
    const fetchHeroDataById = async (id) => {
      try {
        setLoading(true);
        const res = await GetHeroSectionDataById(id);
        setData(res);
      } catch (err) {
        setError(err);
        console.error("Hero API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroDataById(id);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading company data.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-500">
        Company not found
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-900 ">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 z-50"
      >
        <Link
          to="/portfolio"
          className="mt-15 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-sm hover:text-amber-600 transition"
        >
          <FiArrowLeft /> Back
        </Link>
      </motion.div>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image on left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src={getImageUrl(data?.images?.[0])}
            alt={data?.title}
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        {/* Content on right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            {data?.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 leading-relaxed"
          >
            {data?.description}
          </motion.p>

          {/* PDF Section */}
          {data?.Pdf?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-medium text-neutral-800">PDFs:</h3>
              <div className="flex flex-wrap gap-4">
                {data.Pdf.map((pdf, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <FiFileText className="text-amber-600 text-xl" />
                      {/* View PDF */}
                      <a
                        href={getPdfUrl(pdf)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-amber-700 hover:underline"
                      >
                        View
                      </a>
                      {/* Download PDF using JS */}
                      <button
                        onClick={() =>
                          handleDownloadPdf(pdf, `Portfolio-${index + 1}.pdf`)
                        }
                        className=" cursor-pointer text-sm text-neutral-700 hover:text-neutral-900 border border-neutral-300 px-2 py-1 rounded-md ml-2"
                      >
                        Download
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioDetails;
