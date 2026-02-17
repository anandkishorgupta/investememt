// src/components/directors/AddDirectorModal.jsx
import { Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";



export default function AddDirectorModal({ onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    alternativeName: "",
    title: "",
    description: "",
    education: "",
    experience: "",
    specialization: "",
    portfolio: "",
    socials: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
    roles: [],
    investments: [],
    community: [],
    skills: [],
  });



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
      const payload = new FormData();
      const token = localStorage.getItem('adminToken');



      // primitive fields
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value) || typeof value === "object") {
          payload.append(key, JSON.stringify(value));
        } else {
          payload.append(key, value.trim());
        }
      });

      if (imageFile) payload.append("image", imageFile);

      const res = await fetch(`${API_BASE}/api/directors`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: payload,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to add director");
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
          <h2 className="text-2xl font-bold">Add New Director</h2>
          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-7">
          {/* Name + Title */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
            <Input
              label="Alternative Name"
              name="alternativeName"
              value={formData.alternativeName}
              onChange={handleChange}
            />
            <Input label="Title / Position *" name="title" value={formData.title} onChange={handleChange} />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* Description */}
          <Textarea label="Description / Bio" name="description" value={formData.description} onChange={handleChange} />

          {/* Education / Experience / Specialization */}
          <div className="grid md:grid-cols-3 gap-6">
            <Input label="Education" name="education" value={formData.education} onChange={handleChange} />
            <Input label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
            <Input label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
          </div>

          {/* Roles */}
          <ArrayField
            label="Roles / Board Positions"
            field="roles"
            data={formData.roles}
            onAdd={addArrayItem}
            onRemove={removeArrayItem}
            onChange={handleArrayChange}
          />
          <ArrayField
            label="Investments"
            field="investments"
            data={formData.investments}
            onAdd={addArrayItem}
            onRemove={removeArrayItem}
            onChange={handleArrayChange}
          />

          <ArrayField
            label="Community & Social Roles"
            field="community"
            data={formData.community}
            onAdd={addArrayItem}
            onRemove={removeArrayItem}
            onChange={handleArrayChange}
          />

          <ArrayField
            label="Skills & Expertise"
            field="skills"
            data={formData.skills}
            onAdd={addArrayItem}
            onRemove={removeArrayItem}
            onChange={handleArrayChange}
          />

          {/* Socials */}
          <div className="grid md:grid-cols-3 gap-6">
            <Input label="LinkedIn" name="linkedin" value={formData.socials.linkedin} onChange={handleSocialChange} />
            <Input label="Twitter / X" name="twitter" value={formData.socials.twitter} onChange={handleSocialChange} />
            <Input label="Facebook" name="facebook" value={formData.socials.facebook} onChange={handleSocialChange} />
          </div>

          {/* Portfolio */}
          <Input label="Portfolio / Website" name="portfolio" value={formData.portfolio} onChange={handleChange} />

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button type="button" onClick={onClose} className="px-6 py-2 border rounded-lg">
              Cancel
            </button>
            <button
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Director"}
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
        <input
          value={val}
          onChange={(e) => onChange(field, i, e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2"
        />
        {data.length > 1 && (
          <button type="button" onClick={() => onRemove(field, i)} className="text-red-600">
            <Trash2 size={18} />
          </button>
        )}
      </div>
    ))}
  </div>
);