import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero({ darkMode }) {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer | MERN Stack";

  // simple typing effect
  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, i));
        i++;

        if (i > fullText.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1200); // pause
          return;
        }

        timeout = setTimeout(type, 80);
      } else {
        i--;
        setText(fullText.substring(0, i));

        if (i === 0) {
          isDeleting = false;
          timeout = setTimeout(type, 400);
          return;
        }

        timeout = setTimeout(type, 40);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [fullText]);
  fullText
  Text

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center px-6 ${darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="profile"
            className="w-60 h-60 object-cover rounded-full border-4 border-gray-500"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>Hi, I am</p>

          {/* gradient name */}
          <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Veeresh Patil
          </h1>

          {/* typing text */}
          <h2 className={`text-lg mt-3 font-medium ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </h2>

          <p className={`mt-4 max-w-md ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
            Turning ideas into real-world web applications.
          </p>

          {/* buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className={`px-6 py-2 border rounded-full transition ${darkMode
                ? "hover:bg-gray-200 hover:text-black"
                : "hover:bg-gray-300 hover:text-black"
                }`}
            >
              Contact
            </a>
          </div>

          {/* social icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <a href="https://github.com/carry2408" target="_blank">
              <FaGithub className="hover:text-blue-500 cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/in/veereshvijay-patil-944b39340" target="_blank">
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}