import { useState, useEffect, useRef, useCallback } from "react";
import { FiAward, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

const certificates = [
  {
    id: 1,
    title: "Exploring Networking with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    file: "/certificates/cisco_networking.pdf",
    type: "pdf",
  },
  {
    id: 2,
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    file: "/certificates/cisco_packet_tracer.pdf",
    type: "pdf",
  },
  {
    id: 3,
    title: "Young Turks 26 — Round 1 Achievement",
    issuer: "Ramaiah Institute of Technology",
    file: "/certificates/young_turks_round1.pdf",
    type: "pdf",
  },
  {
    id: 4,
    title: "Java & Hibernate",
    issuer: "Course Certification",
    file: "/certificates/java_hibernate.pdf",
    type: "pdf",
  },
  {
    id: 5,
    title: "Discrete Mathematics",
    issuer: "NPTEL / Course Certification",
    file: "/certificates/discrete_mathematics.pdf",
    type: "pdf",
  },
  {
    id: 6,
    title: "Database Management Systems (DBMS)",
    issuer: "NPTEL",
    file: "/certificates/nptel_dbms.pdf",
    type: "pdf",
  },
  {
    id: 7,
    title: "Data Communication & Networks",
    issuer: "Course Certification",
    file: "/certificates/dcn_certificate.pdf",
    type: "pdf",
  },
  {
    id: 8,
    title: "22 Yards of Code — Certificate of Participation",
    issuer: "CodeRIT, Ramaiah Institute of Technology",
    file: "/certificates/22yards_of_code.png",
    type: "image",
  },
];

export default function Certifications({ darkMode }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const intervalRef = useRef(null);

  const total = certificates.length;

  const goTo = useCallback(
    (index, dir = "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((index + total) % total);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, total]
  );

  const next = useCallback(() => goTo(current + 1, "right"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "left"), [current, goTo]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 4000);
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i) => { goTo(i, i > current ? "right" : "left"); resetTimer(); };

  const cert = certificates[current];

  const slideClass = isAnimating
    ? direction === "right"
      ? "opacity-0 translate-x-4"
      : "opacity-0 -translate-x-4"
    : "opacity-100 translate-x-0";

  return (
    <section
      id="certifications"
      className={`py-20 px-6 bg-transparent transition-colors duration-200 ${
        darkMode ? "text-white" : "text-neutral-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <FiAward
              className={`text-base ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
            />
            <span
              className={`font-mono text-xs uppercase tracking-widest font-semibold ${
                darkMode ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Certifications
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-neutral-900"
            }`}
          >
            Credentials & Achievements
          </h2>
          <div
            className={`mt-2 h-px w-16 ${
              darkMode ? "bg-neutral-700" : "bg-neutral-300"
            }`}
          />
        </div>

        {/* Carousel */}
        <div className="relative select-none">

          {/* Square Card */}
          <div
            className={`relative w-full aspect-[16/9] rounded-lg border overflow-hidden transition-all duration-300 ${slideClass} ${
              darkMode
                ? "bg-neutral-950 border-neutral-800"
                : "bg-neutral-50 border-neutral-200"
            }`}
          >
            {cert.type === "image" ? (
              <img
                src={cert.file}
                alt={cert.title}
                className="w-full h-full object-contain p-4"
              />
            ) : (
              <iframe
                src={`${cert.file}#view=FitH&toolbar=0&navpanes=0`}
                title={cert.title}
                className="w-full h-full"
                frameBorder="0"
              />
            )}

            {/* Bottom overlay strip */}
            <div
              className={`absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between ${
                darkMode
                  ? "bg-neutral-950/90 border-t border-neutral-800"
                  : "bg-white/90 border-t border-neutral-200"
              }`}
            >
              <div>
                <p
                  className={`text-sm font-semibold truncate ${
                    darkMode ? "text-neutral-100" : "text-neutral-900"
                  }`}
                >
                  {cert.title}
                </p>
                <p
                  className={`text-xs font-mono mt-0.5 ${
                    darkMode ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {cert.issuer}
                </p>
              </div>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-4 flex-shrink-0 p-2 rounded-md border transition-colors ${
                  darkMode
                    ? "border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500"
                    : "border-neutral-300 text-neutral-500 hover:text-black hover:border-neutral-400"
                }`}
                title="Open full certificate"
              >
                <FiExternalLink className="text-sm" />
              </a>
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous certificate"
            className={`absolute left-0 top-1/2 -translate-y-8 -translate-x-5 p-2 rounded-full border transition-colors ${
              darkMode
                ? "bg-neutral-900 border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500"
                : "bg-white border-neutral-300 text-neutral-500 hover:text-black hover:border-neutral-400"
            }`}
          >
            <FiChevronLeft className="text-base" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next certificate"
            className={`absolute right-0 top-1/2 -translate-y-8 translate-x-5 p-2 rounded-full border transition-colors ${
              darkMode
                ? "bg-neutral-900 border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500"
                : "bg-white border-neutral-300 text-neutral-500 hover:text-black hover:border-neutral-400"
            }`}
          >
            <FiChevronRight className="text-base" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? darkMode
                    ? "bg-neutral-300 w-4"
                    : "bg-neutral-700 w-4"
                  : darkMode
                  ? "bg-neutral-700"
                  : "bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p
          className={`text-center mt-3 font-mono text-xs ${
            darkMode ? "text-neutral-600" : "text-neutral-400"
          }`}
        >
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
