// components/OurTeam.jsx
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { getTeams } from "../../api/apis";
// import { OUR_TEAM } from "../../Constant/ourTeamInfo";
const API_URL = import.meta.env.VITE_API_URL;

const OurTeam = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        console.log("data", data.teamMembers)
        setTeams(data.teamMembers); // or data.data depending on API response
      } catch (error) {
        console.error("Failed to fetch teams", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  };
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center mb-4">
          <div className="w-8 h-0.5 bg-yellow-600 mr-3" />
          <h2 className="text-yellow-600 font-semibold text-lg">Our Team</h2>
          <div className="w-8 h-0.5 bg-yellow-600 ml-3" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-700">
          Meet the Team
        </h1>
      </div>

      {/* Flexbox Cards */}
      <div className="flex flex-wrap lg:justify-start justify-center gap-8 max-w-7xl mx-auto">
        {teams.map((member, index) => (
          <div
            key={index}
            className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-amber-100/30 
              cursor-pointer w-[280px] transition-all duration-300 
              hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
          >
            {/* Image */}
            <div className="h-64 overflow-hidden relative">
              <img
                // src={member.image}
                src={getImageUrl(member?.image)}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="text-center">
                <h3 className="text-xl font-bold text-amber-800">{member.name}</h3>
                {member.alternativeName && (
                  <p className="text-sm text-amber-600 mt-1">({member.alternativeName})</p>
                )}
                <p className="text-amber-600 font-medium mt-1">{member.role}</p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center space-x-3 mt-4">
                {member.socialMedia?.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaFacebookF size={16} />
                  </a>
                )}
                {member.socialMedia?.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 transition-colors"
                    aria-label="Instagram"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaInstagram size={16} />
                  </a>
                )}
                {member.socialMedia?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition-colors"
                    aria-label="LinkedIn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                )}
              </div>

              {/* View Full Profile */}
              {/* <div className="mt-auto pt-5 text-center">
                <span className="text-amber-600 font-medium text-sm flex items-center justify-center gap-1 group-hover:text-amber-700 transition-colors">
                  View full profile
                  <FaArrowRight
                    className="text-amber-500 transition-transform group-hover:translate-x-1"
                    size={12}
                  />
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
