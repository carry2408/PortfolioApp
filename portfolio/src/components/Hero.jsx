import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaCode } from "react-icons/fa";
import { SiSpring, SiReact } from "react-icons/si";

export default function Hero({ darkMode }) {
  const roles = [
    "Full Stack Developer",
    "Java Backend Specialist",
    "Spring Boot & React Developer",
    "Problem Solver & Tech Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1600);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border mb-6 shadow-sm ${
              darkMode
                ? "bg-slate-900/80 border-slate-800 text-slate-300"
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Internships & Projects</span>
          </motion.div>

          <p className="text-base font-semibold text-blue-500 tracking-wide uppercase">
            Hello, I am
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2 leading-[1.15]">
            Veeresh{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
              Patil
            </span>
          </h1>

          {/* Typing Subtitle */}
          <div className="h-10 mt-3 flex items-center">
            <h2
              className={`text-xl sm:text-2xl font-semibold flex items-center ${
                darkMode ? "text-slate-200" : "text-slate-800"
              }`}
            >
              <span>{text}</span>
              <span className="inline-block w-[3px] h-6 bg-blue-500 ml-1.5 animate-pulse rounded-full" />
            </h2>
          </div>

          <p
            className={`mt-4 text-base sm:text-lg max-w-xl leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Engineering student at MSRIT building high-performance full-stack web applications.
            Specializing in resilient Java & Spring Boot microservices, intuitive React frontends,
            and scalable database architectures.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                darkMode
                  ? "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-blue-500/50 hover:bg-slate-800/80 hover:text-white"
                  : "border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:bg-slate-50"
              }`}
            >
              <FaFileDownload className="text-sm text-blue-500" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Social Links & Highlights Strip */}
          <div className="mt-10 pt-8 border-t border-slate-800/40 w-full flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-medium uppercase tracking-wider ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                Find me on
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/carry2408"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:-translate-y-1 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <FaGithub className="text-base" />
                </a>

                <a
                  href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:-translate-y-1 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <FaLinkedin className="text-base" />
                </a>

                <a
                  href="mailto:veereshvijay24082006@gmail.com"
                  aria-label="Email"
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:-translate-y-1 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <FaEnvelope className="text-base" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className={darkMode ? "text-slate-400" : "text-slate-600"}>Full Stack Web</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className={darkMode ? "text-slate-400" : "text-slate-600"}>Java & Spring</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image & Floating Accents (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Decorative ambient aura behind image */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-2xl -z-10 animate-pulse-slow" />

          {/* Image container with glowing ring */}
          <div className="relative group">
            {/* Gradient border ring */}
            <div className="p-1.5 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 shadow-2xl shadow-blue-500/20 transition-transform duration-500 group-hover:scale-[1.02]">
              <div
                className={`p-1.5 rounded-full ${
                  darkMode ? "bg-[#090d16]" : "bg-white"
                }`}
              >
                <img
                  src="/profile.png"
                  alt="Veeresh Patil"
                  className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case profile.png is absent
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Floating Badge 1: Spring Boot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-3 -left-4 px-3.5 py-2 rounded-2xl border shadow-xl flex items-center gap-2 backdrop-blur-md ${
                darkMode
                  ? "bg-slate-900/90 border-slate-700 text-white shadow-black/40"
                  : "bg-white/95 border-slate-200 text-slate-800 shadow-slate-200"
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center text-sm">
                <SiSpring />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium leading-none">Backend</p>
                <p className="text-xs font-bold leading-tight">Spring Boot</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: React */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-3 -right-3 px-3.5 py-2 rounded-2xl border shadow-xl flex items-center gap-2 backdrop-blur-md ${
                darkMode
                  ? "bg-slate-900/90 border-slate-700 text-white shadow-black/40"
                  : "bg-white/95 border-slate-200 text-slate-800 shadow-slate-200"
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-cyan-400 flex items-center justify-center text-sm">
                <SiReact />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium leading-none">Frontend</p>
                <p className="text-xs font-bold leading-tight">React & Vite</p>
              </div>
            </motion.div>

            {/* Floating Badge 3: Code/DSA */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`hidden sm:flex absolute top-1/2 -left-8 px-3 py-1.5 rounded-xl border shadow-lg items-center gap-2 backdrop-blur-md ${
                darkMode
                  ? "bg-slate-900/90 border-slate-800 text-purple-400"
                  : "bg-white/90 border-slate-200 text-purple-600"
              }`}
            >
              <FaCode className="text-xs" />
              <span className="text-[11px] font-semibold">Java DSA</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
