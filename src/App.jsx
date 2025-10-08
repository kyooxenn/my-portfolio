import { useState } from "react";
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
} from "react-icons/si";

import { SiSwagger, SiRedis } from "react-icons/si";




import { FaLinkedin } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

    const techStacks = [
      { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#00618A]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#D82C20]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Git", icon: <SiGit className="text-[#F1502F]" /> },
      { name: "GitHub", icon: <SiGit className="text-[#181717]" /> },
      { name: "GitLab", icon: <SiGit className="text-[#FC6D26]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "SonarQube", icon: <SiSonarqube className="text-[#4E9BCD]" /> },
      { name: "RESTful API", icon: <SiSwagger className="text-[#0088CC]" /> },
    ];


  return (
    <div
      className={
        darkMode
          ? "bg-[#121212] text-gray-100 min-h-screen"
          : "bg-[#F9FAFB] text-gray-800 min-h-screen"
      }
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-500">Norbs.dev</h1>
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#tech" className="hover:text-blue-500">
            Tech Stack
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>

          {/* GitHub link */}
          <a
            href="https://github.com/kyooxenn"  // 🔹 replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            title="GitHub Profile"
          >
            <svg
              xmlns="htåtp://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56 0-.28-.01-1.04-.02-2.05-3.2.69-3.88-1.54-3.88-1.54-.52-1.32-1.26-1.67-1.26-1.67-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.73-1.51-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.18A10.8 10.8 0 0 1 12 6.81c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.6.23 2.78.12 3.07.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:opacity-90"
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
        className="flex flex-col items-center justify-center text-center py-24 px-6"
      >
        <img
          src="/profile.jpg"
          alt="Norbert Jon Bobila"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6"
        />

        <h2 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Norbert Jon Bobila</span>
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-600 dark:text-gray-600">
          A passionate Java Developer specializing in backend development, building scalable, efficient, and secure systems.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 px-5 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-8 max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-semibold mb-4 text-blue-500">About Me</h3>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-600">
          I specialize in backend development using Java and Spring Boot, focusing on scalability, performance, and clean architecture. I take pride in writing maintainable code and building APIs that drive seamless user experiences.
        </p>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        id="tech"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 px-8 bg-gray-100 dark:bg-[#1E1E1E]"
      >
        <h3 className="text-3xl font-semibold text-center mb-10 text-blue-500">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-[#2B2B2B] rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{tech.icon}</div>
              <p className="font-medium text-gray-700 dark:text-gray-200">
                {tech.name}
              </p>
            </div>
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

        <div className="flex justify-center">
          {[
            {
              title: "Inventory Management System",
              tech: "Spring Boot, React, MySQL",
              desc: "A full-stack app for managing inventory records.",
              frontendRepo: "https://github.com/kyooxenn/React_Inventory_System",
              backendRepo: "https://github.com/kyooxenn/Inventory-System",
              liveSite: "https://react-inventory-system.onrender.com/",
            },
          ].map((proj) => (
            <motion.div
              key={proj.title}
              variants={fadeUp}
              className="p-6 bg-white dark:bg-[#2B2B2B] rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between w-full sm:w-80 md:w-96"
            >
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-bold mb-2 text-blue-500 text-center">{proj.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">{proj.tech}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{proj.desc}</p>

                {/* 🔹 Links centered */}
                <div className="flex gap-4 flex-wrap justify-center">
                  {proj.frontendRepo && (
                    <a
                      href={proj.frontendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      🔹 Frontend Repo
                    </a>
                  )}
                  {proj.backendRepo && (
                    <a
                      href={proj.backendRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      🔹 Backend Repo
                    </a>
                  )}
                  {proj.liveSite && (
                    <a
                      href={proj.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      🌐 Live Site
                    </a>
                  )}
                </div>
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
        <p className="mb-4 text-gray-700 dark:text-gray-600">
          I’m open for new Java developer opportunities — let’s build something great together!
        </p>

        <div className="space-y-3 mb-8 text-gray-700 dark:text-gray-600">
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
          <p>
            📧 Email:{" "}
            <a
              href="mailto:norbertbobila12@gmail.com"
              className="text-blue-500 hover:underline"
            >
              norbertbobila12@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+639603717056"
              className="text-blue-500 hover:underline"
            >
              +63 960 371 7056
            </a>
          </p>

        </div>

        <a
          href="mailto:norbertbobila12@gmail.com"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Email Me
        </a>
      </motion.section>


      {/* Footer */}
      <footer className="py-6 text-center border-t dark:border-gray-700 text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Norbs | Built with React + Tailwind +
          Motion
        </p>
      </footer>
    </div>
  );
}
