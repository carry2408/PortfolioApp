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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 border-b ${
        scrolled
          ? darkMode
            ? "bg-black/95 backdrop-blur-md border-neutral-800 py-3.5"
            : "bg-white/95 backdrop-blur-md border-neutral-200 py-3.5"
          : darkMode
          ? "bg-black border-neutral-900 py-4"
          : "bg-white border-neutral-200 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-1 group font-mono font-bold tracking-tight text-lg"
        >
          <span className={darkMode ? "text-neutral-500 group-hover:text-neutral-300" : "text-neutral-400 group-hover:text-neutral-600"}>
            &lt;
          </span>
          <span className={`tracking-normal ${darkMode ? "text-white" : "text-neutral-900"}`}>
            Veeresh Patil
          </span>
          <span className={darkMode ? "text-neutral-500 group-hover:text-neutral-300" : "text-neutral-400 group-hover:text-neutral-600"}>
            /&gt;
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 ${
                  darkMode
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all ${
                darkMode
                  ? "border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-neutral-500 hover:text-white"
                  : "border-neutral-300 bg-neutral-100 text-neutral-800 hover:border-neutral-400 hover:text-black"
              }`}
            >
              <FaFileAlt className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-600"}`} />
              <span>Resume</span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border text-sm transition-colors ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  : "border-neutral-300 bg-neutral-100 text-neutral-600 hover:border-neutral-400 hover:text-black"
              }`}
            >
              {darkMode ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg border text-sm ${
              darkMode
                ? "border-neutral-800 bg-neutral-900 text-neutral-400"
                : "border-neutral-300 bg-neutral-100 text-neutral-600"
            }`}
          >
            {darkMode ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-lg border text-sm ${
              darkMode
                ? "border-neutral-800 bg-neutral-900 text-white"
                : "border-neutral-300 bg-neutral-100 text-black"
            }`}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t px-6 py-4 flex flex-col gap-3 font-mono text-sm ${
              darkMode ? "bg-black border-neutral-800" : "bg-white border-neutral-200"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-1.5 transition-colors ${
                  darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                &gt; {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-800 flex gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center py-2 rounded-lg border text-xs font-semibold ${
                  darkMode ? "border-neutral-700 text-neutral-300" : "border-neutral-300 text-neutral-800"
                }`}
              >
                View Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`flex-1 text-center py-2 rounded-lg border text-xs font-semibold ${
                  darkMode ? "border-neutral-700 text-white" : "border-neutral-300 text-black"
                }`}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
