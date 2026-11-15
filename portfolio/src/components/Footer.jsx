import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        darkMode
          ? "bg-[#060910] border-slate-800/80 text-slate-400"
          : "bg-slate-50 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-md shadow-blue-500/20">
                VP
              </div>
              <span className="font-bold text-lg text-slate-200 tracking-tight">
                Veeresh Patil
              </span>
            </a>
            <p className="text-xs text-slate-500 mt-2 max-w-xs">
              Designing and developing robust full-stack applications with React, Java & Spring Boot.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium">
            <a href="#home" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#education" className="hover:text-blue-500 transition-colors">
              Education
            </a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Contact
            </a>
          </div>

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/carry2408"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
                    : "border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                <FaGithub className="text-sm" />
              </a>

              <a
                href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-blue-400 hover:border-slate-700"
                    : "border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-slate-300"
                }`}
              >
                <FaLinkedin className="text-sm" />
              </a>

              <a
                href="mailto:veereshvijay24082006@gmail.com"
                aria-label="Email Me"
                className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-blue-400 hover:border-slate-700"
                    : "border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-slate-300"
                }`}
              >
                <FaEnvelope className="text-sm" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:-translate-y-1 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/80 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                  : "border-slate-200 bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-500"
              }`}
              title="Scroll to top"
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom row: Copyright & build badge */}
        <div className="mt-10 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Veeresh Patil. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <FaHeart className="text-[10px] text-rose-500" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
