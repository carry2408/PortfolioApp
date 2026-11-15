import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity, FaAward } from "react-icons/fa";

export default function Education({ darkMode }) {
  const educationData = [
    {
      period: "2024 - 2028",
      degree: "B.E. in Computer Science & Engineering",
      institution: "Ramaiah Institute of Technology (MSRIT)",
      location: "Bengaluru, Karnataka",
      grade: "9.0 CGPA",
      gradeLabel: "Current (3rd Year)",
      icon: <FaUniversity className="text-blue-500" />,
      highlights: [
        "Core subjects: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.",
        "Actively developing full-stack web architectures and backend microservices.",
      ],
    },
    {
      period: "2022 - 2024",
      degree: "Pre-University / 12th Grade (PCMC)",
      institution: "G V PU College",
      location: "Karnataka, India",
      grade: "95%",
      gradeLabel: "Distinction",
      icon: <FaGraduationCap className="text-purple-500" />,
      highlights: [
        "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
        "Achieved strong foundational excellence in analytical mathematics and logic.",
      ],
    },
    {
      period: "Passed 2022",
      degree: "Secondary School / 10th Grade",
      institution: "St. Mary's High School",
      location: "Karnataka, India",
      grade: "99%",
      gradeLabel: "Top Performer",
      icon: <FaSchool className="text-emerald-500" />,
      highlights: [
        "Graduated with 99% distinction.",
        "Awarded for outstanding academic achievement across science and mathematics.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3" />
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-700/60 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-10 h-10 rounded-xl border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                  darkMode
                    ? "bg-[#090d16] border-slate-700 shadow-black/40"
                    : "bg-white border-slate-300 shadow-slate-200"
                }`}
              >
                {item.icon}
              </div>

              {/* Card Container */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 group-hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-900/40 border-slate-800/80 group-hover:border-slate-700 group-hover:shadow-lg group-hover:shadow-blue-500/5"
                    : "bg-white border-slate-200 group-hover:border-slate-300 group-hover:shadow-md"
                }`}
              >
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-mono font-semibold text-blue-500 tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                      {item.degree}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.institution} •{" "}
                      <span className="text-xs opacity-80">{item.location}</span>
                    </p>
                  </div>

                  {/* Grade Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <FaAward className="text-xs text-amber-400" />
                    <span className="text-xs font-bold text-blue-400">
                      {item.grade}
                    </span>
                    <span className="text-[10px] text-slate-400 hidden sm:inline">
                      ({item.gradeLabel})
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 mt-4 text-xs sm:text-sm text-slate-400">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span className={darkMode ? "text-slate-300" : "text-slate-600"}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
