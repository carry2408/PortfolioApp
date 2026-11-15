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
        message: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
        type: "success",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        message: "Failed to send message. Please reach out directly via email or LinkedIn.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build Something Great
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-3" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Have a project or open role?
              </h3>
              <p
                className={`leading-relaxed text-sm sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I am actively seeking software engineering internships, entry-level full-stack positions,
                and freelance development opportunities. Feel free to shoot me a message or connect directly.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3">
              {/* Copyable Email Box */}
              <div
                className={`p-4 rounded-2xl border transition-all duration-200 ${
                  darkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Direct Email</p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-xs sm:text-sm font-semibold hover:text-blue-500 transition-colors break-all"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className={`p-2 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 ${
                      copied
                        ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                        : darkMode
                        ? "border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700"
                        : "border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-emerald-400" />
                        <span className="hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Response Time */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    darkMode ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Location</p>
                    <p className="text-xs font-semibold">Bengaluru, IN</p>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    darkMode ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Response</p>
                    <p className="text-xs font-semibold">&lt; 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="pt-4 border-t border-slate-800/40">
              <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                Connect on professional platforms
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/carry2408"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/veereshvijay-patil-944b39340"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <FaLinkedin className="text-base text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                darkMode
                  ? "bg-slate-900/50 border-slate-800 backdrop-blur-xl shadow-black/40"
                  : "bg-white border-slate-200 backdrop-blur-xl shadow-slate-200/60"
              }`}
            >
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
                      darkMode
                        ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="e.g. alex@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 ${
                      darkMode
                        ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your idea, project, or role..."
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 resize-none ${
                      darkMode
                        ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2.5 shadow-lg transition-all duration-200 ${
                    loading
                      ? "bg-blue-600/70 cursor-wait"
                      : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Feedback Notification */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs sm:text-sm font-medium border ${
                      status.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
