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
  // Gray-shaded icon color: visible and distinct on both dark and light backgrounds
  const iconColor = darkMode ? "text-neutral-400" : "text-neutral-600";

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className={iconColor} />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className={iconColor} /> },
        { name: "CSS", icon: <FaCss3Alt className={iconColor} /> },
        { name: "JavaScript", icon: <FaJs className={iconColor} /> },
        { name: "React", icon: <FaReact className={iconColor} /> },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className={iconColor} />,
      skills: [
        { name: "Spring", icon: <SiSpring className={iconColor} /> },
        { name: "Spring Boot", icon: <SiSpring className={iconColor} /> },
        { name: "Hibernate", icon: <SiHibernate className={iconColor} /> },
        { name: "Spring Security", icon: <FaDatabase className={iconColor} /> },
        { name: "ORM", icon: <FaDatabase className={iconColor} /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className={iconColor} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className={iconColor} /> },
        { name: "SQL", icon: <SiMysql className={iconColor} /> },
      ],
    },
    {
      title: "Programming",
      icon: <FaCode className={iconColor} />,
      skills: [
        { name: "Java", icon: <FaJava className={iconColor} /> },
        { name: "DSA", icon: <FaJs className={iconColor} /> },
      ],
    },
    {
      title: "Tools",
      icon: <FaGitAlt className={iconColor} />,
      skills: [
        { name: "Git", icon: <FaGitAlt className={iconColor} /> },
        { name: "GitHub", icon: <FaGithub className={iconColor} /> },
      ],
    },
    {
      title: "Learning",
      icon: <FaBrain className={iconColor} />,
      skills: [
        { name: "AI / ML", icon: <SiTensorflow className={iconColor} /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 px-6 border-t bg-transparent transition-colors duration-200 ${
        darkMode
          ? "border-neutral-900 text-white"
          : "border-neutral-200 text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean Section Header without '// 01' */}
        <div className="flex flex-col items-start mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            About Me
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
                <FaTerminal className={`text-xs ${iconColor}`} />
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
                <span className={`font-mono text-[11px] font-semibold ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  READY
                </span>
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

          {/* Right Column: Original Skill Cards with Gray Icons (7 cols) */}
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
