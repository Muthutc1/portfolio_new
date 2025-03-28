import React, { useState, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Code2, Users, X, Globe, Phone, Lock } from 'lucide-react';
// import useSound from 'use-sound';
//import useSound from 'use-sound';

interface Project {
  title: string;
  description: string;
  image: string;
  users?: string;
  type: string;
  tags: string[];
  platforms: {
    android?: string;
    ios?: string;
    web?: string;
  };
  details: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [playOpen] = useSound('/sounds/pop-up.mp3', { volume: 0.5 });
  // const [playClose] = useSound('/sounds/pop-down.mp3', { volume: 0.5 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const projects: Project[] = [
    {
      title: "Glucolyf",
      description: "A healthcare application developed for Android and iOS platforms, designed to empower users by providing real-time health monitoring and personalized insights.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2560&q=80",
      type: "Healthcare App",
      tags: ["Healthcare", "Mobile", "Real-time"],
      platforms: {
        android: "https://play.google.com/store",
        ios: "https://apps.apple.com"
      },
      details: [
        "Real-time health monitoring",
        "Personalized health insights",
        "Seamless integration with health devices",
        "Secure data encryption to ensure privacy"
      ]
    },
    {
      title: "Falaina Suite",
      description: "A security-focused application providing Identity and Access Control Management (IACM) with Multi-Factor Authentication (MFA) features.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2560&q=80",
      type: "Security App",
      tags: ["Security", "MFA", "IACM"],
      platforms: {
        android: "https://play.google.com/store",
        ios: "https://apps.apple.com"
      },
      details: [
        "Multi-Factor Authentication for enhanced security",
        "Role-based access control",
        "Compliance with industry security standards",
        "Secure login and session management"
      ]
    },
    {
      title: "Falaina Cloud Community",
      description: "A cloud-based community platform designed to facilitate secure communication and collaboration across organizations.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2560&q=80",
      type: "Cloud Platform",
      tags: ["Cloud", "Community", "Collaboration"],
      platforms: {
        web: "https://falaina.com",
        android: "https://play.google.com/store",
        ios: "https://apps.apple.com"
      },
      details: [
        "Cloud-based secure storage",
        "Real-time notifications and updates",
        "Role-based content access",
        "Community engagement features"
      ]
    },
    {
      title: "Alle Mod 1",
      description: "A Denmark-based gaming application launched successfully, delivering a seamless and engaging gaming experience to users.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2560&q=80",
      type: "Gaming App",
      users: "200K+",
      tags: ["Gaming", "Interactive", "Real-time"],
      platforms: {
        android: "https://play.google.com/store",
        ios: "https://apps.apple.com"
      },
      details: [
        "Interactive gameplay experience",
        "Real-time user engagement",
        "High-performance backend for scalability",
        "Secure data storage"
      ]
    },
    {
      title: "Join2Serve",
      description: "A community-driven application built using Node.js and MongoDB, connecting volunteers with service opportunities.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2560&q=80",
      type: "Community App",
      tags: ["Volunteer", "Community", "Node.js"],
      platforms: {
        android: "https://play.google.com/store"
      },
      details: [
        "Volunteer management system",
        "Real-time event notifications",
        "Seamless communication between volunteers and organizers",
        "Secure data storage with MongoDB"
      ]
    },
    {
      title: "Board Vision",
      description: "A board management application developed to simplify board governance and streamline decision-making processes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2560&q=80",
      type: "Management App",
      tags: ["Governance", "Management", "Collaboration"],
      platforms: {
        android: "https://play.google.com/store",
        ios: "https://apps.apple.com"
      },
      details: [
        "Secure document sharing",
        "Real-time meeting collaboration",
        "Role-based access control",
        "Notifications and task management"
      ]
    },
    {
      title: "Todos Contra 1",
      description: "A highly engaging TV game application enabling real-time user participation during live game shows.",
      image: "https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=2560&q=80",
      type: "Gaming App",
      tags: ["Gaming", "Live TV", "Interactive"],
      platforms: {
        android: "https://play.google.com/store",
        ios: "https://apps.apple.com"
      },
      details: [
        "Real-time audience interaction",
        "Seamless integration with live TV game shows",
        "High user engagement and retention",
        "Secure backend infrastructure"
      ]
    },
    {
      title: "PIM - Privileged Identity Management",
      description: "A web application built to manage and control privileged identities with enhanced security and compliance features.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2560&q=80",
      type: "Security App",
      tags: ["Security", "Identity", "Compliance"],
      platforms: {
        web: "https://pim.falaina.com"
      },
      details: [
        "Centralized identity management",
        "Multi-Factor Authentication (MFA) integration",
        "Role-based access control",
        "Audit and compliance reporting"
      ]
    },
    {
      title: "PAM - Privileged Access Management",
      description: "A security solution designed to safeguard and monitor privileged access to critical systems.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2560&q=80",
      type: "Security App",
      tags: ["Security", "Access Control", "Monitoring"],
      platforms: {
        web: "https://pam.falaina.com"
      },
      details: [
        "Secure credential storage",
        "Session monitoring and control",
        "Risk-based authentication",
        "Compliance management"
      ]
    },
    {
      title: "MFA - Multi-Factor Authentication",
      description: "A security layer that enhances access control by requiring multiple forms of verification to ensure user authenticity.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=2560&q=80",
      type: "Security App",
      tags: ["Security", "Authentication", "MFA"],
      platforms: {
        web: "https://mfa.falaina.com"
      },
      details: [
        "Two-factor and multi-factor authentication",
        "Time-based One-Time Passwords (TOTP)",
        "Risk-based access control",
        "Seamless API integration"
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "I worked on a few applications whose details I am unable to share.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=2560&q=80",
      type: "Enterprise Applications",
      tags: ["Enterprise", "Confidential", "Custom Solutions"],
      platforms: {},
      details: []
    }
  ];

