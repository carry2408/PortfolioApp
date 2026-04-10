import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${
        darkMode
          ? "bg-black/70 border-white/10 text-white"
          : "bg-white/70 border-black/10 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* logo / name */}
        <h1 className="text-2xl font-bold">
          Veeresh Patil
        </h1>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>

          {/* theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 rounded-full text-sm"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* mobile button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-4 pb-4 ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="border px-3 py-1 rounded-full text-sm"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </motion.nav>
  );
}