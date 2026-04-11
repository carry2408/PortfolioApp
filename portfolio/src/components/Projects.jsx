import { motion } from "framer-motion";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Hostel Room Allotment",
      desc: "MERN based system for managing hostel room allocation.",
      tech: ["React", "Node.js", "Express", "SQL"],
      img: "/hostel.png",
      github: "https://github.com/carry2408/Hostel-Allotment",
      live: "https://hostel-allotment-two.vercel.app/",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind"],
      img: "/portfolio.png",
      github: "https://github.com/carry2408/PortfolioApp",
      live: "#",
    },
    {
      title: "Airbnb Clone",
      desc: "Full stack clone with authentication and listings.",
      tech: ["React", "Node.js", "Express", "SQL"],
      img: "/airbnb.png",
      github: "https://github.com/carry2408/AIRBNB-CLONE-PROJECT",
      live: "#",
    },
    {
      title: "Weather App",
      desc: "Weather app using API with real-time data.",
      tech: ["React", "API"],
      img: "/weather.png",
      github: "https://github.com/carry2408/React-Weather-App",
      live: "https://react-weather-app-eight-hazel.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className={`px-6 py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* project card */
function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group border border-gray-700 rounded-xl overflow-hidden"
    >
      {/* image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.img}
          alt="project"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 border rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
          >
            Live
          </a>
        </div>
      </div>

      {/* content */}
      <div className="p-4">
        <h3 className="text-lg font-medium">{project.title}</h3>

        <p className="text-sm text-gray-400 mt-2">
          {project.desc}
        </p>

        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs border border-gray-600 px-2 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}