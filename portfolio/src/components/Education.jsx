import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

export default function Education({ darkMode }) {
  const iconColor = darkMode ? "text-neutral-400" : "text-neutral-600";

  const educationData = [
    {
      period: "2024 - 2028",
      degree: "B.E. in Computer Science & Engineering",
      institution: "Ramaiah Institute of Technology (MSRIT)",
      location: "Bengaluru, Karnataka",
      grade: "CGPA: 9.0",
      status: "Current (3rd Year)",
      icon: <FaUniversity className={iconColor} />,
      details: "Focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and Backend Engineering.",
    },
    {
      period: "2022 - 2024",
      degree: "Pre-University / 12th Grade (PCMC)",
      institution: "G V PU College",
      location: "Karnataka, India",
      grade: "Percentage: 95%",
      status: "Distinction",
      icon: <FaGraduationCap className={iconColor} />,
      details: "Specialized in Physics, Chemistry, Mathematics, and Computer Science with academic excellence.",
    },
    {
      period: "2022",
      degree: "Secondary School / 10th Grade",
      institution: "St. Mary's High School",
      location: "Karnataka, India",
      grade: "Percentage: 99%",
      status: "Top Distinction",
      icon: <FaSchool className={iconColor} />,
      details: "Graduated with 99% distinction, recognized for outstanding academic performance across all disciplines.",
    },
  ];

  return (
    <section
      id="education"
      className={`py-24 px-6 border-t transition-colors duration-200 ${
        darkMode ? "bg-black border-neutral-900 text-white" : "bg-white border-neutral-200 text-neutral-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Clean Header without '// 02' */}
        <div className="flex flex-col items-start mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className={`relative pl-6 sm:pl-8 border-l ml-4 sm:ml-6 space-y-10 ${
          darkMode ? "border-neutral-800" : "border-neutral-300"
        }`}>
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              {/* Timeline Node */}
              <div
                className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-9 h-9 rounded-lg border flex items-center justify-center ${
                  darkMode
                    ? "bg-neutral-950 border-neutral-800"
                    : "bg-white border-neutral-300 shadow-sm"
                }`}
              >
                {item.icon}
              </div>

              {/* Card Container */}
              <div
                className={`p-6 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-neutral-950 border-neutral-850 hover:border-neutral-700"
                    : "bg-neutral-50 border-neutral-300 hover:border-neutral-400 shadow-sm"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="font-mono text-xs text-blue-500 font-semibold">
                      {item.period}
                    </span>
                    <h3
                      className={`text-lg font-bold mt-0.5 ${
                        darkMode ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      {item.degree}
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                      {item.institution} • <span className="text-xs">{item.location}</span>
                    </p>
                  </div>

                  {/* Monospace Grade Badge */}
                  <div className={`font-mono text-xs px-3 py-1 rounded-md border ${
                    darkMode ? "border-neutral-800 bg-neutral-900 text-neutral-300" : "border-neutral-300 bg-white text-neutral-900 font-medium"
                  }`}>
                    <span className="text-blue-500 font-bold">{item.grade}</span>
                    <span className={`ml-1.5 ${darkMode ? "text-neutral-500" : "text-neutral-600"}`}>
                      ({item.status})
                    </span>
                  </div>
                </div>

                <p className={`mt-3 text-sm leading-relaxed ${
                  darkMode ? "text-neutral-400" : "text-neutral-700"
                }`}>
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
