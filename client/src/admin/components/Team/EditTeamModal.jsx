import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function EditTeamModal({ member, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: member.name || "",
    role: member.role || "",
    socialMedia: member.socialMedia?.length ? member.socialMedia : [],
  });

  /* ----------------------------- handlers ----------------------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSocialChange = (index, field, value) => {
    setFormData((p) => {
      const updated = [...p.socialMedia];
      updated[index] = { ...updated[index], [field]: value };
      return { ...p, socialMedia: updated };
    });
  };

  const addSocial = () => {
    setFormData((p) => ({ ...p, socialMedia: [...p.socialMedia, { platform: "", url: "" }] }));
  };

  const removeSocial = (index) => {
    setFormData((p) => {
      const updated = p.socialMedia.filter((_, i) => i !== index);
      return { ...p, socialMedia: updated };
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files?.[0] || null);
  };

  /* ----------------------------- submit ----------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.role.trim()) {
      alert("Name and Role are required");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("adminToken");
      const payload = new FormData();

      payload.append("name", formData.name.trim());
      payload.append("role", formData.role.trim());
      payload.append("socialMedia", JSON.stringify(formData.socialMedia));

      if (imageFile) payload.append("image", imageFile);

      const res = await fetch(`${API_BASE}/api/team/${member._id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: payload,
      });

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
          <h2 className="text-2xl font-bold">Edit Team Member</h2>
          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-7">
          {/* Name + Role */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Role / Position *" name="role" value={formData.role} onChange={handleChange} />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image (optional)</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border rounded-lg px-3 py-2" />
          </div>

          {/* Social Media */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Social Media</label>
              <button type="button" onClick={addSocial} className="text-indigo-600 flex gap-1">
                <Plus size={16} /> Add
              </button>
            </div>

            {formData.socialMedia.map((s, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  placeholder="Platform (e.g. LinkedIn)"
                  value={s.platform}
                  onChange={(e) => handleSocialChange(i, "platform", e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-2"
                />
                <input
                  placeholder="URL"
                  value={s.url}
                  onChange={(e) => handleSocialChange(i, "url", e.target.value)}
                  className="flex-1 border rounded-lg px-4 py-2"
                />
                <button type="button" onClick={() => removeSocial(i)} className="text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button type="button" onClick={onClose} className="px-6 py-2 border rounded-lg">
              Cancel
            </button>
            <button disabled={loading} className="px-6 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50">
              {loading ? "Updating..." : "Update Member"}
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