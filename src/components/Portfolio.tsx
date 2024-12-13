import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "A responsive admin dashboard with dark mode",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500&h=300&fit=crop",
      description: "Full-featured online shopping platform",
      tech: ["Next.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&h=300&fit=crop",
      description: "Collaborative task management solution",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm text-amber-400 bg-gray-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;