import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

let projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: "/projects/bg_image_1.jpg",
    description:
      "A cyberpunk-themed portfolio with stunning animations. Built with React, Framer Motion, and Tailwind CSS. Dolore non quis magna commodo reprehenderit. Cupidatat sint magna eiusmod est est consectetur. Labore nulla in non cupidatat commodo voluptate ex nostrud. Quis aliqua sint ut aute ea.̥Minim est sint adipisicing duis est qui sunt commodo occaecat laborum id. ̥Anim aliquip culpa nostrud Lorem pariatur. Et cupidatat commodo nostrud ex nulla occaecat pariatur velit sit ad consectetur aliqua cupidatat. Lorem non sunt aliqua irure mollit minim sunt nisi dolor labore.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "",
  },
  {
    id: 2,
    name: "Chatbot UI",
    image: "/projects/bg_image_2.jpg",
    description:
      "A minimalist chatbot interface using React and Tailwind.Exercitation culpa cupidatat dolore dolor ipsum pariatur anim Lorem eu pariatur excepteur laborum. In nostrud ea culpa dolor tempor ad sint. Ullamco nisi esse do velit enim eiusmod eiusmod.Qui anim tempor occaecat veniam velit velit ut reprehenderit officia est consectetur culpa. Ullamco excepteur sunt cillum fugiat culpa amet labore pariatur in voluptate. Qui commodo aliquip in esse consectetur est dolore do sit in velit.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "#",
    live: "",
  },
  {
    id: 3,
    name: "Expense Tracker",
    image: "/projects/bg_image_3.jpg",
    description:
      "A React Native app to track daily expenses efficiently.Exercitation officia ex eiusmod ex mollit. Duis et culpa ipsum aute consectetur sunt nostrud Lorem sunt proident veniam esse. Duis mollit esse enim quis irure voluptate nulla enim occaecat voluptate irure magna veniam. Quis aliqua occaecat sit exercitation dolor fugiat aliquip mollit ea. Voluptate quis excepteur pariatur proident. Eiusmod pariatur laboris officia aute nulla labore culpa est pariatur exercitation.In est ut mollit elit sit. Dolore aliqua ut reprehenderit quis ullamco commodo dolor. Est officia sunt occaecat quis nulla pariatur sunt non et ipsum. Proident tempor exercitation est aliquip aliquip.",
    tech: ["React Native", "Redux", "Firebase"],
    github: "#",
    live: "",
  },
  {
    id: 4,
    name: "Task Manager",
    image: "/projects/bg_image_4.jpg",
    description:
      "A comprehensive task management application that helps users organize their tasks efficiently. Built with React, Redux, and Tailwind CSS. This app allows users to create, update, and delete tasks, set deadlines, and categorize tasks for better organization. The user-friendly interface ensures a smooth experience while managing daily responsibilities. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tech: ["React", "Redux", "Tailwind CSS"],
    github: "#",
    live: "",
  },
  {
    id: 5,
    name: "E-commerce Dashboard",
    image: "/projects/bg_image_1.jpg",
    description:
      "An interactive e-commerce dashboard for managing products, orders, and customers. Built with React, Node.js, and MongoDB. This dashboard provides real-time analytics and insights into sales performance, inventory levels, and customer behavior. Users can easily add, edit, and delete products, as well as manage orders and customer information. A responsive design ensures accessibility across devices. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "",
  },
];

const Projects = () => {
  const centerIndex = Math.floor(projects.length / 2);
  const [selectedId, setSelectedId] = useState(projects[centerIndex].id);
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
          whileInView={{ opacity: 1, x: 0, rotateX:0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-2 w-full"
        >
          {projects.map((project) => {
            const isSelected = selectedId === project.id;
            return (
              <motion.div
                key={project.id}
                className={`project-item cursor-pointer p-3 text-center rounded-lg w-full transition-all ${
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
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 * project.id }}
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
        className="text-3xl text-center md:text-left font-bold mb-4">
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
                className="glass pb-4"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl text-white font-bold mb-2 ml-4">
                  {project.name}
                </h2>
                <p className="text-md text-wrap h-30 md:h-fit mb-4 text-gray-200 ml-4 overflow-auto">
                  {project.description}
                </p>
                <div className="flex gap-2 mb-4 ml-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-transparent text-white px-3 py-1 border-2 border-white rounded-full text-sm hover:bg-white font-semibold hover:text-black hover:shadow-[0_0_13px_#ffffff] transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 ml-4">
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
                    className={`${(project.live === "") ? "hidden" : "flex"} items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:shadow-[0_0_10px_#ffffff] transition duration-300`}
                  >
                    <FaExternalLinkAlt /> View
                  </a>
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
