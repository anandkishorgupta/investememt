import { X } from "lucide-react";

export default function TeamDetailModal({ member, onClose }) {
  if (!member) return null;

  const { name, role, image, socialMedia = [] } = member;
  const API_BASE = import.meta.env.VITE_API_URL || "";

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-amber-300">
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-3xl text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-full p-1"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>

        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column – Image + Name + Role */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                src={image}
                alt={name}
                className="h-44 w-44 md:h-52 md:w-52 object-cover rounded-full border-8 border-amber-300 shadow-xl"
                // onError={(e) => (e.currentTarget.src = "/images/no-image.png")}
              />
            </div>

            <h2
              id="team-modal-title"
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              {name || "Unnamed Member"}
            </h2>
            <p className="text-amber-700 font-semibold mt-1 text-lg">
              {role || "—"}
            </p>
          </div>

          {/* Right Column – Social Media */}
          <div className="md:w-2/3 space-y-6">
            {socialMedia.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3">
                  Social Media
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-100 transition"
                    >
                      {s.platform}
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}