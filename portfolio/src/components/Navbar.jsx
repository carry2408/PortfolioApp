import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-[#090d16]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
            : "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3"
          : darkMode
          ? "bg-transparent py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-md shadow-blue-500/20">
            <div
              className={`w-full h-full rounded-[10px] flex items-center justify-center font-mono font-bold text-sm ${
                darkMode ? "bg-[#090d16] text-blue-400" : "bg-white text-blue-600"
              }`}
            >
              VP
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight transition-colors duration-200">
            Veeresh<span className="text-blue-500">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          <div
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full border ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80 backdrop-blur-md"
                : "bg-slate-100/70 border-slate-200/80 backdrop-blur-md"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  darkMode
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 ml-4">
            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FaFileAlt className="text-xs" />
              Resume
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 active:scale-95 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/60 text-amber-400 hover:border-slate-700 hover:bg-slate-800"
                  : "border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-200"
              }`}
            >
              {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu and toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
              darkMode
                ? "border-slate-800 bg-slate-900 text-amber-400"
                : "border-slate-200 bg-slate-100 text-slate-700"
            }`}
          >
            {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
              darkMode
                ? "border-slate-800 bg-slate-900 text-white"
                : "border-slate-200 bg-slate-100 text-slate-900"
            }`}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden border-b px-6 py-5 ${
              darkMode
                ? "bg-[#090d16]/95 border-slate-800/80 backdrop-blur-2xl"
                : "bg-white/95 border-slate-200/80 backdrop-blur-2xl"
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    darkMode
                      ? "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800/30 flex gap-3 mt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-500/20"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className={`flex-1 text-center py-2.5 rounded-xl border text-sm font-semibold ${
                    darkMode
                      ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                      : "border-slate-300 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