  const handleProjectClick = (project: Project) => {
    //playOpen();
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    //playClose();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center animate-slideRight">
          Projects
        </h2>

        <div className="relative">
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 transition-all duration-300 hover:bg-black/50 hover:text-white hover:scale-110 hover:border-white/20 opacity-100 animate-pulse"
          >
            <ChevronLeft className="w-6 h-6 filter drop-shadow-glow" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 transition-all duration-300 hover:bg-black/50 hover:text-white hover:scale-110 hover:border-white/20 opacity-100 animate-pulse"
          >
            <ChevronRight className="w-6 h-6 filter drop-shadow-glow" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex flex-wrap md:flex-nowrap gap-6 md:overflow-x-auto md:overflow-y-hidden px-0 md:px-16 perspective-1000"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="w-full md:w-[350px] flex-shrink-0 scroll-snap-align-start animate-fadeIn transform-gpu"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `translateZ(0) rotateY(0deg)`,
                  transition: 'transform 0.5s ease-out'
                }}
              >
                <div 
                  className="glass-effect rounded-xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-sky-blue/20 group"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    {project.users && (
                      <div className="absolute top-4 right-4 bg-sky-blue/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 animate-fadeIn">
                        <Users size={14} className="animate-pulse" />
                        <span className="text-sm font-medium">{project.users}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-sky-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {project.description}
                        </p>
                      </div>
                      <div className="bg-sky-blue/20 p-2 rounded-lg animate-float group-hover:bg-sky-blue/30 transition-colors">
                        {project.title === "Enterprise Solutions" ? (
                          <Lock className="text-sky-blue animate-pulse" size={20} />
                        ) : (
                          <Code2 className="text-sky-blue group-hover:scale-110 transition-transform" size={20} />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-sky-blue/10 text-sky-blue rounded-full text-sm border border-sky-blue/20 hover:bg-sky-blue/20 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-sky-blue/20"
                          style={{ animationDelay: `${tagIndex * 100}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 md:pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-sky-blue group-hover:text-sky-blue/80 transition-colors">
                          {project.type}
                        </span>
                        <button className="text-white/70 hover:text-white flex items-center space-x-1 group">
                          <span>View Details</span>
                          <ExternalLink size={14} className="transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" 
            onClick={handleClosePopup}
          />
          <div className="glass-popup relative w-full max-w-2xl rounded-2xl p-6 animate-scaleIn">
            <button
              onClick={handleClosePopup}
              className="sticky top-0 float-right text-white/70 hover:text-white transition-colors transform hover:rotate-90 duration-300"
            >
              <X size={24} />
            </button>

            <div className="space-y-4">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover animate-fadeIn transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 animate-slideRight">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base animate-slideRight" style={{ animationDelay: '100ms' }}>
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base md:text-lg font-semibold text-white animate-slideRight" style={{ animationDelay: '200ms' }}>
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.details.map((detail, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-2 text-gray-300 text-sm md:text-base animate-slideRight hover:text-white transition-colors"
                      style={{ animationDelay: `${300 + index * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-sky-blue rounded-full animate-pulse" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {Object.keys(selectedProject.platforms).length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.platforms.android && (
                    <a
                      href={selectedProject.platforms.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-sky-blue/20 hover:bg-sky-blue/30 text-white px-3 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-blue/20 animate-fadeIn text-sm"
                      style={{ animationDelay: '600ms' }}
                    >
                      <Phone size={16} className="animate-pulse"/>
                      <span>Android App</span>
                    </a>
                  )}
                  {selectedProject.platforms.ios && (
                    <a
                      href={selectedProject.platforms.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-sky-blue/20 hover:bg-sky-blue/30 text-white px-3 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-blue/20 animate-fadeIn text-sm"
                      style={{ animationDelay: '700ms' }}
                    >
                      <Phone size={16} className="animate-pulse"/>
                      <span>iOS App</span>
                    </a>
                  )}
                  {selectedProject.platforms.web && (
                    <a
                      href={selectedProject.platforms.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-sky-blue/20 hover:bg-sky-blue/30 text-white px-3 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-blue/20 animate-fadeIn text-sm"
                      style={{ animationDelay: '800ms' }}
                    >
                      <Globe size={16} className="animate-spin-slow" />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;