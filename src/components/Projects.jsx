import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

let projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/projects/portfolio.png",
    description:
      "A Red-black-themed portfolio with stunning animations. Built with React, Framer Motion, Emailjs, Swiper and Tailwind CSS. Includes a hero section, projects section, certifications section, and contact section.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Swiper JS", "Emailjs"],
    github: "https://github.com/deep663/Portfolio",
    live: "/",
  },
  {
    id: 2,
    name: "Handcrafted Gifts Website",
    image: "/projects/craft_web.png",
    description:
      "A minimalist Handcrafted Gifts Website! This is portfolio website for handcrafted gifts where users can explore and purchase beautifully crafted handmade gifts",
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/deep663/Craft-wesite",
    live: "https://deam-craft.vercel.app/",
  },
  {
    id: 3,
    name: "Binyte - Portfolio website",
    image: "/projects/binyte_web.png",
    description:
      "A portfolio wesite fro Binyte. Binyte is a full-service social media agency based in India.",
    tech: ["React", "Vite", "Redux", "Tailwind CSS"],
    github: "https://github.com/deep663/Website",
    live: "https://website2-dusky.vercel.app/",
  },
  {
    id: 4,
    name: "Indoor Scene Understanding",
    image: "/projects/final_project.png",
    description:
      "Developed a method to analyses the spatial arrangement of objects within indoor scenes, leveraging the combined information from cameras and 2D LiDAR sensors.",
    tech: ["Python", "OpenCV", "YOLOv8", "PyTorch" ],
    github: "https://github.com/deep663/Indoor-Scene-Understanding-using-Camera-2D-Lidar",
    live: "",
  },
  {
    id: 5,
    name: "Job Finder",
    image: "/projects/job_finder.png",
    description:
      "This Python project is designed to scrape job listings from popular job portals, including Naukri, Foundit, Shine, Indeed, and LinkedIn. Users can input the desired job title and location, and the script will extract detailed job information.",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    github: "https://github.com/deep663/Job_finder",
    live: "",
  },
  {
    id: 6,
    name: "Exercise Challenge Web App",
    image: "/projects/exercise_app.png",
    description:
      "A full-stack MERN (MongoDB, Express, React, Node.js) web application for tracking daily exercises for a 60 days challenge. Users can complete daily exercises, earn points, and stay motivated.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
      "Redux",
    ],
    github: "https://github.com/deep663/Exercise-app",
    live: "https://exercise-app-tau.vercel.app/",
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handleNext = () => {
    setSelectedId((prev) => (prev === projects.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedId((prev) => (prev === 1 ? projects.length : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    if (touchStartX - touchEndX > 50) {
      // Swiped left (Next)
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      // Swiped right (Prev)
      handlePrev();
    }
  };

  return (
    <section
      id="projects"
      className="relative flex h-fit md:h-screen bg-red-900 text-white p-6 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Curved Side Navigation */}
      <div className="hidden relative w-1/4 md:flex flex-col justify-center items-center h-full">
        <motion.div
          id="project-list"
          initial={{ opacity: 0, x: -100, rotateX: 90 }}
          whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-2 w-full"
        >
          {projects.map((project) => {
            const isSelected = selectedId === project.id;
            return (
              <motion.div
                key={project.id}
                className={`project-item cursor-pointer p-3 text-center rounded-lg w-full overflow-auto transition-all ${
                  isSelected ? "text-xl font-bold" : "text-base"
                }`}
                initial={{
                  scale: isSelected ? 1.2 : 0.9,
                  opacity: isSelected ? 1 : 0.5,
                }}
                animate={{
                  scale: isSelected ? 1.2 : 0.9,
                  opacity: isSelected ? 1 : 0.5,
                }}
                exit={{
                  scale: isSelected ? 1.2 : 0.9,
                  opacity: isSelected ? 1 : 0.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                  delay: 0.2 * project.id,
                }}
                onClick={() => handleSelect(project.id)}
              >
                {project.name}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Project Details */}
      <div className="w-full md:w-3/4 p-2 md:p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl text-center md:text-left font-bold mb-4"
        >
          Projects
        </motion.h1>
        {projects.map(
          (project) =>
            project.id === selectedId && (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full max-h-[70vh] object-center object-cover rounded-lg"
                />
                <div className="md:absolute bottom-0 p-4 w-full md:bg-red-900/90 md:rounded-b-lg">
                  <h2 className="text-2xl text-white font-bold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-md text-wrap h-30 md:h-fit mb-4 text-gray-200 overflow-auto">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mb-4 overflow-auto">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-transparent text-white px-3 py-auto md:py-1 border-2 border-white rounded-full text-sm hover:bg-white hover:text-black hover:shadow-[0_0_13px_#ffffff] transition duration-300 "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg hover:shadow-[0_0_13px_#ffffff] transition duration-300"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.live === "" ? "hidden" : "flex"
                      } items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:shadow-[0_0_10px_#ffffff] transition duration-300`}
                    >
                      <FaExternalLinkAlt /> View
                    </a>
                  </div>
                </div>
              </motion.div>
            )
        )}

        {/* Navigation Buttons (Mobile Only) */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={handlePrev}
          className="md:hidden absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-white/10 hover:bg-white/60 hover:text-black text-3xl rounded-full p-2 cursor-pointer z-50"
        >
          <GoChevronLeft />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={handleNext}
          className="md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-white/10 hover:bg-white/60 hover:text-black text-3xl rounded-full p-2 cursor-pointer z-50"
        >
          <GoChevronRight />
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
