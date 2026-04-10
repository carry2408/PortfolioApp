import { motion } from "framer-motion";

export default function Education({ darkMode }) {
  return (
    <section
      id="education"
      className={`px-6 py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Education</h2>

        <div className="relative border-l border-gray-600">

          {/* 10th */}
          <TimelineItem
            year="2022"
            title="10th Grade"
            subtitle="St Mary's School"
            detail="Percentage: 99%"
          />

          {/* 12th */}
          <TimelineItem
            year="2024"
            title="12th Grade"
            subtitle="G V PU College"
            detail="Percentage: 95%"
          />

          {/* UG */}
          <TimelineItem
            year="2024 - 2028"
            title="B.E. Computer Science"
            subtitle="MS Ramaiah Institute, Bangalore"
            detail="CGPA: 9.2 (Current - 2nd Year)"
          />

        </div>
      </div>
    </section>
  );
}

/* reusable timeline item */
function TimelineItem({ year, title, subtitle, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.03, x: 6 }}
      transition={{ duration: 0.3 }}
      className="relative mb-10 ml-6 cursor-pointer"
    >
      {/* dot */}
      <span className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></span>

      <p className="text-sm text-gray-400">{year}</p>

      <h3 className="text-lg font-medium">{title}</h3>

      <p className="text-gray-400">{subtitle}</p>

      <p className="text-gray-500 text-sm">{detail}</p>
    </motion.div>
  );
}