import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

export default function Projects({ darkMode }) {
  const [filter, setFilter] = useState("all");

  const iconColor = darkMode ? "text-neutral-400" : "text-neutral-600";

  const projects = [
    {
      title: "TaskFlow - Agile Management Platform",
      category: "backend",
      desc: "Full-stack Jira-inspired agile project management and issue-tracking platform featuring Kanban boards, sprint lifecycle management, team collaboration, and role-based access control.",
      tech: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "JWT Auth", "React"],
      img: "/taskflow.png",
      github: "https://github.com/carry2408/TaskFlow",
      live: "#",
    },
    {
      title: "BloodBridge - Blood Donation System",
      category: "backend",
      desc: "Full-stack blood donation camp management platform to streamline donor registration, volunteer coordination, and real-time inventory management.",
      tech: ["Spring Boot", "PostgreSQL", "JWT Auth", "React", "JavaScript"],
      img: "/bloodbridge.png",
      github: "https://github.com/carry2408/BloodBridge",
      live: "https://blood-bridge-blood-donation.vercel.app/",
    },
    {
      title: "Hostel Room Allotment Engine",
      category: "backend",
      desc: "Database-driven web application to automate student hostel room allocations, warden approvals, and occupancy tracking.",
      tech: ["Node.js", "Express", "SQL", "React"],
      img: "/hostel.png",
      github: "https://github.com/carry2408/Hostel-Allotment",
      live: "https://hostel-allotment-two.vercel.app/",
    },
    {
      title: "Airbnb Clone Architecture",
      category: "backend",
      desc: "Full stack clone with user authentication, relational listings schema, and booking workflow.",
      tech: ["React", "Node.js", "Express", "SQL"],
      img: "/airbnb.png",
      github: "https://github.com/carry2408/AIRBNB-CLONE-PROJECT",
      live: "#",
    },
    {
      title: "Real-Time Weather App",
      category: "frontend",
      desc: "Weather application integrating OpenWeather REST APIs for live forecasting, geolocation search, and metric visualizations.",
      tech: ["React", "REST API", "Tailwind CSS"],
      img: "/weather.png",
      github: "https://github.com/carry2408/React-Weather-App",
      live: "https://react-weather-app-eight-hazel.vercel.app/",
    },
    {
      title: "Personal Portfolio Website",
      category: "frontend",
      desc: "Clean, responsive developer portfolio built with React and Tailwind CSS featuring a black backend engineer aesthetic.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      img: "/portfolio.png",
      github: "https://github.com/carry2408/PortfolioApp",
      live: "#",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "backend") return p.category === "backend";
    if (filter === "frontend") return p.category === "frontend";
    return true;
  });

  return (
    <section
      id="projects"
      className={`py-24 px-6 border-t transition-colors duration-200 ${
        darkMode ? "bg-black border-neutral-900 text-white" : "bg-neutral-50 border-neutral-200 text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean Header & Filter Controls without '// 03' */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? "text-white" : "text-neutral-900"
              }`}
            >
              Projects
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex items-center gap-2 font-mono text-xs">
            {[
              { id: "all", label: "all" },
              { id: "backend", label: "backend & fullstack" },
              { id: "frontend", label: "frontend" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-md border transition-colors ${
                  filter === tab.id
                    ? "bg-blue-600 border-blue-500 text-white font-semibold"
                    : darkMode
                    ? "border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white"
                    : "border-neutral-300 bg-white text-neutral-700 hover:text-black font-medium"
                }`}
              >
                [{tab.label}]
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} darkMode={darkMode} index={i} iconColor={iconColor} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, darkMode, index, iconColor }) {
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`rounded-xl border flex flex-col justify-between overflow-hidden transition-colors ${
        darkMode
          ? "bg-neutral-950 border-neutral-850 hover:border-neutral-700"
          : "bg-white border-neutral-300 hover:border-neutral-400 shadow-sm"
      }`}
    >
      <div>
        {/* Terminal Header bar */}
        <div className={`px-4 py-2 border-b flex items-center justify-between font-mono text-xs ${
          darkMode ? "border-neutral-850 bg-neutral-900/60 text-neutral-400" : "border-neutral-200 bg-neutral-100 text-neutral-700"
        }`}>
          <span className="flex items-center gap-2">
            <FaFolder className={iconColor} />
            <span className="truncate max-w-[180px]">{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
          </span>
          <span className="text-[10px] uppercase font-semibold text-neutral-500">
            {project.category}
          </span>
        </div>

        {/* Project Image */}
        <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-90 transition duration-300 hover:opacity-100"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className={`font-bold text-base tracking-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            {project.title}
          </h3>

          <p className={`mt-2 text-xs leading-relaxed line-clamp-3 ${
            darkMode ? "text-neutral-400" : "text-neutral-700"
          }`}>
            {project.desc}
          </p>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-1.5 mt-4 font-mono text-[11px]">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className={`px-2 py-0.5 rounded border ${
                  darkMode
                    ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                    : "border-neutral-300 bg-neutral-100 text-neutral-800 font-medium"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className={`p-4 border-t flex items-center gap-3 font-mono text-xs ${
        darkMode ? "border-neutral-850 bg-neutral-950" : "border-neutral-200 bg-neutral-50"
      }`}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg border transition-colors ${
            darkMode
              ? "border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-200"
              : "border-neutral-300 bg-white hover:border-neutral-400 text-neutral-800 font-medium shadow-xs"
          }`}
        >
          <FaGithub className={iconColor} />
          <span>GitHub</span>
        </a>

        {hasLive ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        ) : (
          <span className={`flex-1 inline-flex items-center justify-center py-2 rounded-lg border text-[11px] cursor-not-allowed ${
            darkMode ? "border-neutral-900 bg-neutral-900/40 text-neutral-500" : "border-neutral-300 bg-neutral-100 text-neutral-500"
          }`}>
            Code Only
          </span>
        )}
      </div>
    </motion.div>
  );
}
