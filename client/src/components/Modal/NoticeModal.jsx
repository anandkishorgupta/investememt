// import { Dialog } from "@headlessui/react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FiX } from "react-icons/fi";
// import { getNotices } from "../../api/notice";
// // const API_URL_UPLOADS = import.meta.env.VITE_API_UPLOADS ;
// const API_URL = import.meta.env.VITE_API_URL ;

// function NoticeModal({ open, onClose }) {
//   const [images, setImages] = useState([]);
//   const [hasImages, setHasImages] = useState(false);

//   useEffect(() => {
//     const fetchLatestNotice = async () => {
//       try {
//         const data = await getNotices();
// console.log("data",data)
//         if (data.length > 0) {
//           const sortedData = data.sort(
//             (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//           );

//           if (sortedData[0].images?.length > 0) {
//             setImages(sortedData[0].images);
//             setHasImages(true);
//           } else {
//             setImages([]);
//             setHasImages(false);
//           }
//         } else {
//           setImages([]);
//           setHasImages(false);
//         }
//       } catch (err) {
//         console.log(err);
//         setHasImages(false);
//       }
//     };

//     if (open) {
//       fetchLatestNotice();
//     }
//   }, [open]);

//   if (!open || !hasImages) return null;

//   return (
//     <Dialog open={open} onClose={onClose} className="relative z-50">
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

//       {/* Modal */}
//       <div className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full">
//           {/* Close Button */}
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

//           {/* Images */}
//           <div className="flex flex-col gap-4 p-6 overflow-y-scroll max-h-[90vh]">
//             {images.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={`${API_URL}${img}`}
//                 alt={`notice-${idx}`}
//                 className="w-full h-auto rounded-lg"
//               />
//             ))}
//           </div>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// }

// export default NoticeModal;

import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL;

function NoticeModal({ open, onClose, images }) {
  if (!open ) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full">
          
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -top-4 -right-4 w-12 h-12 rounded-full 
              bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 
              text-white flex items-center justify-center shadow-lg"
          >
            <FiX size={28} />
          </motion.button>

          <div className="flex flex-col gap-4 p-6 max-h-[90vh] overflow-y-auto">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={`${API_URL}${img}`}
                alt={`notice-${idx}`}
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default NoticeModal;
