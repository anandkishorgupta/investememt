import { ADToBS } from "bikram-sambat-js";
import { AnimatePresence, motion } from "framer-motion";


import { useEffect, useRef, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";

import {
  HiMenu,
  HiOutlineCalendar,
  HiOutlineClock,
  HiX,
} from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const menuRef = useRef(null);
  const [nepaliDate, setNepaliDate] = useState("");

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Teams", to: "/teams" },
    { name: "Contact", to: "/contact" },

  ];

  /* ================= TIME & DAY ================= */
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setCurrentDate(
        now.toLocaleDateString([], {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );

      setCurrentDay(now.toLocaleDateString([], { weekday: "long" }));

      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );

      // Convert AD to BS
      // bikram-sambat-js expects YYYY-MM-DD
      const isoDate = now.toISOString().split("T")[0]; // "2025-12-23"
      const bsString = ADToBS(isoDate); // ex: "2082-08-08"
      // Format BS string into month name, day, year
      const [bsYear, bsMonthNum, bsDay] = bsString.split("-");
      const bsMonthNames = [
        "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
        "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
      ];
      const bsMonth = bsMonthNames[parseInt(bsMonthNum, 10) - 1];

      setNepaliDate(`${bsMonth} ${parseInt(bsDay, 10)}, ${bsYear}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu();
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  /* ================= CURSOR + HOVER ================= */
  useEffect(() => {
    const move = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (window.innerWidth > 768 && !isMenuOpen && e.clientX < 30) {
        setIsMenuOpen(true);
      }
    };
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }
  }, [isMenuOpen]);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerVariants = {
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 320, damping: 35 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 26 },
    },
  };
  
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className={`fixed top-0 left-0 w-full z-50 shadow-sm `}>
        {/* Gold animated line */}
        <motion.div
          className={`globalContainer  absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent`}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <nav
          className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl border-b border-amber-700/30 transition-all ${isScrolled ? "shadow-2xl shadow-amber-900/20" : ""
            }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* LOGO */}
              <Link className="flex items-center gap-3" to="/">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 blur opacity-30 rounded-lg" />
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-lg border border-amber-600/30">
                    <FiTrendingUp className="w-7 h-7 text-amber-400" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                    Sarathi Equity Fund
                  </p>
                  <p className="text-xs text-amber-200/70">
                    Invest for Growth
                  </p>
                </div>
              </Link>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                {/* DATE */}
                {/* <div className="hidden md:block text-right">
                  <div className="flex items-center gap-2 text-amber-200/90 text-xs">
                    <HiOutlineCalendar className="text-amber-400" />
                    {currentDate}
                  </div>
                  <div className="flex items-center gap-2 text-amber-200/70 text-xs mt-1">
                    <HiOutlineClock className="text-amber-400" />
                    {currentDay}, {currentTime}
                  </div>
                </div> */}
                <div className="hidden md:block text-right">
                  <div className="flex items-center gap-2 text-amber-200/90 text-xs">
                    <HiOutlineCalendar className="text-amber-400" />
                    {currentDate} / {nepaliDate}  {/* Shows Gregorian / Nepali */}
                  </div>

                  <div className="flex items-center gap-2 text-amber-200/70 text-xs mt-1">
                    <HiOutlineClock className="text-amber-400" />
                    {currentDay}, {currentTime}
                  </div>
                </div>


                {/* MENU BUTTON */}
                <motion.button
                  onClick={toggleMenu}
                  className="cursor-pointer relative p-2.5 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-600/30 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 blur opacity-0 group-hover:opacity-60 rounded-xl" />
                  <div className="relative">
                    {isMenuOpen ? (
                      <HiX className="w-6 h-6 text-amber-400" />
                    ) : (
                      <HiMenu className="w-6 h-6 text-amber-400" />
                    )}
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="h-16" />

      {/* ================= DRAWER ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-gradient-to-br from-amber-900/10 via-gray-900/60 to-amber-900/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              ref={menuRef}
              className=" z-[9999] fixed top-0 left-0 h-screen w-[320px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 backdrop-blur-2xl shadow-2xl z-50 border-r border-amber-700/30 flex flex-col"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* CLOSE */}
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="cursor-pointer p-2 rounded-lg text-amber-400 hover:bg-amber-500/10"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* LINKS */}
              <div className="p-6 space-y-6 flex-1">

                {navItems.map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block text-lg font-medium transition ${isActive
                        ? "text-amber-400"
                        : "text-amber-100/80 hover:text-amber-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
