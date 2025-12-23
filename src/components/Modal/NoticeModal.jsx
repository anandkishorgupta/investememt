// import { Dialog } from "@headlessui/react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FiX } from "react-icons/fi";
// import { getNotices } from "../../api/notice";



// function NoticeModal({ open, onClose }) {

//   const [images, setImages] = useState([]);
// const [hasImages, setHasImages] = useState(false);

//   useEffect(() => {
//     const fetchLatestNotice = async () => {
//       try {
//         const data = await getNotices();

//         if (data.length > 0) {
//           // Sort descending by createdAt to get the latest
//           const sortedData = data.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );
//           console.log("data", sortedData)
//           // Take the first object (latest) and its images
//           setImages(sortedData[0].images || []);
//         } else {
//           setImages([]);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (open) {
//       fetchLatestNotice();
//     }
//   }, [open]);

//   return (
//     <Dialog open={open} onClose={onClose} className="relative z-50">
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

//       {/* Modal */}
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full">
//           {/* Animated Close Button with Golden Background */}
//           <motion.button
//             onClick={onClose}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="absolute -top-4 -right-4 w-12 h-12 rounded-full 
//                        bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 
//                        text-white flex items-center justify-center shadow-lg border border-yellow-700 cursor-pointer"
//           >
//             <FiX size={28} />
//           </motion.button>
//           {/* Image */}
//           <div className="flex flex-col gap-4 p-6 overflow-y-scroll max-h-[90vh]">
//             {images.length > 0 ? (
//               images.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={`http://localhost:5000${img}`} // prepend your backend URL
//                   alt={`notice-${idx}`}
//                   className="w-full h-auto rounded-lg"
//                 />
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No notices available</p>
//             )}
//           </div>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// }

// export default NoticeModal;



import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { getNotices } from "../../api/notice";
const API_URL_UPLOADS = import.meta.env.VITE_API_UPLOADS ;

function NoticeModal({ open, onClose }) {
  const [images, setImages] = useState([]);
  const [hasImages, setHasImages] = useState(false);

  useEffect(() => {
    const fetchLatestNotice = async () => {
      try {
        const data = await getNotices();

        if (data.length > 0) {
          const sortedData = data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          if (sortedData[0].images?.length > 0) {
            setImages(sortedData[0].images);
            setHasImages(true);
          } else {
            setImages([]);
            setHasImages(false);
          }
        } else {
          setImages([]);
          setHasImages(false);
        }
      } catch (err) {
        console.log(err);
        setHasImages(false);
      }
    };

    if (open) {
      fetchLatestNotice();
    }
  }, [open]);

  if (!open || !hasImages) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -top-4 -right-4 w-12 h-12 rounded-full 
                       bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 
                       text-white flex items-center justify-center shadow-lg border border-yellow-700 cursor-pointer"
          >
            <FiX size={28} />
          </motion.button>

          {/* Images */}
          <div className="flex flex-col gap-4 p-6 overflow-y-scroll max-h-[90vh]">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={`${API_URL_UPLOADS}${img}`}
                alt={`notice-${idx}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default NoticeModal;
