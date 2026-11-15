import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaTerminal } from "react-icons/fa";

export default function Footer({ darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t font-mono text-xs transition-colors ${
        darkMode
          ? "bg-black border-neutral-900 text-neutral-400"
          : "bg-neutral-100 border-neutral-200 text-neutral-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <FaTerminal className="text-blue-500" />
            <span className="font-bold text-white tracking-tight">
              Veeresh Patil
            </span>
            <span className="text-neutral-500">// backend & fullstack developer</span>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#home" className="hover:text-white transition-colors">
              home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              about
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              education
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
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
                className="hover:text-white transition-colors"
              >
                <FaGithub className="text-sm" />
              </a>

              <a
                href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-sm" />
              </a>

              <a
                href="mailto:veereshvijay24082006@gmail.com"
                aria-label="Email"
                className="hover:text-white transition-colors"
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
                  : "border-neutral-300 bg-white text-neutral-700 hover:text-black"
              }`}
            >
              <FaArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-[11px] text-neutral-600">
          <p>© {new Date().getFullYear()} Veeresh Patil. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, & Spring Architecture.</p>
        </div>
      </div>
    </footer>
  );
}
