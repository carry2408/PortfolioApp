import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`px-6 py-10 border-t ${
        darkMode
          ? "bg-black text-white border-white/10"
          : "bg-white text-black border-black/10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* left side */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Veeresh Patil
        </p>

        {/* middle - navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>

        
      </div>
    </footer>
  );
}