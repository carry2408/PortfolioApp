import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaServer, FaCode } from "react-icons/fa";
import { SiSpring, SiPostgresql, SiDocker } from "react-icons/si";

export default function Hero({ darkMode }) {
  const roles = [
    "Java Backend Developer",
    "Spring Boot & REST API Engineer",
    "Full Stack Web Developer",
    "Problem Solver (DSA in Java)",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 35 : 75;

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
      className={`min-h-screen flex items-center justify-center pt-24 pb-16 px-6 transition-colors duration-200 ${
        darkMode ? "bg-black text-white" : "bg-white text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left: Circular Original Color Profile Image (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 flex flex-col items-center justify-center"
        >
          {/* Circular Frame with Original Color Photo */}
          <div className="relative group flex flex-col items-center">
            <div
              className={`p-1.5 rounded-full border shadow-sm transition-all duration-300 ${
                darkMode
                  ? "border-neutral-800 bg-neutral-950 group-hover:border-neutral-700"
                  : "border-neutral-300 bg-neutral-100 group-hover:border-neutral-400"
              }`}
            >
              <img
                src="/profile.png"
                alt="Veeresh Patil"
                className="w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-full shadow-inner"
              />
            </div>

            {/* Clean Status Badge without green dot */}
            <div
              className={`mt-5 px-4 py-1.5 rounded-full border font-mono text-xs tracking-wide transition-colors ${
                darkMode
                  ? "bg-neutral-950 border-neutral-800 text-neutral-400"
                  : "bg-neutral-100 border-neutral-300 text-neutral-700"
              }`}
            >
              Open to Internships & full-time opportunities
            </div>
          </div>
        </motion.div>

        {/* Right: Content & Architecture info (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 flex flex-col items-start"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
            Hi, I am
          </p>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-1 ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Veeresh Patil
          </h1>

          {/* Typing Terminal Display */}
          <div className="mt-3 font-mono text-lg sm:text-xl font-semibold flex items-center min-h-[32px] text-blue-500">
            <span>&gt; {text}</span>
            <span className="inline-block w-2 h-5 bg-blue-500 ml-1.5 animate-pulse" />
          </div>

          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed max-w-xl ${
              darkMode ? "text-neutral-400" : "text-neutral-700"
            }`}
          >
            Computer Science undergraduate at Ramaiah Institute of Technology (MSRIT), Bengaluru.
            Focused on engineering robust server-side architectures, RESTful APIs, and database-driven
            systems with Java, Spring Boot, PostgreSQL, and modern React frontends.
          </p>

          {/* Stack summary chips with gray icons */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                  : "border-neutral-300 bg-neutral-100 text-neutral-800 font-medium"
              }`}
            >
              <FaServer className={darkMode ? "text-neutral-400" : "text-neutral-600"} />
              <span>Java 21</span>
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                  : "border-neutral-300 bg-neutral-100 text-neutral-800 font-medium"
              }`}
            >
              <SiSpring className={darkMode ? "text-neutral-400" : "text-neutral-600"} />
              <span>Spring Boot</span>
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                  : "border-neutral-300 bg-neutral-100 text-neutral-800 font-medium"
              }`}
            >
              <SiPostgresql className={darkMode ? "text-neutral-400" : "text-neutral-600"} />
              <span>PostgreSQL</span>
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border ${
                darkMode
                  ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                  : "border-neutral-300 bg-neutral-100 text-neutral-800 font-medium"
              }`}
            >
              <SiDocker className={darkMode ? "text-neutral-400" : "text-neutral-600"} />
              <span>Docker</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-colors"
            >
              <FaFileDownload className="text-white/90" />
              <span>View Resume</span>
            </a>

            <a
              href="#projects"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border font-mono text-xs font-semibold transition-colors ${
                darkMode
                  ? "border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500 hover:text-white"
                  : "border-neutral-300 bg-neutral-100 text-neutral-800 hover:border-neutral-400 hover:bg-neutral-200 font-medium"
              }`}
            >
              <FaCode className={darkMode ? "text-neutral-400" : "text-neutral-600"} />
              <span>Explore Projects</span>
            </a>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border font-mono text-xs font-semibold transition-colors ${
                darkMode
                  ? "border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white"
                  : "border-neutral-300 hover:border-neutral-400 text-neutral-700 hover:text-black font-medium"
              }`}
            >
              <span>Contact</span>
            </a>
          </div>

          {/* Social Links with gray icons */}
          <div
            className={`mt-8 pt-6 border-t w-full flex items-center gap-4 ${
              darkMode ? "border-neutral-900 text-neutral-400" : "border-neutral-200 text-neutral-600"
            }`}
          >
            <span className="font-mono text-xs text-neutral-500">
              socials:
            </span>
            <a
              href="https://github.com/carry2408"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`transition-colors ${
                darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
              }`}
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`transition-colors ${
                darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
              }`}
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:veereshvijay24082006@gmail.com"
              aria-label="Email"
              className={`transition-colors ${
                darkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
              }`}
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
