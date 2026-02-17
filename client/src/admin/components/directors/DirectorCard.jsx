// import React from "react";
// import { MoreVertical } from "lucide-react";
//  
//  
//  
// export default function DirectorCard({ director, onClick }) {
//   const { name, title, image } = director || {};
// const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

//  
//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={(e) => e.key === "Enter" && onClick?.()}
//       className="
//         bg-white rounded-xl shadow-md overflow-hidden
//         hover:shadow-xl transition-shadow
//         cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500
//       "
//     >
//       {/* Image */}
//       <div className="relative h-64 bg-gradient-to-b from-gray-100 to-white flex items-center justify-center p-4">
//         <img
//           src={`${API_BASE}${image}`}
//           alt={name}
//           className="h-52 w-52 object-cover "
//         />
//       </div>
//  
//       {/* Content */}
//       <div className="p-6 text-center">
//         <h3 className="text-xl font-semibold text-gray-900 truncate">
//           {name || "Unnamed Director"}
//         </h3>
//  
//         <p className="mt-1 text-indigo-600 font-medium truncate">
//           {title || "—"}
//         </p>
//  
//         <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1">
//           <span>View profile</span>
//           <MoreVertical size={16} />
//         </div>
//       </div>
//     </div>
//   );
// }

import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export default function DirectorCard({
  director,
  onClick,
  onEdit,
  onDelete,
}) {
  const { _id, name, title, image } = director || {};
  const [openMenu, setOpenMenu] = useState(false);

  const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      className="
        relative bg-white rounded-xl shadow-md overflow-hidden
        hover:shadow-xl transition-shadow
        cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
    >
      {/* Menu Button */}
      <div
        className="absolute top-3 right-3 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <MoreVertical size={18} />
        </button>

        {/* Dropdown */}
        {openMenu && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
            <button
              onClick={() => {

                onEdit?.(director);
                setOpenMenu(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Pencil size={14} />
              Edit
            </button>

            {/* <button
              onClick={() => {
               
                onDelete?.(_id);
                setOpenMenu(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <Trash2 size={14} />
              Delete
            </button> */}


            <button
              onClick={() => {
                const confirmed = window.confirm("Are you sure you want to delete this item?");
                if (confirmed) {
                  onDelete?.(_id);
                }
                setOpenMenu(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative h-64 bg-gradient-to-b from-gray-100 to-white flex items-center justify-center p-4">
        <img
          src={director.image}
          alt={director.name}
          className="h-52 w-52 object-cover rounded-full"
        // onError={(e) => (e.currentTarget.src = "/images/no-image.png")}
        />
      </div>

      

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 truncate">
          {name || "Unnamed Director"}
        </h3>

        <p className="mt-1 text-indigo-600 font-medium truncate">
          {title || "—"}
        </p>

        <div className="mt-4 text-sm text-gray-500">
          View profile
        </div>
      </div>
    </div>
  );
}