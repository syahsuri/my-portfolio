"use client";
import { assets } from "@/assets/assets";
import { enhancedWorkData, Project } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDetail from "./ProjectDetail";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = showAll ? enhancedWorkData : enhancedWorkData.slice(0, 4);

  // Scroll to top when opening project detail
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    // Smooth scroll to work section
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      id="work" 
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project List View */}
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="project-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-center mb-2 text-lg font-ovo">My Work</h4>
            <h2 className="text-center text-5xl font-ovo">Recent Projects</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
              Here are some of my recent projects that showcase my skills in web and app development.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5">
              <AnimatePresence initial={false}>
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut", delay: index * 0.1 }}
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
                    
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                      <div>
                        <h2 className="font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-700">{project.description}</p>
                      </div>
                      <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-lime-300 transition">
                        <Image src={assets.send_icon} alt="View" className="w-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {enhancedWorkData.length > 4 && (
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-max flex items-center justify-center gap-2 text-black bg-white border-[0.5px] border-black rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-50 duration-500 dark:text-white dark:bg-gray-900 dark:border-white dark:hover:bg-gray-800 font-ovo shadow-sm"
              >
                {showAll ? "Show Less" : "Show More"}
                <Image
                  src={assets.right_arrow_bold}
                  alt="Arrow"
                  className={`w-4 transition-transform duration-300 dark:hidden ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
                <Image
                  src={assets.right_arrow_bold_dark}
                  alt="Arrow"
                  className={`w-4 transition-transform duration-300 hidden dark:block ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
              </motion.button>
            )}
          </motion.div>
        ) : (
          /* Project Detail View */
          <motion.div
            key="project-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetail 
              project={selectedProject} 
              onBack={() => setSelectedProject(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;