import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Tesla Clone",
    description: "A responsive Tesla website clone built with JavaScript and modern web technologies.",
    image: "/tesla-clone.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web"
  },

  {
    id: 2,
    title: "Typing Practice",
    description: "A responsive typing practice website built with React+Vite and modern web technologies.",
    image: "/tesla-clone.jpg",
    tags: ["React+Vite", "Tailwind", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web"
  },
  
  {
    id: 3,
    title: "Movie App",
    description: "A responsive movie website built with Jquery and ajax and modern web technologies.",
    image: "/tesla-clone.jpg",
    tags: ["Jquery", "HTML", "Bootstrap"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "web"
  },

  {
    id: 4,
    title: "Responsive Website",
    description: "A responsive movie website built with HTML and Bootstrap.",
    image: "/tesla-clone.jpg",
    tags: ["HTML", "Bootstrap"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "design"
  },

  {
    id: 5,
    title: "WWF",
    description: "A responsive movie website built with HTML and Bootstrap.",
    image: "/tesla-clone.jpg",
    tags: ["HTML", "Bootstrap", "CSS"],
    github: "https://github.com/ImmanuelJoya/Tesla-with-JS",
    live: "https://immanueljoya.github.io/Tesla-with-JS/",
    category: "design"
  },
  // Work in progress
];

const categories = ["all", "web", "design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className=" max-w-7xl mx-auto">
        <motion.h2 
          className=" text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden group"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div id='edgeCard' className=" aspect-video bg-gray-800 relative overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div 
                   className= {`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 flex items-center justify-center ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="  flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                {/* ///here// */}
                <div className=" card project-card p-6 bg-gray-800">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
