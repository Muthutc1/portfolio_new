import React from 'react';
import { Code2, Database, LayoutDashboard, GitBranch, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <LayoutDashboard className="w-8 h-8 text-blue-400" />,
      skills: ["HTML", "CSS", "JavaScript", "ASP.NET", ".NET MVC", "React", "Angular"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      skills: ["Xamarin", ".NET MAUI", "Android", "iOS", "Flutter"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      skills: [".NET Backend Development", "Node.js"]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      skills: ["SQL", "NoSQL DB", "Azure"]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-8 h-8 text-blue-400" />,
      skills: ["Git"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-blue/40 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-navy/30 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all transform hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="transform hover:rotate-12 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-sky-blue/10 text-sky-blue px-3 py-1 rounded-full text-sm border border-sky-blue/20 hover:border-sky-blue/40 transition-all transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills