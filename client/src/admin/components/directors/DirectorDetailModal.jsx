// // src/components/directors/DirectorDetailModal.jsx
// import React from "react";
// import { X } from "lucide-react";


// export default function DirectorDetailModal({ director, onClose }) {
//   if (!director) return null;

//   const {
//     name,
//     title,
//     image,
//     description,
//     education,
//     experience,
//     specialization,
//     roles = [],
//     skills = [],
//   } = director;
// const API_BASE = import.meta.env.VITE_API_URL;
//   return (
//     <div
//       className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="director-modal-title"
//     >
//       <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-6 text-3xl text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
//           onClick={onClose}
//           aria-label="Close"
//         >
//           <X size={28} />
//         </button>

//         <div className="p-8">
//           <div className="flex flex-col md:flex-row gap-10">
//             {/* Left Column: Image + Basic Info */}
//             <div className="md:w-1/3 flex flex-col items-center text-center">


//               <img
//                 src={`${API_BASE}${image}`}
//                 alt={name}
//                 className="h-52 w-52 object-cover rounded-full border-4 border-white shadow-lg"
//                 onError={(e) => (e.currentTarget.src = "/images/no-image.png")}
//               />
//               <h2
//                 id="director-modal-title"
//                 className="text-2xl font-bold truncate"
//               >
//                 {name || "Unnamed Director"}
//               </h2>
//               <p className="text-indigo-600 font-medium mt-1 text-lg truncate">
//                 {title || "—"}
//               </p>
//             </div>

//             {/* Right Column: Details */}
//             <div className="md:w-2/3 space-y-6">
//               {/* Professional Profile */}
//               {description && (
//                 <Section title="Professional Profile">
//                   <div className="text-gray-700 leading-relaxed whitespace-pre-line">
//                     {description}
//                   </div>
//                 </Section>
//               )}

//               {/* Education & Experience */}
//               {(education || experience) && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {education && (
//                     <DetailBlock title="Education">{education}</DetailBlock>
//                   )}
//                   {experience && (
//                     <DetailBlock title="Experience">
//                       {experience}
//                       {specialization && (
//                         <div className="text-sm text-gray-500 mt-1">
//                           {specialization}
//                         </div>
//                       )}
//                     </DetailBlock>
//                   )}
//                 </div>
//               )}

//               {/* Roles */}
//               {roles.length > 0 && (
//                 <Section title="Key Leadership Roles">
//                   <ul className="space-y-2 text-gray-700">
//                     {roles.map((role, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="text-indigo-500 mr-3 text-xl leading-none">
//                           •
//                         </span>
//                         {role}
//                       </li>
//                     ))}
//                   </ul>
//                 </Section>
//               )}

//               {/* Skills */}
//               {skills.length > 0 && (
//                 <Section title="Skills">
//                   <div className="flex flex-wrap gap-2">
//                     {skills.map((skill, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gray-100 px-3 py-1 rounded-full text-sm"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </Section>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ----------------------------- Reusable Components ----------------------------- */

// const Section = ({ title, children }) => (
//   <div className="mb-4">
//     <h3 className="text-xl font-semibold border-b pb-2 mb-3">{title}</h3>
//     {children}
//   </div>
// );

// const DetailBlock = ({ title, children }) => (
//   <div className="mb-3">
//     <h4 className="font-semibold">{title}</h4>
//     <div className="text-gray-600 space-y-1">{children}</div> {/* ✅ div instead of <p> */}
//   </div>
// );
// src/components/directors/DirectorDetailModal.jsx
import React from "react";
import { X } from "lucide-react";

export default function DirectorDetailModal({ director, onClose }) {
  if (!director) return null;

  const {
    name,
    title,
    image,
    description,
    education,
    experience,
    specialization,
    roles = [],
    investments = [],
    community = [],
    skills = [],
  } = director;

  const API_BASE = import.meta.env.VITE_API_URL || "";

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="director-modal-title"
    >
      <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-amber-200">
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-3xl text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-full p-1"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Column – Profile Photo + Name + Title + Highlight Boxes */}
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img
                  src={`${API_BASE}${image}`}
                  alt={name}
                  className="h-44 w-44 md:h-52 md:w-52 object-cover rounded-full border-8 border-amber-300 shadow-xl"
                  // onError={(e) => (e.currentTarget.src = "/images/no-image.png")}
                />
                {/* Optional small accent ring or badge */}
                {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Board Member
                </div> */}
              </div>

              <h2
                id="director-modal-title"
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                {name}
              </h2>
              <p className="text-amber-700 font-semibold mt-1 text-lg">
                {title}
              </p>

              {/* Highlight Boxes – like your original card */}
              <div className="mt-6 w-full grid grid-cols-1 gap-4">
                <div className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm text-center">
                  <div className="text-3xl mb-1">🎓</div>
                  <p className="font-bold text-lg">{experience}</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm text-center">
                  <div className="text-3xl mb-1">⚡</div>
                  <p className="font-bold text-lg">{specialization}</p>
                  <p className="text-sm text-gray-600">Specialization</p>
                </div>
              </div>
            </div>

            {/* Right Column – Details */}
            <div className="md:w-2/3 space-y-8">
              {/* Professional Profile */}
              {description && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3">
                    Professional Profile
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                </section>
              )}

              {/* Education */}
              {education && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3 flex items-center gap-2">
                    <span>🎓</span> Education
                  </h3>
                  <p className="text-gray-700">{education}</p>
                </section>
              )}

              {/* Key Leadership Roles */}
              {roles.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3 flex items-center gap-2">
                    <span>💼</span> Key Leadership Roles
                  </h3>
                  <ul className="space-y-2.5 text-gray-700">
                    {roles.map((role, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-600 mr-3 text-xl font-bold leading-tight">
                          •
                        </span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Areas of Expertise */}
              {skills.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium border border-amber-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}
              {community.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3 flex items-center gap-2">
                    <span>🤝</span> Community & Social Roles
                  </h3>
                  <ul className="space-y-2.5 text-gray-700">
                    {community.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-600 mr-3 text-xl font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}{investments.length > 0 && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-amber-300 pb-2 mb-3 flex items-center gap-2">
                    <span>💰</span> Investments
                  </h3>
                  <ul className="space-y-2.5 text-gray-700">
                    {investments.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-600 mr-3 text-xl font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}