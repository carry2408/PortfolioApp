import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiTensorflow } from "react-icons/si";

export default function About({ darkMode }) {
    return (
        <section
            id="about"
            className={`min-h-screen px-6 py-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                {/* LEFT SIDE - ABOUT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6">About Me</h2>

                    <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                        I am a passionate Full Stack Developer focused on building modern web applications
                        using the MERN stack. I enjoy solving problems and continuously improving my skills
                        in Data Structures and Algorithms.
                    </p>

                    <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                        I am currently pursuing my degree in Computer Science and actively building
                        real-world projects. I am also exploring Data Science and AI/ML to expand my
                        technical expertise.
                    </p>
                </motion.div>

                {/* RIGHT SIDE - SKILLS */}
                <div className="grid grid-cols-2 gap-6">

                    {/* FRONTEND */}
                    <SkillCard title="Frontend" darkMode={darkMode}>
                        <Skill icon={<FaHtml5 />} name="HTML" />
                        <Skill icon={<FaCss3Alt />} name="CSS" />
                        <Skill icon={<FaJs />} name="JavaScript" />
                        <Skill icon={<FaReact />} name="React" />
                    </SkillCard>

                    {/* BACKEND */}
                    <SkillCard title="Backend" darkMode={darkMode}>
                        <Skill icon={<FaNodeJs />} name="Node.js" />
                        <Skill icon={<SiExpress />} name="Express" />
                    </SkillCard>

                    {/* DATABASE */}
                    <SkillCard title="Database" darkMode={darkMode}>
                        <Skill icon={<SiMongodb />} name="MongoDB" />
                        <Skill icon={<SiMysql />} name="SQL" />
                    </SkillCard>

                    {/* PROGRAMMING */}
                    <SkillCard title="Programming" darkMode={darkMode}>
                        <Skill icon={<FaJava />} name="Java" />
                        <Skill icon={<FaJs />} name="DSA" />
                    </SkillCard>

                    {/* TOOLS */}
                    <SkillCard title="Tools" darkMode={darkMode}>
                        <Skill icon={<FaGitAlt />} name="Git" />
                        <Skill icon={<FaGithub />} name="GitHub" />
                    </SkillCard>

                    {/* LEARNING */}
                    <SkillCard title="Learning" darkMode={darkMode}>
                        <Skill icon={<SiTensorflow />} name="AI / ML" />
                    </SkillCard>

                </div>
            </div>
        </section>
    );
}

/* reusable card */
function SkillCard({ title, children, darkMode }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-xl p-4"
        >
            <h3 className="font-medium mb-3">{title}</h3>
            <div className={`flex flex-col gap-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                {children}
            </div>
        </motion.div>
    );
}

/* single skill row */


function Skill({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, x: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 cursor-pointer"
    >
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
    </motion.div>
  );
}