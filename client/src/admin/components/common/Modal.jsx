// import React from 'react';
// import Button from './Button';

// const Modal = ({ 
//   isOpen, 
//   onClose, 
//   title, 
//   children, 
//   footer,
//   size = 'md'
// }) => {
//   if (!isOpen) return null;

//   const sizeClasses = {
//     sm: 'max-w-md',
//     md: 'max-w-xl',
//     lg: 'max-w-3xl',
//     xl: 'max-w-5xl'
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto fade-in">
//       <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//         <div 
//           className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 overlay" 
//           aria-hidden="true"
//           onClick={onClose}
//         ></div>

//         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

//         <div 
//           className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${sizeClasses[size]} sm:w-full`}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="modal-headline"
//         >
//           <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
//                 {title && (
//                   <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
//                     {title}
//                   </h3>
//                 )}
//                 <div className="mt-2">
//                   {children}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {footer && (
//             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200">
//               {footer}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;




import { X } from 'lucide-react'; // Optional: for close icon (recommended)

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md', // sm, md, lg, xl
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-lg',
    lg: 'sm:max-w-3xl',
    xl: 'sm:max-w-5xl',
    full: 'sm:max-w-full sm:m-4',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        className={`relative w-full ${sizeClasses[size]} mx-4 my-8 max-h-[90vh] animate-in fade-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="relative flex flex-col w-full bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          {(title || onClose) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              {title && (
                <h3 className="text-xl font-semibold text-gray-900">
                  {title}
                </h3>
              )}
              <button
                onClick={onClose}
                className="p-2 ml-auto text-gray-400 transition-colors rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          )}

          {/* Body */}
          <div className="flex-1 px-6 py-5 overflow-y-auto">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;