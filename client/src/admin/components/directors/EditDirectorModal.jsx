// import React, { useState } from "react";
// import { X } from "lucide-react";

// const API_BASE = import.meta.env.VITE_API_URL;

// export default function EditDirectorModal({ director, onClose, onSuccess }) {
//   const [formData, setFormData] = useState({
//     name: director.name || "",
//     title: director.title || "",
//     image: director.image || "",
//     description: director.description || "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("adminToken");

//       const res = await fetch(
//         `${API_BASE}/api/directors/${director._id}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!res.ok) throw new Error("Update failed");

//       onSuccess();
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update director");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4"
//         >
//           <X />
//         </button>

//         <h2 className="text-xl font-bold mb-4">Edit Director</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="w-full border p-2 rounded"
//           />

//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Title"
//             className="w-full border p-2 rounded"
//           />

//           <input
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             placeholder="Image URL"
//             className="w-full border p-2 rounded"
//           />

//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Description"
//             className="w-full border p-2 rounded"
//           />

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function EditDirectorModal({ director, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: director.name || "",
    alternativeName: director.alternativeName || "",
    title: director.title || "",
    description: director.description || "",
    education: director.education || "",
    experience: director.experience || "",
    specialization: director.specialization || "",
    portfolio: director.portfolio || "",
    socials: {
      linkedin: director.socials?.linkedin || "",
      twitter: director.socials?.twitter || "",
      facebook: director.socials?.facebook || "",
    },
    roles: director.roles?.length ? director.roles : [""],
    investments: director.investments?.length ? director.investments : [""],
    community: director.community?.length ? director.community : [""],
    skills: director.skills?.length ? director.skills : [""],
  });

  /* ----------------------------- handlers ----------------------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      socials: { ...p.socials, [name]: value.trim() },
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((p) => {
      const updated = [...p[field]];
      updated[index] = value;
      return { ...p, [field]: updated };
    });
  };

  const addArrayItem = (field) => {
    setFormData((p) => ({ ...p, [field]: [...p[field], ""] }));
  };

  const removeArrayItem = (field, index) => {
    setFormData((p) => {
      const updated = p[field].filter((_, i) => i !== index);
      return { ...p, [field]: updated.length ? updated : [""] };
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files?.[0] || null);
  };

  /* ----------------------------- submit ----------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.title.trim()) {
      alert("Name and Title are required");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("adminToken");
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value) || typeof value === "object") {
          payload.append(key, JSON.stringify(value));
        } else {
          payload.append(key, value.trim());
        }
      });

      if (imageFile) payload.append("image", imageFile);

      const res = await fetch(
        `${API_BASE}/api/directors/${director._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: payload,
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Update failed");
      }

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ----------------------------- UI ----------------------------- */

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white px-8 py-5 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Edit Director</h2>
          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-7">
          {/* Name + Title */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Alternative Name" name="alternativeName" value={formData.alternativeName} onChange={handleChange} />
            <Input label="Title / Position *" name="title" value={formData.title} onChange={handleChange} />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image (optional)</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border rounded-lg px-3 py-2" />
          </div>

          <Textarea label="Description / Bio" name="description" value={formData.description} onChange={handleChange} />

          <div className="grid md:grid-cols-3 gap-6">
            <Input label="Education" name="education" value={formData.education} onChange={handleChange} />
            <Input label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
            <Input label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
          </div>

          <ArrayField label="Roles / Board Positions" field="roles" data={formData.roles} onAdd={addArrayItem} onRemove={removeArrayItem} onChange={handleArrayChange} />
          <ArrayField label="Investments" field="investments" data={formData.investments} onAdd={addArrayItem} onRemove={removeArrayItem} onChange={handleArrayChange} />
          <ArrayField label="Community & Social Roles" field="community" data={formData.community} onAdd={addArrayItem} onRemove={removeArrayItem} onChange={handleArrayChange} />
          <ArrayField label="Skills & Expertise" field="skills" data={formData.skills} onAdd={addArrayItem} onRemove={removeArrayItem} onChange={handleArrayChange} />

          <div className="grid md:grid-cols-3 gap-6">
            <Input label="LinkedIn" name="linkedin" value={formData.socials.linkedin} onChange={handleSocialChange} />
            <Input label="Twitter / X" name="twitter" value={formData.socials.twitter} onChange={handleSocialChange} />
            <Input label="Facebook" name="facebook" value={formData.socials.facebook} onChange={handleSocialChange} />
          </div>

          <Input label="Portfolio / Website" name="portfolio" value={formData.portfolio} onChange={handleChange} />

          <div className="flex justify-end gap-4 pt-6 border-t">
            <button type="button" onClick={onClose} className="px-6 py-2 border rounded-lg">
              Cancel
            </button>
            <button disabled={loading} className="px-6 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50">
              {loading ? "Updating..." : "Update Director"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ----------------------------- reusable UI ----------------------------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input {...props} className="w-full border rounded-lg px-4 py-2" />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea {...props} rows={3} className="w-full border rounded-lg px-4 py-2" />
  </div>
);

const ArrayField = ({ label, field, data, onAdd, onRemove, onChange }) => (
  <div>
    <div className="flex justify-between mb-2">
      <label className="text-sm font-medium">{label}</label>
      <button type="button" onClick={() => onAdd(field)} className="text-indigo-600 flex gap-1">
        <Plus size={16} /> Add
      </button>
    </div>
    {data.map((val, i) => (
      <div key={i} className="flex gap-2 mb-2">
        <input value={val} onChange={(e) => onChange(field, i, e.target.value)} className="flex-1 border rounded-lg px-4 py-2" />
        {data.length > 1 && (
          <button type="button" onClick={() => onRemove(field, i)} className="text-red-600">
            <Trash2 size={18} />
          </button>
        )}
      </div>
    ))}
  </div>
);