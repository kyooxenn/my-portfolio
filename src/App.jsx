import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiSpringboot,
  SiReact,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiSonarqube,
  SiSwagger,
  SiRedis,
} from "react-icons/si";
import { FaLinkedin, FaJava } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // ✅ useMemo prevents recreation of static objects on every render
  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }),
    []
  );

  const techStacks = useMemo(
    () => [
      { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#00618A]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#D82C20]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Git", icon: <SiGit className="text-[#F1502F]" /> },
      { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
      { name: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "SonarQube", icon: <SiSonarqube className="text-[#4E9BCD]" /> },
      { name: "RESTful API", icon: <SiSwagger className="text-[#0088CC]" /> },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: "Inventory Management System",
        tech: "Spring Boot, React, H2 Database, Redis",
        desc: "A lightweight full-stack inventory management app with CRUD operations, enhanced with Redis caching for faster performance.",
        frontendRepo: "https://github.com/kyooxenn/inventory_system_react",
        backendRepo: "https://github.com/kyooxenn/Inventory-System",
        liveSite: "https://react-inventory-system.onrender.com/",
      },
    ],
    []
  );

  const navItems = ["About", "Projects", "Tech Stack", "Contact"];
  const mainLinks = [
    { label: "View Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  // ✅ Famous quotes
  const quotes = useMemo(
    () => [
      "“The best way to predict the future is to invent it.” — Alan Kay",
      "“Code is like humor. When you have to explain it, it’s bad.” — Cory House",
      "“Programs must be written for people to read, and only incidentally for machines to execute.” — Harold Abelson",
      "“First, solve the problem. Then, write the code.” — John Johnson",
      "“Simplicity is the soul of efficiency.” — Austin Freeman",
      "“Talk is cheap. Show me the code.” — Linus Torvalds",
      "“Experience is the name everyone gives to their mistakes.” — Oscar Wilde",
      "“Before software can be reusable it first has to be usable.” — Ralph Johnson",
      "“Make it work, make it right, make it fast.” — Kent Beck",
    ],
    []
  );

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // ✅ Change quote every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[random]);
    }, 8000); // ← 8 seconds

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#121212] text-gray-100" : "bg-[#F9FAFB] text-gray-800"
      }`}
    >
      {/* Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 shadow bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-500">Norbs.dev</h1>

        <div className="flex gap-5 items-center mt-2 sm:mt-0 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}

          {/* GitHub Icon */}
          <a
            href="https://github.com/kyooxenn"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <SiGithub className="text-2xl" />
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col items-center justify-center text-center py-20 px-4 sm:py-24 sm:px-6"
      >
        <img
          src="/profile.jpg"
          alt="Norbert Jon Bobila"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6"
        />
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Norbert Jon Bobila</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl text-gray dark:text-black-700">
          A passionate Java Developer specializing in backend systems.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {[...mainLinks, { label: "📄 Download CV", href: "/NorbertBobila_CV.pdf", download: true }].map(
            ({ label, href, download }) => (
              <motion.a
                key={label}
                href={href}
                download={download ? "NorbertBobila_CV.pdf" : undefined}
                className="bg-blue-500 text-white border border-blue-500 px-5 py-2 rounded hover:bg-white hover:text-blue-500 transition font-medium text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.a>
            )
          )}
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-6 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-500">About Me</h3>
        <p className="text-lg leading-relaxed text-gray dark:text-black-700">
          I’m a backend developer focused on scalable systems with Java and Spring Boot.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        id="techstack"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-8 bg-gray-100 dark:bg-[#1E1E1E]"
      >
        <h3 className="text-3xl font-semibold text-center mb-10 text-blue-500">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
          {techStacks.map(({ name, icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#2B2B2B] rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{icon}</div>
              <p className="font-medium text-gray-700 dark:text-gray-200">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-8"
      >
        <h3 className="text-3xl font-semibold text-center mb-10 text-blue-500">
          Projects
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map(({ title, tech, desc, frontendRepo, backendRepo, liveSite }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="p-6 bg-white dark:bg-[#2B2B2B] rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between w-full sm:w-80 md:w-96"
            >
              <h4 className="text-xl font-bold mb-2 text-blue-500 text-center">{title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">{tech}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{desc}</p>
              <div className="flex gap-4 flex-wrap justify-center">
                {frontendRepo && <a href={frontendRepo} target="_blank" className="text-sm text-blue-500 hover:underline">🔹 Frontend</a>}
                {backendRepo && <a href={backendRepo} target="_blank" className="text-sm text-blue-500 hover:underline">🔹 Backend</a>}
                {liveSite && <a href={liveSite} target="_blank" className="text-sm text-blue-500 hover:underline">🌐 Live</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-8 text-center"
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-500">Get in Touch</h3>
        <p className="mb-4 text-gray dark:text-black-700 max-w-2xl mx-auto">
          Open to Java Developer opportunities—let’s collaborate.
        </p>

        <div className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
          <p className="flex items-center justify-center gap-2">
            <FaLinkedin className="text-blue-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/nbobila/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              www.linkedin.com/in/nbobila
            </a>
          </p>
          <p>📧 <a href="mailto:norbertbobila12@gmail.com" className="text-blue-500 hover:underline">norbertbobila12@gmail.com</a></p>
          <p>📞 <a href="tel:+639603717056" className="text-blue-500 hover:underline">+63 960 371 7056</a></p>
        </div>

        <a
          href="mailto:norbertbobila12@gmail.com"
          className="bg-blue-500 text-white border border-blue-500 px-5 py-2 rounded hover:bg-white hover:text-blue-500 transition font-medium"
        >
          Email Me
        </a>
      </motion.section>

     <footer className="py-6 text-center border-t dark:border-gray-700 text-gray-500 dark:text-gray-400">
       <motion.p
         key={currentQuote} // triggers smooth transition
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -10 }}
         transition={{ duration: 0.6 }}
         className="text-sm italic mb-2"
         >
         {currentQuote}
       </motion.p>
       <p>© {new Date().getFullYear()} Norbs | Built with React, Tailwind CSS & Framer Motion</p>
     </footer>
    </div>
  );
}
