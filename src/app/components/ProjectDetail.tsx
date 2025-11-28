"use client";
import { assets } from "@/assets/assets";
import { Project } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  return (
    <div className="animate-fadeIn">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -5 }}
        className="flex items-center gap-2 mb-8 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors group font-ovo"
      >
        <Image src={assets.arrow_icon} alt="Back" className="w-4 dark:hidden" />
        <Image src={assets.arrow_icon_dark} alt="Back" className="w-4 hidden dark:block" />
        <span className="font-medium">Back to Projects</span>
      </motion.button>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 rounded-2xl p-8 md:p-12 text-white mb-8 shadow-xl"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-ovo">{project.title}</h1>
          <p className="text-xl text-blue-100 mb-6 font-ovo">{project.description}</p>
          
          <div className="flex flex-wrap gap-3 text-sm font-ovo">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Image src={assets.project_icon} alt="Duration" className="w-4 h-4 invert" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Image src={assets.code_icon} alt="Team" className="w-4 h-4 invert" />
              <span>{project.team}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Image src={assets.edu_icon} alt="Role" className="w-4 h-4 invert" />
              <span>{project.role}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="aspect-video bg-no-repeat bg-cover bg-center rounded-2xl mb-8 shadow-xl" 
        style={{ backgroundImage: `url(${project.bgImage})` }}
      />

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 space-y-6"
        >
          {/* Overview */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-ovo">
              <div className="w-1 h-6 bg-blue-600 rounded" />
              Project Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-ovo">
              {project.fullDescription}
            </p>
          </section>

          {/* Challenges */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-ovo">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                💡
              </div>
              Challenges
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-ovo">
              {project.challenges}
            </p>
          </section>

          {/* Outcome */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 shadow-lg border-2 border-black dark:border-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-ovo">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                📈
              </div>
              Impact & Results
            </h2>
            <p className="text-gray-900 dark:text-black-100 leading-relaxed font-medium font-ovo">
              {project.outcome}
            </p>
          </section>

          {/* Features */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-ovo">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                🎯
              </div>
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="min-w-[24px] h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 pt-0.5 font-ovo">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </section>
        </motion.div>

        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Project Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-4">
            <h3 className="font-bold text-lg mb-4 font-ovo">Project Info</h3>
            <div className="space-y-4 font-ovo">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</p>
                <p className="font-medium dark:text-gray-200">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                <p className="font-medium dark:text-gray-200">{project.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                <p className="font-medium dark:text-gray-200">{project.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Team Size</p>
                <p className="font-medium dark:text-gray-200">{project.team}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Role</p>
                <p className="font-medium dark:text-gray-200">{project.role}</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-lg mb-4 font-ovo">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm font-medium font-ovo"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;