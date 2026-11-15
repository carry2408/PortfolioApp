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
  FaServer,
  FaTerminal,
  FaMicrochip,
  FaNetworkWired,
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
  SiLinux,
} from "react-icons/si";

export default function About({ darkMode }) {
  const skillCategories = [
    {
      title: "Backend & Microservices",
      icon: <FaServer className="text-emerald-500" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-amber-500" /> },
        { name: "Spring Boot", icon: <SiSpring className="text-emerald-500" /> },
        { name: "Spring Security", icon: <FaDatabase className="text-teal-400" /> },
        { name: "Hibernate / JPA", icon: <SiHibernate className="text-yellow-600" /> },
        { name: "RESTful APIs", icon: <FaNetworkWired className="text-blue-400" /> },
      ],
    },
    {
      title: "Databases & In-Memory Store",
      icon: <FaDatabase className="text-sky-400" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      ],
    },
    {
      title: "DevOps & Toolchain",
      icon: <FaTerminal className="text-purple-400" />,
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-neutral-300" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Linux", icon: <SiLinux className="text-yellow-400" /> },
      ],
    },
    {
      title: "Frontend Integration",
      icon: <FaReact className="text-cyan-400" />,
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      title: "CS Fundamentals & Exploring",
      icon: <FaMicrochip className="text-rose-400" />,
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaTerminal className="text-purple-400" /> },
        { name: "OOP & System Design", icon: <FaJava className="text-amber-500" /> },
        { name: "AI / ML Foundations", icon: <SiTensorflow className="text-amber-500" /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 px-6 border-t ${
        darkMode ? "bg-black border-neutral-900 text-white" : "bg-neutral-50 border-neutral-200 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-500 mb-1">
            // 01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Background & Tech Stack
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
                  : "bg-white border-neutral-200 text-neutral-700"
              }`}
            >
              <h3 className="font-mono text-base font-bold text-white mb-3 flex items-center gap-2">
                <FaTerminal className="text-xs text-blue-500" />
                <span>engineering_profile.md</span>
              </h3>

              <p className="text-sm leading-relaxed mb-4">
                I am a Computer Science student with a strong focus on backend engineering.
                I enjoy architecting reliable server-side software, building RESTful web services
                with <span className="text-white font-medium">Java and Spring Boot</span>, and structuring
                efficient relational database schemas.
              </p>

              <p className="text-sm leading-relaxed mb-4">
                On the frontend, I create responsive, interactive UIs using <span className="text-white font-medium">React and Tailwind CSS</span>.
                I have a solid foundation in Data Structures and Algorithms, object-oriented design,
                and microservice patterns.
              </p>

              <p className="text-sm leading-relaxed">
                Currently looking for software engineering internship and full-time opportunities
                where I can solve demanding backend problems and build impactful software.
              </p>
            </div>

            {/* System Specs Box (Terminal style) */}
            <div
              className={`p-5 rounded-xl border font-mono text-xs ${
                darkMode ? "bg-neutral-950 border-neutral-850 text-neutral-400" : "bg-white border-neutral-200 text-neutral-600"
              }`}
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <span className="text-neutral-500">SYSTEM SPECIFICATIONS</span>
                <span className="text-emerald-500 font-bold">READY</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">primary_lang:</span>
                  <span className="text-neutral-200">Java 21 / JavaScript</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">framework:</span>
                  <span className="text-neutral-200">Spring Boot 3.x / React</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">databases:</span>
                  <span className="text-neutral-200">PostgreSQL, MySQL, Redis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">institution:</span>
                  <span className="text-neutral-200">Ramaiah Institute of Tech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">location:</span>
                  <span className="text-neutral-200">Bengaluru, IN</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skill Cards (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`p-5 rounded-xl border transition-colors ${
                  idx === skillCategories.length - 1 ? "sm:col-span-2" : ""
                } ${
                  darkMode
                    ? "bg-neutral-950 border-neutral-850 hover:border-neutral-700"
                    : "bg-white border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{category.icon}</span>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-300">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs font-medium ${
                        darkMode
                          ? "bg-neutral-900 border-neutral-800 text-neutral-300"
                          : "bg-neutral-100 border-neutral-200 text-neutral-800"
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
