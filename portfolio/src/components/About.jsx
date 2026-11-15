import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiHibernate,
  SiTailwindcss,
  SiPostman,
  SiRedis,
  SiTensorflow,
} from "react-icons/si";

export default function About({ darkMode }) {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      accent: "from-green-500/20 to-emerald-500/10",
      skills: [
        { name: "Java", icon: <FaJava className="text-amber-500" /> },
        { name: "Spring Boot", icon: <SiSpring className="text-emerald-500" /> },
        { name: "Spring Security", icon: <FaDatabase className="text-teal-400" /> },
        { name: "Hibernate / JPA", icon: <SiHibernate className="text-yellow-600" /> },
        { name: "RESTful APIs", icon: <FaLaptopCode className="text-blue-400" /> },
      ],
    },
    {
      title: "Frontend Engineering",
      accent: "from-blue-500/20 to-cyan-500/10",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      title: "Databases & Caching",
      accent: "from-indigo-500/20 to-purple-500/10",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      ],
    },
    {
      title: "Tools & DevOps",
      accent: "from-purple-500/20 to-pink-500/10",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-slate-300" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      ],
    },
    {
      title: "Core CS & Exploring",
      accent: "from-rose-500/20 to-orange-500/10",
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaLaptopCode className="text-purple-400" /> },
        { name: "OOP Principles", icon: <FaJava className="text-amber-400" /> },
        { name: "AI / ML Basics", icon: <SiTensorflow className="text-amber-500" /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">
            Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Me & Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Quick Facts (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div
              className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm shadow-sm ${
                darkMode
                  ? "bg-slate-900/40 border-slate-800 text-slate-300"
                  : "bg-white/90 border-slate-200 text-slate-700"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Passion for Building Scalable Systems
              </h3>

              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                I am a Computer Science Engineering student with an obsession for building
                reliable web applications from scratch. On the backend, I leverage
                <span className="font-semibold text-blue-500"> Java & Spring Boot</span> to
                architect secure, maintainable REST APIs and business logic.
              </p>

              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                On the client side, I design sleek, highly responsive user experiences with
                <span className="font-semibold text-cyan-400"> React & Tailwind CSS</span>.
                I thrive on problem-solving, exploring data structures, and ensuring every layer
                of an application operates reliably.
              </p>

              <p className="leading-relaxed text-sm sm:text-base">
                Continuously upgrading my toolkit by exploring distributed architectures,
                containerization with Docker, and machine learning models.
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  darkMode ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold">Bengaluru, IN</p>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  darkMode ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Education</p>
                  <p className="text-sm font-semibold">B.E. CSE (MSRIT)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skill Cards Grid (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  idx === skillCategories.length - 1 ? "sm:col-span-2" : ""
                } ${
                  darkMode
                    ? "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-500/5"
                    : "bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <h4 className="text-sm font-bold tracking-wide uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {category.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                        darkMode
                          ? "bg-slate-800/40 border-slate-700/60 text-slate-200 hover:border-slate-600 hover:bg-slate-800"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-sm">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
