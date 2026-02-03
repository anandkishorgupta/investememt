import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import TeamCard from "./TeamCard";
import TeamDetailModal from "./TeamDetailModal";
import AddTeamModal from "./AddTeamModel";
import EditTeamModal from "./EditTeamModal";

const API_BASE = import.meta.env.VITE_API_URL;

export default function TeamList() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMember, setEditMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  /* ----------------------------- API ----------------------------- */

  const fetchTeam = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${API_BASE}/api/team`);
      if (!res.ok) throw new Error("Failed to fetch team members");

      const data = await res.json();
      setTeamMembers(data?.teamMembers || []);
    } catch (err) {
      console.error(err);
      setError("Unable to load team members. Please try again.");
      setTeamMembers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return alert("Invalid team member id");

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${API_BASE}/api/team/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      setTeamMembers((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error(err);
      alert("Unauthorized or delete failed");
    }
  };

  const handleUpdate = async (id) => {
    if (!id) return alert("Invalid team member id");

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${API_BASE}/api/team/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Updated Name",
        }),
      });

      if (!res.ok) throw new Error("Update failed");

      fetchTeam();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  /* ----------------------------- Effects ----------------------------- */

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleAddSuccess = () => {
    setShowAddModal(false);
    fetchTeam();
  };

  /* ----------------------------- UI ----------------------------- */

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Our Team
            </h1>
            <p className="text-gray-600 mt-1">
              Meet the talented team driving our mission
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition"
          >
            <Plus size={18} />
            Add Member
          </button>
        </div>

        {/* States */}
        {loading && (
          <div className="p-10 text-center text-gray-600">
            Loading team members...
          </div>
        )}

        {error && (
          <div className="p-10 text-center text-red-600">
            {error}
          </div>
        )}

        {!loading && !error && teamMembers.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No team members found.
          </div>
        )}

        {/* Cards */}
        {!loading && !error && teamMembers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard
                key={member._id}
                member={member}
                onClick={() => setSelectedMember(member)}
                onEdit={(member) => setEditMember(member)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Modals */}
        {editMember && (
          <EditTeamModal
            member={editMember}
            onClose={() => setEditMember(null)}
            onSuccess={fetchTeam}
          />
        )}

        {selectedMember && (
          <TeamDetailModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}

        {showAddModal && (
          <AddTeamModal
            onClose={() => setShowAddModal(false)}
            onSuccess={handleAddSuccess}
          />
        )}
      </div>
    </div>
  );
}