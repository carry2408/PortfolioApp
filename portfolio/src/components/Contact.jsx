import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
  FaTerminal,
} from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [copied, setCopied] = useState(false);

  const iconColor = darkMode ? "text-neutral-400" : "text-neutral-600";
  const emailAddress = "veereshvijay24082006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      await axios.post(
        "https://portfolioapp-in0i.onrender.com/contact",
        form
      );
      setStatus({
        message: "Message sent successfully. I will get back to you shortly.",
        type: "success",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        message: "Error delivering message. Please reach out directly via email or LinkedIn.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 border-t transition-colors duration-200 ${
        darkMode ? "bg-black border-neutral-900 text-white" : "bg-neutral-50 border-neutral-200 text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean Header without '// 04' */}
        <div className="flex flex-col items-start mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Endpoints (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-neutral-900"
                }`}
              >
                Let's Connect
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-neutral-400" : "text-neutral-700"
                }`}
              >
                Whether you have an internship opening, backend engineering role, or a project in mind,
                feel free to reach out. I typically respond within 24 hours.
              </p>
            </div>

            {/* Email Copy Card */}
            <div
              className={`p-4 rounded-xl border font-mono transition-colors ${
                darkMode
                  ? "bg-neutral-950 border-neutral-850"
                  : "bg-white border-neutral-300 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className={iconColor} />
                  <div>
                    <p className={`text-[10px] uppercase font-semibold ${darkMode ? "text-neutral-500" : "text-neutral-600"}`}>
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className={`text-xs sm:text-sm font-semibold transition-colors break-all ${
                        darkMode ? "text-neutral-200 hover:text-white" : "text-neutral-900 hover:text-black"
                      }`}
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                    copied
                      ? "border-neutral-500 bg-neutral-800 text-neutral-200 font-medium"
                      : darkMode
                      ? "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700 hover:text-white"
                      : "border-neutral-300 bg-neutral-100 text-neutral-800 hover:border-neutral-400 font-medium"
                  }`}
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-xs" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-xs" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div
                className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-colors ${
                  darkMode ? "bg-neutral-950 border-neutral-850" : "bg-white border-neutral-300 shadow-sm"
                }`}
              >
                <FaMapMarkerAlt className={iconColor} />
                <div>
                  <p className={`text-[10px] ${darkMode ? "text-neutral-500" : "text-neutral-600"}`}>Location</p>
                  <p className={`font-semibold ${darkMode ? "text-neutral-300" : "text-neutral-900"}`}>
                    Bengaluru, IN
                  </p>
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-colors ${
                  darkMode ? "bg-neutral-950 border-neutral-850" : "bg-white border-neutral-300 shadow-sm"
                }`}
              >
                <FaClock className={iconColor} />
                <div>
                  <p className={`text-[10px] ${darkMode ? "text-neutral-500" : "text-neutral-600"}`}>Response</p>
                  <p className={`font-semibold ${darkMode ? "text-neutral-300" : "text-neutral-900"}`}>
                    &lt; 24 Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className={`pt-4 border-t ${darkMode ? "border-neutral-900" : "border-neutral-200"}`}>
              <p className={`font-mono text-xs mb-3 ${darkMode ? "text-neutral-500" : "text-neutral-600 font-semibold"}`}>
                profiles:
              </p>
              <div className="flex gap-3 font-mono text-xs">
                <a
                  href="https://github.com/carry2408"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-colors ${
                    darkMode
                      ? "border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700 hover:text-white"
                      : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 font-medium shadow-xs"
                  }`}
                >
                  <FaGithub className={iconColor} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-colors ${
                    darkMode
                      ? "border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700 hover:text-white"
                      : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 font-medium shadow-xs"
                  }`}
                >
                  <FaLinkedin className={iconColor} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div
              className={`p-6 sm:p-7 rounded-xl border transition-colors ${
                darkMode ? "bg-neutral-950 border-neutral-850" : "bg-white border-neutral-300 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-5">
                <FaTerminal className={iconColor} />
                <span className={darkMode ? "text-neutral-500" : "text-neutral-600"}>POST /api/contact</span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block font-mono text-xs mb-1.5 ${
                      darkMode ? "text-neutral-400" : "text-neutral-700 font-semibold"
                    }`}
                  >
                    name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
                      darkMode
                        ? "bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                        : "bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block font-mono text-xs mb-1.5 ${
                      darkMode ? "text-neutral-400" : "text-neutral-700 font-semibold"
                    }`}
                  >
                    email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
                      darkMode
                        ? "bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                        : "bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block font-mono text-xs mb-1.5 ${
                      darkMode ? "text-neutral-400" : "text-neutral-700 font-semibold"
                    }`}
                  >
                    message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message or project inquiry..."
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors resize-none ${
                      darkMode
                        ? "bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus:border-neutral-600"
                        : "bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-500"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-lg font-mono font-semibold text-xs text-white flex items-center justify-center gap-2 transition-colors ${
                    loading
                      ? "bg-blue-600/70 cursor-wait"
                      : "bg-blue-600 hover:bg-blue-500"
                  }`}
                >
                  {loading ? (
                    <span>Transmitting payload...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status.message && (
                  <div
                    className={`p-3.5 rounded-lg font-mono text-xs border ${
                      status.type === "success"
                        ? "bg-neutral-900 border-neutral-700 text-neutral-200 font-medium"
                        : "bg-neutral-900 border-neutral-700 text-neutral-200 font-medium"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
