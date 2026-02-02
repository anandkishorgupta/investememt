

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FaBriefcase,
    FaExternalLinkAlt,
    FaFacebookF,
    FaGraduationCap,
    FaHandsHelping,
    FaInstagram,
    FaLinkedinIn,
    FaTimes,
    FaUserTie
} from "react-icons/fa";

const DirectorModal = ({ director, onClose }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const hasPortfolio = director.portfolio?.trim();

    const handleScroll = (e) => setIsScrolled(e.target.scrollTop > 50);

    const scrollToTop = () => {
        document.querySelector(".scroll-container")?.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const scrollY = window.scrollY;

        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";

            window.scrollTo(0, scrollY);
        };
    }, []);


    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:flex lg:items-center lg:justify-center"
                onClick={handleBackdropClick}
            >
                {/* Mobile Bottom Sheet */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl h-[95vh] overflow-hidden lg:hidden"
                >
                    <div className="w-full py-3 flex justify-center cursor-grab active:cursor-grabbing">
                        <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Floating Header */}
                    <AnimatePresence>
                        {isScrolled && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-amber-100 z-20 px-4 py-3"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-200">
                                            <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-amber-900 text-sm">{director.name}</h3>
                                            <p className="text-xs text-amber-700">{director.title}</p>
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="p-2 text-gray-500 hover:text-amber-600">
                                        <FaTimes size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Scrollable Content */}
                    <div className="scroll-container h-full overflow-y-auto pb-20" onScroll={handleScroll}>
                        {/* Hero */}
                        <div className="relative px-6 pt-6 pb-8">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                            >
                                <FaTimes className="text-amber-600" size={18} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                    <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900">{director.name}</h1>
                                    {director.alternativeName && <p className="text-amber-600 text-sm">({director.alternativeName})</p>}
                                    <div className="flex items-center gap-2 mt-1">
                                        <FaUserTie className="text-amber-500" size={14} />
                                        <p className="text-lg font-semibold text-amber-700">{director.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100 shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                            <FaGraduationCap className="text-amber-600" size={14} />
                                        </div>
                                        <span className="font-bold text-amber-900">{director.experience || "—"}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Experience</p>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-amber-100 shadow-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                            <FaBriefcase className="text-amber-600" size={14} />
                                        </div>
                                        <span className="font-bold text-amber-900">{director.specialization || "—"}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">Specialization</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mb-6 w-fit ">
                                {director.socials?.facebook && (
                                    <a href={director.socials.facebook} className="flex-1 bg-amber-50 py-2.5 rounded-lg flex items-center justify-center gap-2 px-6">
                                        <FaFacebookF className="text-amber-600" />
                                        <span className="text-sm font-medium text-amber-700">Facebook</span>
                                    </a>
                                )}
                                {director.socials?.linkedin && (
                                    <a href={director.socials.linkedin} className="flex-1 bg-amber-50 py-2.5 rounded-lg flex items-center justify-center gap-2">
                                        <FaLinkedinIn className="text-amber-600" />
                                        <span className="text-sm font-medium text-amber-700">LinkedIn</span>
                                    </a>
                                )}
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-6 pb-8">
                                <section className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-5 border border-amber-100">
                                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        Professional Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-base">{director.description}</p>
                                </section>

                                {director.education && (
                                    <section className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <FaGraduationCap className="text-blue-600" size={16} /> Education
                                        </h2>
                                        <p className="text-gray-700">{director.education}</p>
                                    </section>
                                )}

                                {director.roles?.length > 0 && (
                                    <section className="bg-amber-50 p-5 rounded-2xl border border-amber-200">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <FaBriefcase className="text-orange-600" size={16} /> Key Leadership Roles
                                        </h2>
                                        <ul className="space-y-2">
                                            {director.roles.map((role, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-amber-500 mr-2">•</span>
                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {director.skills?.length > 0 && (
                                    <section className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm">
                                        <h2 className="text-lg font-bold text-gray-900 mb-4">Areas of Expertise</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {director.skills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* {hasPortfolio && (
                                    <a
                                        href={director.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-fit items-center mx-auto px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl text-center font-bold text-lg shadow-lg shadow-amber-200/50 hover:shadow-xl hover:shadow-amber-200/70 transition-all active:scale-[0.98]"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <FaBriefcase /> View Full Portfolio <FaExternalLinkAlt size={12} />
                                        </div>
                                    </a>
                                )} */}
                                {hasPortfolio && (
                                    <a
                                        href={director.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-fit mx-auto group mt-6 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 shadow-md text-sm md:text-base relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {/* Shiny overlay effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                        {/* Magic sparkle dots */}
                                        <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                                        <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:delay-150" />

                                        {/* Button content with icon animations */}
                                        <FaBriefcase
                                            size={14}
                                            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                        />
                                        <span className="relative transition-all duration-300 group-hover:tracking-wide">
                                            View Full Portfolio
                                        </span>
                                        <FaExternalLinkAlt
                                            size={10}
                                            className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                                        />

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/0 via-amber-300/30 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                                    </a>
                                )}
                            </div>
                        </div>

                    </div>


                </motion.div>

                {/* Desktop Version */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.98 }}
                    transition={{ type: "spring", damping: 30, stiffness: 180, mass: 0.9 }}
                    className="hidden lg:block bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[92vh] overflow-hidden mx-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Left Panel */}
                        <div className=" scroll-left-panel lg:w-2/5 bg-gradient-to-b from-amber-50 to-white p-6 flex flex-col relative" style={{ maxHeight: 'calc(92vh - 2rem)' }}>
                            {/* Fixed Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-amber-600 hover:text-amber-800 p-2 hover:bg-amber-100 rounded-full transition-colors z-10 cursor-pointer"
                                aria-label="Close profile"
                            >
                                <FaTimes size={24} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto w-full h-full ">
                                <div className="flex flex-col items-center text-center">
                                    {/* Profile Image – closer to top */}
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg mb-5 flex-shrink-0">
                                        <img
                                            src={director.image}
                                            alt={director.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Name */}
                                    <h2 className="text-2xl md:text-3xl font-bold text-amber-900 leading-tight">
                                        {director.name}
                                    </h2>

                                    {/* Alternative Name (if any) */}
                                    {director.alternativeName && (
                                        <p className="text-amber-700 mt-1 text-base md:text-lg">
                                            ({director.alternativeName})
                                        </p>
                                    )}

                                    {/* Title */}
                                    <div className="flex items-center justify-center mt-3 mb-6">
                                        <FaUserTie className="text-amber-600 mr-2" />
                                        <p className="text-lg md:text-xl font-semibold text-amber-700">
                                            {director.title}
                                        </p>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex space-x-3 my-4">
                                        {director.socials?.facebook && (
                                            <a
                                                href={director.socials.facebook}
                                                className="p-2.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 hover:text-amber-800 transition-all hover:scale-110"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                            >
                                                <FaFacebookF size={18} />
                                            </a>
                                        )}
                                        {director.socials?.instagram && (
                                            <a
                                                href={director.socials.instagram}
                                                className="p-2.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 hover:text-amber-800 transition-all hover:scale-110"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                            >
                                                <FaInstagram size={18} />
                                            </a>
                                        )}
                                        {director.socials?.linkedin && (
                                            <a
                                                href={director.socials.linkedin}
                                                className="p-2.5 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 hover:text-amber-800 transition-all hover:scale-110"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedinIn size={18} />
                                            </a>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-4">
                                        <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100">
                                            <FaGraduationCap className="text-amber-600 mx-auto text-lg" />
                                            <p className="text-amber-800 font-bold mt-1.5 text-sm md:text-base">
                                                {director.experience || "—"}
                                            </p>
                                            <p className="text-xs text-gray-600 mt-1">Experience</p>
                                        </div>
                                        <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-amber-100">
                                            <FaBriefcase className="text-amber-600 mx-auto text-lg" />
                                            <p className="text-amber-800 font-bold mt-1.5 text-sm md:text-base">
                                                {director.specialization || "—"}
                                            </p>
                                            <p className="text-xs text-gray-600 mt-1">Specialization</p>
                                        </div>
                                    </div>

                                    {/* Portfolio Button */}
                                    {/* {hasPortfolio && (
                                        <a
                                            href={director.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg hover:from-amber-700 hover:to-orange-600 transition-all font-medium flex items-center justify-center space-x-2 shadow-md text-sm md:text-base"
                                        >
                                            <FaBriefcase size={14} />
                                            <span>View Full Portfolio</span>
                                            <FaExternalLinkAlt size={10} />
                                        </a>
                                    )} */}
                                    {hasPortfolio && (
                                        <a
                                            href={director.portfolio}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group mt-6 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 shadow-md text-sm md:text-base relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50 hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            {/* Shiny overlay effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                            {/* Magic sparkle dots */}
                                            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                                            <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:delay-150" />

                                            {/* Button content with icon animations */}
                                            <FaBriefcase
                                                size={14}
                                                className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                            />
                                            <span className="relative transition-all duration-300 group-hover:tracking-wide">
                                                View Full Portfolio
                                            </span>
                                            <FaExternalLinkAlt
                                                size={10}
                                                className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                                            />

                                            {/* Glow effect */}
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/0 via-amber-300/30 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel */}
                        <div className="lg:w-3/5 p-8 overflow-y-auto max-h-[85vh]">
                            <h3 className="text-2xl font-bold text-amber-900 mb-6 pb-4 border-b border-amber-200">
                                Professional Profile
                            </h3>

                            <div className="max-w-3xl mx-auto space-y-7">
                                <p className="text-gray-800 leading-relaxed text-base md:text-lg whitespace-pre-line">{director.description}</p>

                                {director.education && (
                                    <div>
                                        <h4 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2">
                                            <FaGraduationCap /> Education
                                        </h4>
                                        <p className="text-gray-700">{director.education}</p>
                                    </div>
                                )}

                                {director.roles?.length > 0 && (
                                    <div className="bg-amber-50 p-6 rounded-xl">
                                        <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                                            <FaBriefcase /> Key Leadership Roles
                                        </h4>
                                        <ul className="space-y-2">
                                            {director.roles.map((role, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-amber-500 mr-2">•</span>
                                                    <span>{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {director.skills?.length > 0 && (
                                    <div>
                                        <h4 className="text-xl font-bold text-amber-800 mb-4">Areas of Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {director.skills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {director.investments?.length > 0 && (
                                    <div>
                                        <h4 className="text-xl font-bold text-amber-800 mb-4">Key Investments</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {director.investments.map((inv, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">{inv}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {director.community?.length > 0 && (
                                    <div>
                                        <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                                            <FaHandsHelping /> Community Service
                                        </h4>
                                        <ul className="space-y-2">
                                            {director.community.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-amber-500 mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default DirectorModal;