

import { ADToBS } from "bikram-sambat-js";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import devshreeLogo from "../../assets/logos/devshree.jpeg";

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

  /* ================= TIME ================= */
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

      const isoDate = now.toISOString().split("T")[0];
      const bsString = ADToBS(isoDate);
      const [bsYear, bsMonthNum, bsDay] = bsString.split("-");

      const bsMonthNames = [
        "Baisakh",
        "Jestha",
        "Ashadh",
        "Shrawan",
        "Bhadra",
        "Ashwin",
        "Kartik",
        "Mangsir",
        "Poush",
        "Magh",
        "Falgun",
        "Chaitra",
      ];

      setNepaliDate(
        `${bsMonthNames[parseInt(bsMonthNum) - 1]} ${parseInt(
          bsDay
        )}, ${bsYear}`
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeMenu();
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

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
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Gold shimmer */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <nav
          className={`bg-[#FAF8F3]/90 backdrop-blur-xl border-b border-[#E6D8A5] transition-all ${
            isScrolled ? "shadow-lg shadow-[#D4AF37]/10" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* LOGO */}
              <Link className="flex items-center gap-3" to="/">
                <img
                  src={devshreeLogo}
                  alt="logo"
                  className="w-9 h-9 rounded-full"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-amber-900">
                    Devshree Venture Pvt. Ltd.
                  </p>
                  <p className="text-xs text-[#8B7A44]">
                    Invest for Growth
                  </p>
                </div>
              </Link>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                <div className="hidden md:block text-right">
                  <div className="flex items-center gap-2 text-[#8B7A44] text-xs">
                    <HiOutlineCalendar />
                    {nepaliDate}
                  </div>
                  <div className="flex items-center gap-2 text-[#8B7A44] text-xs mt-1">
                    <HiOutlineClock />
                    {currentDay}, {currentTime}
                  </div>
                </div>

                <motion.button
                  onClick={toggleMenu}
                  className="relative p-2.5 rounded-xl bg-[#FFF9EC] border border-[#E6D8A5]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMenuOpen ? (
                    <HiX className="w-6 h-6 text-amber-800" />
                  ) : (
                    <HiMenu className="w-6 h-6 text-amber-800" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="h-16" />

      {/* DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[#000]/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              ref={menuRef}
              className="z-[9999] fixed top-0 left-0 h-screen w-[320px] bg-[#FFF9EC] border-r border-[#E6D8A5] shadow-xl"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-[#3A2F1C] hover:bg-[#EADFB8]"
                >
                  <HiX size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {navItems.map((item, idx) => (
                  <NavLink
                    key={idx}
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block text-lg font-medium transition ${
                        isActive
                          ? "text-[#B8962E]"
                          : "text-[#3A2F1C] hover:text-[#B8962E]"
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
