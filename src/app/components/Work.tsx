"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Enhanced work data with detailed information
const enhancedWorkData = [
  {
    id: 1,
    title: "HMI for Gluing Automation",
    description: "Node.js & Flask | GEFKEN Cases Ltd (Netherlands)",
    bgImage: "/work-1.png",
    fullDescription: "Developed a comprehensive Human-Machine Interface system for automated gluing processes in industrial manufacturing. The system provides real-time monitoring, control panels, and data visualization for production lines, significantly improving operational efficiency.",
    technologies: ["Node.js", "Flask", "Python", "React", "WebSocket", "Industrial IoT"],
    duration: "6 months",
    team: "4 members",
    role: "Full-stack Developer",
    client: "GEFKEN Cases Ltd",
    location: "Netherlands",
    challenges: "Implementing real-time communication between industrial machines and web interface while ensuring zero-downtime during production hours.",
    outcome: "Increased production efficiency by 35% and reduced manual intervention by 60%.",
    features: [
      "Real-time machine status monitoring",
      "Automated error detection and alerts",
      "Production analytics dashboard",
      "Remote control capabilities",
      "Historical data logging and analysis"
    ]
  },
  {
    id: 2,
    title: "HMI for Spraying",
    description: "Node.js & Flask | Brago Luchttechniek BV (Netherlands)",
    bgImage: "/work-2.png",
    fullDescription: "Created an advanced HMI system for automated spraying equipment in ventilation manufacturing. Features include precision control, quality assurance monitoring, and comprehensive reporting capabilities.",
    technologies: ["Node.js", "Flask", "PostgreSQL", "WebSocket", "Chart.js", "MQTT"],
    duration: "5 months",
    team: "3 members",
    role: "Backend & Integration Lead",
    client: "Brago Luchttechniek BV",
    location: "Netherlands",
    challenges: "Achieving precise control synchronization between multiple spray nozzles and ensuring consistent coating quality across different production batches.",
    outcome: "Achieved 99.2% coating consistency and reduced material waste by 28%.",
    features: [
      "Multi-nozzle coordination system",
      "Quality control monitoring",
      "Automated calibration procedures",
      "Historical data analysis",
      "Predictive maintenance alerts"
    ]
  },
  {
    id: 3,
    title: "Movie Db API Integration",
    description: "React.js | Personal Project",
    bgImage: "/work-3.png",
    fullDescription: "A modern movie discovery application integrating TMDB API. Features include browsing trending movies, searching by genre, viewing detailed information with ratings, trailers, and managing personalized watchlists.",
    technologies: ["React.js", "TMDB API", "Tailwind CSS", "React Router", "Axios", "Context API"],
    duration: "2 months",
    team: "Solo Project",
    role: "Full-stack Developer",
    client: "Personal Project",
    location: "Indonesia",
    challenges: "Implementing efficient API caching to minimize requests and creating a smooth, Netflix-like user experience with fast navigation.",
    outcome: "Successfully deployed application with responsive design and smooth animations.",
    features: [
      "Advanced movie search and filtering",
      "Trending and popular sections",
      "Detailed movie information pages",
      "User watchlist management",
      "Trailer integration"
    ]
  },
  {
    id: 4,
    title: "Internal News Portal",
    description: "Laravel | Perta Arus Gas (Indonesia)",
    bgImage: "/work-4.png",
    fullDescription: "Enterprise-level internal news portal for company-wide communications. Includes robust content management system, role-based access control, and analytics for tracking employee engagement.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery", "Redis", "Laravel Echo"],
    duration: "4 months",
    team: "2 members",
    role: "Lead Developer",
    client: "Perta Arus Gas",
    location: "Indonesia",
    challenges: "Managing multi-department access controls and ensuring fast content delivery across different regional offices.",
    outcome: "Streamlined internal communication reaching 500+ employees with 95% engagement rate.",
    features: [
      "Multi-level content approval workflow",
      "Department-specific news feeds",
      "Employee engagement analytics",
      "Mobile-responsive design",
      "Push notifications"
    ]
  },
  {
    id: 5,
    title: "Digital Invitation Platform",
    description: "Laravel | Personal Project",
    bgImage: "/work-5.png",
    fullDescription: "A comprehensive digital invitation platform for weddings and events. Features customizable templates, RSVP management, guest tracking, and integration with popular messaging platforms.",
    technologies: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS", "Pusher", "Payment Gateway"],
    duration: "3 months",
    team: "Solo Project",
    role: "Full-stack Developer",
    client: "Personal Project",
    location: "Indonesia",
    challenges: "Creating a flexible template system and implementing real-time RSVP updates for concurrent users during peak event seasons.",
    outcome: "Platform used for 100+ events with 10,000+ total guests reached.",
    features: [
      "Customizable invitation templates",
      "Real-time RSVP tracking",
      "Guest list management",
      "Event countdown timer",
      "Photo gallery integration"
    ]
  },
  {
    id: 6,
    title: "Company Profile Website",
    description: "Laravel | IAIN Takengon",
    bgImage: "/work-6.png",
    fullDescription: "Official institutional website featuring academic programs, news, events, and administrative services. Built with strong focus on accessibility, SEO optimization, and performance.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "SEO Tools", "Google Analytics"],
    duration: "3 months",
    team: "3 members",
    role: "Frontend & Backend Developer",
    client: "IAIN Takengon",
    location: "Indonesia",
    challenges: "Ensuring WCAG accessibility compliance and optimizing performance for users with low-bandwidth connections.",
    outcome: "Website serves 5,000+ monthly visitors with 98% performance score.",
    features: [
      "Dynamic Content Management System",
      "Academic program showcase",
      "News and events portal",
      "Online admission system",
      "Faculty and staff directory"
    ]
  },
  {
    id: 7,
    title: "E-Learning Platform",
    description: "PHP | IAIN Lhokseumawe",
    bgImage: "/work-7.png",
    fullDescription: "Comprehensive e-learning platform supporting online courses, assignments, quizzes, and grade management for academic institution. Designed to handle high concurrent user loads during exam periods.",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery", "Chart.js", "FFmpeg"],
    duration: "5 months",
    team: "4 members",
    role: "Backend Developer",
    client: "IAIN Lhokseumawe",
    location: "Indonesia",
    challenges: "Handling concurrent users during exam periods and ensuring data security for sensitive student records.",
    outcome: "Platform supports 2,000+ active students with 99.5% uptime.",
    features: [
      "Comprehensive course management",
      "Online quiz and assignment system",
      "Automated grade tracking",
      "Discussion forums",
      "Video lecture integration"
    ]
  }
];

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof enhancedWorkData[0] | null>(null);
  const visibleProjects = showAll ? enhancedWorkData : enhancedWorkData.slice(0, 4);

  // Scroll to top when opening project detail
  const handleProjectClick = (project: typeof enhancedWorkData[0]) => {
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

// Project Detail Component
const ProjectDetail = ({ 
  project, 
  onBack 
}: { 
  project: typeof enhancedWorkData[0]; 
  onBack: () => void;
}) => {
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
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 shadow-lg border border-green-100 dark:border-green-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-ovo">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                📈
              </div>
              Impact & Results
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium font-ovo">
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

export default Work;