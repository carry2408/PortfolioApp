import { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/contact", form);
      setStatus("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error sending message");
    }
  };

  return (
    <section
      id="contact"
      className={`px-6 py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>

          <p className="text-gray-400 mb-6">
            If you have a project idea or just want to connect, feel free to
            send me a message.
          </p>

          {/* email */}
          <div className="group flex items-center gap-3 mb-4 transition-transform duration-300 hover:translate-x-2">
            <FaEnvelope />
            <span className="text-gray-400 transition-colors duration-300 group-hover:text-blue-400">
              veereshvijay24082006@gmail.com
            </span>
          </div>

          {/* social links */}
          <div className="flex gap-4 text-xl mt-4">
            <a
              href="https://github.com/carry2408"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
            darkMode
              ? "border-gray-700 bg-white/5 hover:border-blue-500/50 hover:shadow-blue-500/10"
              : "border-gray-200 bg-white/80 hover:border-blue-400/60 hover:shadow-blue-200/70"
          }`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={`rounded-xl border p-3 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 focus:-translate-y-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
              darkMode
                ? "border-gray-700 bg-white/5 placeholder:text-gray-500"
                : "border-gray-300 bg-white placeholder:text-gray-500"
            }`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={`rounded-xl border p-3 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 focus:-translate-y-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
              darkMode
                ? "border-gray-700 bg-white/5 placeholder:text-gray-500"
                : "border-gray-300 bg-white placeholder:text-gray-500"
            }`}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className={`rounded-xl border p-3 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 focus:-translate-y-1 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
              darkMode
                ? "border-gray-700 bg-white/5 placeholder:text-gray-500"
                : "border-gray-300 bg-white placeholder:text-gray-500"
            }`}
            rows="5"
            required
          />

          <button
            type="submit"
            className="rounded-full border border-blue-500 py-3 text-blue-500 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-gray-400">{status}</p>
          )}
        </form>

      </div>
    </section>
  );
}
