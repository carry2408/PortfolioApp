import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaStar } from "react-icons/fa";

export default function Projects({ darkMode }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "TaskFlow - Agile Project Management",
      category: "fullstack",
      featured: true,
      desc: "Full-stack Jira-inspired agile project management and issue-tracking platform featuring Kanban boards, sprint lifecycle management, team collaboration, and role-based access control.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Redis", "Docker", "Tailwind CSS", "JWT Auth"],
      img: "/taskflow.png",
      github: "https://github.com/carry2408/TaskFlow",
      live: "#",
    },
    {
      title: "BloodBridge - Blood Donation Platform",
      category: "fullstack",
      featured: true,
      desc: "Full-stack blood donation camp management platform to streamline donor registration, volunteer coordination, and real-time inventory management.",
      tech: ["React", "JavaScript", "Spring Boot", "PostgreSQL", "JWT Authentication"],
      img: "/bloodbridge.png",
      github: "https://github.com/carry2408/BloodBridge",
      live: "https://blood-bridge-blood-donation.vercel.app/",
    },
    {
      title: "Hostel Room Allotment System",
      category: "fullstack",
      featured: false,
      desc: "Comprehensive database-driven web application to automate student hostel room allocations, warden approvals, and occupancy tracking.",
      tech: ["React", "Node.js", "Express", "SQL", "Tailwind"],
      img: "/hostel.png",
      github: "https://github.com/carry2408/Hostel-Allotment",
      live: "https://hostel-allotment-two.vercel.app/",
    },
    {
      title: "Airbnb Full-Stack Experience",
      category: "fullstack",
      featured: false,
      desc: "Interactive stay-booking platform clone with user authentication, property listings, dynamic filtering, and reservation workflow.",
      tech: ["React", "Node.js", "Express", "SQL"],
      img: "/airbnb.png",
      github: "https://github.com/carry2408/AIRBNB-CLONE-PROJECT",
      live: "#",
    },
    {
      title: "Real-Time Weather App",
      category: "frontend",
      featured: false,
      desc: "Clean responsive weather dashboard consuming OpenWeather APIs, featuring atmospheric forecasts, location search, and visual condition graphs.",
      tech: ["React", "REST API", "Tailwind CSS"],
      img: "/weather.png",
      github: "https://github.com/carry2408/React-Weather-App",
      live: "https://react-weather-app-eight-hazel.vercel.app/",
    },
    {
      title: "Interactive Developer Portfolio",
      category: "frontend",
      featured: false,
      desc: "Modern responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion, featuring smooth animations and dynamic dark mode.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      img: "/portfolio.png",
      github: "https://github.com/carry2408/PortfolioApp",
      live: "#",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "fullstack") return p.category === "fullstack";
    if (filter === "frontend") return p.category === "frontend";
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3 mb-6" />

          {/* Category Filter Pills */}
          <div
            className={`inline-flex p-1.5 rounded-2xl border ${
              darkMode
                ? "bg-slate-900/60 border-slate-800"
                : "bg-slate-100 border-slate-200"
            }`}
          >
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full Stack & Java" },
              { id: "frontend", label: "Frontend & Web" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} darkMode={darkMode} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* Individual Project Card */
function ProjectCard({ project, darkMode, index }) {
  const hasLive = project.live && project.live !== "#";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-blue-500/5"
          : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
      }`}
    >
      {/* Project Image & Badge Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold shadow-md">
            <FaStar className="text-[10px] text-amber-300" />
            <span>Featured</span>
          </div>
        )}

        {/* Live Status indicator */}
        <div className="absolute top-3 right-3">
          {hasLive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live Demo
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-300 text-[10px] font-medium border border-slate-700/60">
              <FaLayerGroup className="text-[9px]" />
              Repository
            </span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight group-hover:text-blue-500 transition-colors duration-200">
            {project.title}
          </h3>

          <p
            className={`mt-2.5 text-xs sm:text-sm line-clamp-3 leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {project.desc}
          </p>
        </div>

        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-medium border ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/60 text-slate-300"
                    : "bg-slate-100 border-slate-200 text-slate-700"
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Link Buttons */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/40">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                darkMode
                  ? "border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-200 hover:text-white"
                  : "border-slate-300 hover:border-slate-400 hover:bg-slate-100 text-slate-800"
              }`}
            >
              <FaGithub className="text-sm" />
              <span>Source</span>
            </a>

            {hasLive ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition-all duration-200"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            ) : (
              <span
                className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium cursor-not-allowed border ${
                  darkMode
                    ? "border-slate-800/60 text-slate-500 bg-slate-900/30"
                    : "border-slate-200 text-slate-400 bg-slate-50"
                }`}
                title="Live preview currently in deployment"
              >
                <span>Code Only</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
