import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaTerminal } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t font-mono text-xs transition-colors duration-200 ${
        darkMode
          ? "bg-black border-neutral-900 text-neutral-400"
          : "bg-neutral-100 border-neutral-200 text-neutral-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <FaTerminal className="text-blue-500" />
            <span
              className={`font-bold tracking-tight ${
                darkMode ? "text-white" : "text-neutral-900"
              }`}
            >
              Veeresh Patil
            </span>
            <span className={darkMode ? "text-neutral-500" : "text-neutral-600"}>
              // backend & fullstack developer
            </span>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#home"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-black font-medium"
              }`}
            >
              home
            </a>
            <a
              href="#about"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-black font-medium"
              }`}
            >
              about
            </a>
            <a
              href="#education"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-black font-medium"
              }`}
            >
              education
            </a>
            <a
              href="#projects"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-black font-medium"
              }`}
            >
              projects
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-black font-medium"
              }`}
            >
              contact
            </a>
          </div>

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/carry2408"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`transition-colors ${
                  darkMode ? "hover:text-white text-neutral-400" : "hover:text-black text-neutral-600"
                }`}
              >
                <FaGithub className="text-sm" />
              </a>

              <a
                href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`transition-colors ${
                  darkMode ? "hover:text-blue-400 text-neutral-400" : "hover:text-blue-600 text-neutral-600"
                }`}
              >
                <FaLinkedin className="text-sm" />
              </a>

              <a
                href="mailto:veereshvijay24082006@gmail.com"
                aria-label="Email"
                className={`transition-colors ${
                  darkMode ? "hover:text-white text-neutral-400" : "hover:text-black text-neutral-600"
                }`}
              >
                <FaEnvelope className="text-sm" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={`p-1.5 rounded border transition-colors ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700"
                  : "border-neutral-300 bg-white text-neutral-700 hover:text-black hover:border-neutral-400 shadow-xs"
              }`}
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          className={`mt-8 pt-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] ${
            darkMode ? "border-neutral-900 text-neutral-600" : "border-neutral-200 text-neutral-500"
          }`}
        >
          <p>© {new Date().getFullYear()} Veeresh Patil. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, & Spring Architecture.</p>
        </div>
      </div>
    </footer>
  );
}
