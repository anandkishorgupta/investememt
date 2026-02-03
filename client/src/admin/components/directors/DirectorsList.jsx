// // src/components/directors/DirectorsList.jsx
// import React, { useState, useEffect } from "react";
// import { Plus } from "lucide-react";
// import DirectorCard from "./DirectorCard";
// import DirectorDetailModal from "./DirectorDetailModal";
// import AddDirectorModal from "./AddDirectorModal";

// const API_BASE = import.meta.env.VITE_API_URL;

// export default function DirectorsList() {
//   const [directors, setDirectors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedDirector, setSelectedDirector] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);


//   const [editDirector, setEditDirector] = useState(null);
//   const [deleting, setDeleting] = useState(false);
//   const handleDelete = async (_id) => {
//     console.log("handleDelete received:", _id); // 🔍 DEBUG

//     if (!_id) {
//       alert("Invalid director id");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("adminToken");

//       const res = await fetch(`${API_BASE}/api/directors/${_id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) throw new Error("Failed to delete director");

//       setDirectors((prev) => prev.filter((d) => d._id !== _id));
//     } catch (err) {
//       console.error(err);
//       alert("Unauthorized or delete failed");
//     }
//   };
//   const handleUpdate = async (_id) => {
//     console.log("handleUpdate received:", _id); // 🔍 DEBUG

//     if (!_id) {
//       alert("Invalid director id");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("adminToken");

//       const res = await fetch(`${API_BASE}/api/directors/${_id}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) throw new Error("Failed to update director");

//       setDirectors((prev) => prev.filter((d) => d._id !== _id));
//     } catch (err) {
//       console.error(err);
//       alert("Unauthorized or update failed");
//     }
//   };

//   useEffect(() => {
//     fetchDirectors();
//   }, []);

//   const fetchDirectors = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`${API_BASE}/api/directors`, { method: "GET" });


//       const data = await res.json();

//       // Extract the actual array
//       setDirectors(data.directors || []);

//     } catch (err) {
//       console.error(err);
//       setError("Unable to load directors. Please try again.");
//       setDirectors([]);
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleAddSuccess = () => {
//     setShowAddModal(false);
//     fetchDirectors();
//   };


//   /* ----------------------------- UI ----------------------------- */

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
//           <div className="text-center sm:text-left flex-1">
//             <h1 className="text-3xl font-bold text-gray-900">Board of Directors</h1>
//             <p className="text-gray-600 mt-1">
//               Leadership team driving sustainable energy development
//             </p>
//           </div>

//           <button
//             onClick={() => setShowAddModal(true)}
//             className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition"
//           >
//             <Plus size={18} /> Add Director
//           </button>
//         </div>

//         {/* Loading */}
//         {loading && <div className="p-10 text-center text-gray-700">Loading directors...</div>}

//         {/* Error */}
//         {error && <div className="p-10 text-center text-red-600">{error}</div>}

//         {/* Empty */}
//         {!loading && !error && directors.length === 0 && (
//           <div className="p-10 text-center text-gray-500">No directors found.</div>
//         )}

//         {/* Director Cards */}
//         {!loading && !error && directors.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {directors.map((director) => (
//               // <DirectorCard
//               //   key={director._id || director.id}
//               //   director={director}
//               //   onClick={() => setSelectedDirector(director)}
//               // />
//               <DirectorCard
//                 key={director._id}                // ✅ REQUIRED
//                 director={director}
//                 onClick={() => setSelectedDirector(director)}
//                 // onEdit={(data) => setEditDirector(data)}
//                 onEdit={handleUpdate}
//                 onDelete={handleDelete}           // ✅ pass function directly
//               />
//             ))}
//           </div>
//         )}

//         {/* Modals */}
//         {selectedDirector && (
//           <DirectorDetailModal
//             director={selectedDirector}
//             onClose={() => setSelectedDirector(null)}
//           />
//         )}

//         {showAddModal && (
//           <AddDirectorModal onClose={() => setShowAddModal(false)} onSuccess={handleAddSuccess} />
//         )}
//       </div>
//     </div>
//   );
// }
// src/components/directors/DirectorsList.jsx
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import DirectorCard from "./DirectorCard";
import DirectorDetailModal from "./DirectorDetailModal";
import AddDirectorModal from "./AddDirectorModal";
import EditDirectorModal from "./EditDirectorModal";
const API_BASE = import.meta.env.VITE_API_URL;

export default function DirectorsList() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editDirector, setEditDirector] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  /* ----------------------------- API ----------------------------- */

  const fetchDirectors = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_BASE}/api/directors`);
      if (!res.ok) throw new Error("Failed to fetch directors");

      const data = await res.json();
      setDirectors(data?.directors || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load directors. Please try again.");
      setDirectors([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return alert("Invalid director id");

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${API_BASE}/api/directors/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      setDirectors((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      console.error(err);
      alert("Unauthorized or delete failed");
    }
  };

  const handleUpdate = async (id) => {
    if (!id) return alert("Invalid director id");

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${API_BASE}/api/directors/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // TEMP example update
          name: "Updated Name",
        }),
      });

      if (!res.ok) throw new Error("Update failed");

      fetchDirectors();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  /* ----------------------------- Effects ----------------------------- */

  useEffect(() => {
    fetchDirectors();
  }, []);

  const handleAddSuccess = () => {
    setShowAddModal(false);
    fetchDirectors();
  };

  /* ----------------------------- UI ----------------------------- */

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Board of Directors
            </h1>
            <p className="text-gray-600 mt-1">
              Leadership team driving sustainable energy development
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition"
          >
            <Plus size={18} />
            Add Director
          </button>
        </div>

        {/* States */}
        {loading && (
          <div className="p-10 text-center text-gray-600">
            Loading directors...
          </div>
        )}

        {error && (
          <div className="p-10 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && directors.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No directors found.
          </div>
        )}

        {/* Cards */}
        {!loading && !error && directors.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {directors.map((director) => (
              <DirectorCard
                key={director._id}
                director={director}
                onClick={() => setSelectedDirector(director)}
                onEdit={(director) => setEditDirector(director)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}{editDirector && (
          <EditDirectorModal
            director={editDirector}
            onClose={() => setEditDirector(null)}
            onSuccess={fetchDirectors}
          />
        )}

        {/* Modals */}
        {selectedDirector && (
          <DirectorDetailModal
            director={selectedDirector}
            onClose={() => setSelectedDirector(null)}
          />
        )}

        {showAddModal && (
          <AddDirectorModal
            onClose={() => setShowAddModal(false)}
            onSuccess={handleAddSuccess}
          />
        )}
      </div>
    </div>
  );
}