import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTerminal,
  FaServer,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiSpring,
  SiHibernate,
  SiTensorflow,
} from "react-icons/si";

export default function About({ darkMode }) {
  // Exact skill groups matching user's original specification without hallucination
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-cyan-400" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-emerald-500" />,
      skills: [
        { name: "Spring", icon: <SiSpring className="text-emerald-500" /> },
        { name: "Spring Boot", icon: <SiSpring className="text-emerald-500" /> },
        { name: "Hibernate", icon: <SiHibernate className="text-yellow-600" /> },
        { name: "Spring Security", icon: <FaDatabase className="text-teal-400" /> },
        { name: "ORM", icon: <FaDatabase className="text-teal-400" /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-sky-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      title: "Programming",
      icon: <FaCode className="text-amber-500" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-amber-500" /> },
        { name: "DSA", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="text-orange-500" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className={darkMode ? "text-neutral-300" : "text-neutral-800"} /> },
      ],
    },
    {
      title: "Learning",
      icon: <FaBrain className="text-purple-400" />,
      skills: [
        { name: "AI / ML", icon: <SiTensorflow className="text-amber-500" /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 px-6 border-t transition-colors duration-200 ${
        darkMode
          ? "bg-black border-neutral-900 text-white"
          : "bg-neutral-50 border-neutral-200 text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-500 mb-1">
            // 01. ABOUT ME
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Background & Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio & System Manifest (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div
              className={`p-6 rounded-xl border ${
                darkMode
                  ? "bg-neutral-950 border-neutral-800 text-neutral-300"
                  : "bg-white border-neutral-300 text-neutral-800 shadow-sm"
              }`}
            >
              <h3
                className={`font-mono text-base font-bold mb-3 flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-neutral-900"
                }`}
              >
                <FaTerminal className="text-xs text-blue-500" />
                <span>engineering_profile.md</span>
              </h3>

              <p className="text-sm leading-relaxed mb-4">
                I am a passionate Full Stack Developer focused on building modern web
                applications using <span className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}>React</span> for the
                frontend and <span className={`font-semibold ${darkMode ? "text-white" : "text-neutral-900"}`}>Java with Spring Framework</span> for
                the backend. I enjoy solving problems and continuously improving my skills in
                Data Structures and Algorithms.
              </p>

              <p className="text-sm leading-relaxed">
                I am currently pursuing my degree in Computer Science at Ramaiah Institute of
                Technology (MSRIT) and actively building real-world projects. I am also exploring
                AI/ML to expand my technical breadth.
              </p>
            </div>

            {/* System Specs Box (Terminal style) */}
            <div
              className={`p-5 rounded-xl border font-mono text-xs ${
                darkMode
                  ? "bg-neutral-950 border-neutral-850 text-neutral-400"
                  : "bg-white border-neutral-300 text-neutral-700 shadow-sm"
              }`}
            >
              <div
                className={`flex items-center justify-between pb-3 mb-3 border-b ${
                  darkMode ? "border-neutral-800" : "border-neutral-200"
                }`}
              >
                <span className={darkMode ? "text-neutral-500" : "text-neutral-600 font-semibold"}>
                  SYSTEM METRICS
                </span>
                <span className="text-emerald-500 font-bold">READY</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={darkMode ? "text-neutral-500" : "text-neutral-600"}>primary_focus:</span>
                  <span className={`font-medium ${darkMode ? "text-neutral-200" : "text-neutral-900"}`}>
                    Java Backend & Full Stack
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? "text-neutral-500" : "text-neutral-600"}>core_framework:</span>
                  <span className={`font-medium ${darkMode ? "text-neutral-200" : "text-neutral-900"}`}>
                    Spring Boot & React
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? "text-neutral-500" : "text-neutral-600"}>institution:</span>
                  <span className={`font-medium ${darkMode ? "text-neutral-200" : "text-neutral-900"}`}>
                    MS Ramaiah Institute of Tech
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? "text-neutral-500" : "text-neutral-600"}>location:</span>
                  <span className={`font-medium ${darkMode ? "text-neutral-200" : "text-neutral-900"}`}>
                    Bengaluru, IN
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Original Skill Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`p-5 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-neutral-950 border-neutral-850 hover:border-neutral-700"
                    : "bg-white border-neutral-300 hover:border-neutral-400 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{category.icon}</span>
                  <h4
                    className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      darkMode ? "text-neutral-200" : "text-neutral-900"
                    }`}
                  >
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                        darkMode
                          ? "bg-neutral-900 border-neutral-800 text-neutral-300"
                          : "bg-neutral-100 border-neutral-300 text-neutral-900 font-medium"
                      }`}
                    >
                      <span className="text-sm">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
