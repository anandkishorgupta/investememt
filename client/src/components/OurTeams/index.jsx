import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { OUR_TEAM } from "../../Constant/ourTeamInfo"; // Array of team members

const OurTeam = () => {
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
      <div className="flex flex-wrap lg:justify-start justify-center gap-6 max-w-7xl mx-auto">
        {OUR_TEAM.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-yellow-50/20 transition-all duration-300 hover:-translate-y-2 flex-shrink-0"
            style={{ width: "250px" }} // Fixed card width
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm text-center">{member.description}</p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold text-amber-700">{member.name}</h3>
              <p className="text-yellow-600 font-medium mt-1">{member.title}</p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-3">
                {member.socials?.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-900 hover:text-blue-600 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                )}
                {member.socials?.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-700 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
