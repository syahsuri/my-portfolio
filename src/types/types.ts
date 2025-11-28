// types.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    bgImage: string;
    fullDescription: string;
    technologies: string[];
    duration: string;
    team: string;
    role: string;
    client: string;
    location: string;
    challenges: string;
    outcome: string;
    features: string[];
  }
  
  export const enhancedWorkData: Project[] = [
    {
      id: 1,
      title: "HMI for Gluing Automation",
      description: "Node.js & Flask | GEFKEN Cases Ltd",
      bgImage: "/work-1.png",
      fullDescription: "Developed a comprehensive Human-Machine Interface system for automated gluing processes in industrial manufacturing. The system provides real-time monitoring, control panels, and data visualization for production lines, significantly improving operational efficiency.",
      technologies: ["Node.js", "Flask", "Python", "WebSocket", "Industrial IoT"],
      duration: "3 months",
      team: "6 members",
      role: "Frontend Developer & Integration Lead",
      client: "GEFKEN Cases Ltd",
      location: "Netherlands, Den Haag",
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
      technologies: ["Node.js", "Flask", "WebSocket", "Industrial Automation"],
      duration: "3 months",
      team: "6 members",
      role: "Frontend & Integration Lead",
      client: "Brago Luchttechniek BV",
      location: "Netherlands, Delft",
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
      technologies: ["React.js", "TMDB API", "Tailwind CSS", "React Router", "Context API"],
      duration: "1 Weeks",
      team: "Personal Project",
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
      description: "Laravel | Perta Arus Gas",
      bgImage: "/work-4.png",
      fullDescription: "Enterprise-level internal news portal for company-wide communications. Includes robust content management system, role-based access control, and analytics for tracking employee engagement.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "Chart.js",],
      duration: "4 months",
      team: "2 members",
      role: "Fullstack-Developer",
      client: "Perta Arus Gas",
      location: "Indonesia, Aceh",
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
      technologies: ["Laravel", "MySQL", "Payment Gateway"],
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
      duration: "1 months",
      team: "2 members",
      role: "Frontend & Backend Developer",
      client: "IAIN Takengon",
      location: "Indonesia, Aceh",
      challenges: "Ensuring WCAG accessibility compliance and optimizing performance for users with low-bandwidth connections.",
      outcome: "Website serves 1000+ monthly visitors with 98% performance score.",
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
      duration: "4 months",
      team: "2 members",
      role: "Backend Developer",
      client: "IAIN Lhokseumawe",
      location: "Indonesia",
      challenges: "Handling concurrent users during exam periods and ensuring data security for sensitive student records.",
      outcome: "Platform supports 1,500+ active students with 99.5% uptime.",
      features: [
        "Comprehensive course management",
        "Online quiz and assignment system",
        "Automated grade tracking",
        "Discussion forums",
        "Video lecture integration"
      ]
    }
  ];