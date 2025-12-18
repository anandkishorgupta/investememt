import { Dialog } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function NoticeModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full">
          {/* Animated Close Button with Golden Background */}
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

          {/* Image */}
          <img
            src="/notice.webp"
            alt="Notice"
            className="w-full h-auto rounded-lg"
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default NoticeModal;
