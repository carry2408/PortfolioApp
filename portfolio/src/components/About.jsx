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
} from "react-icons/fa";

import {
    SiMongodb,
    SiMysql,
    SiSpring,
    SiHibernate,
    SiTensorflow,
} from "react-icons/si";

export default function About({ darkMode }) {
    return (
        <section
            id="about"
            className={
                "min-h-screen px-6 py-20 " +
                (darkMode ? "bg-black text-white" : "bg-white text-black")
            }
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                {/* About */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-6">
                        About Me
                    </h2>

                    <p
                        className={
                            (darkMode ? "text-gray-400" : "text-gray-600") +
                            " leading-relaxed mb-4"
                        }
                    >
                        I am a passionate Full Stack Developer focused on building modern web applications using React for the frontend and Java with Spring Framework for the backend. I enjoy solving problems and continuously improving my skills in Data Structures and Algorithms.
                    </p>

                    <p
                        className={
                            (darkMode ? "text-gray-400" : "text-gray-600") +
                            " leading-relaxed"
                        }
                    >
                        I am currently pursuing my degree in Computer Science
                        and actively building real-world projects. I am also
                        exploring Data Science and AI/ML to expand my
                        technical expertise.
                    </p>
                </motion.div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-6">

                    <SkillCard title="Frontend" darkMode={darkMode}>
                        <Skill icon={<FaHtml5 />} name="HTML" />
                        <Skill icon={<FaCss3Alt />} name="CSS" />
                        <Skill icon={<FaJs />} name="JavaScript" />
                        <Skill icon={<FaReact />} name="React" />
                    </SkillCard>

                    <SkillCard title="Backend" darkMode={darkMode}>
                        <Skill icon={<SiSpring />} name="Spring" />
                        <Skill icon={<SiSpring />} name="Spring Boot" />
                        <Skill icon={<SiHibernate />} name="Hibernate" />
                        <Skill icon={<FaDatabase />} name="Spring Security" />
                        <Skill icon={<FaDatabase />} name="ORM" />
                    </SkillCard>

                    <SkillCard title="Database" darkMode={darkMode}>
                        <Skill icon={<SiMongodb />} name="MongoDB" />
                        <Skill icon={<SiMysql />} name="SQL" />
                    </SkillCard>

                    <SkillCard title="Programming" darkMode={darkMode}>
                        <Skill icon={<FaJava />} name="Java" />
                        <Skill icon={<FaJs />} name="DSA" />
                    </SkillCard>

                    <SkillCard title="Tools" darkMode={darkMode}>
                        <Skill icon={<FaGitAlt />} name="Git" />
                        <Skill icon={<FaGithub />} name="GitHub" />
                    </SkillCard>

                    <SkillCard title="Learning" darkMode={darkMode}>
                        <Skill icon={<SiTensorflow />} name="AI / ML" />
                    </SkillCard>

                </div>
            </div>
        </section>
    );
}

function SkillCard({ title, children, darkMode }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className={
                "border rounded-xl p-4 " +
                (darkMode ? "border-gray-700" : "border-gray-300")
            }
        >
            <h3 className="font-medium mb-3">
                {title}
            </h3>

            <div
                className={
                    "flex flex-col gap-2 text-sm " +
                    (darkMode ? "text-gray-400" : "text-gray-600") +
                    " leading-relaxed"
                }
            >
                {children}
            </div>
        </motion.div>
    );
}

function Skill({ icon, name }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08, x: 4 }}
            transition={{
                type: "spring",
                stiffness: 300,
            }}
            className="flex items-center gap-2 cursor-pointer"
        >
            <span className="text-lg">
                {icon}
            </span>

            <span>{name}</span>
        </motion.div>
    );
}

