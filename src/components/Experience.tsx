import React from 'react';
import { Calendar } from 'lucide-react';
import DailyQuote from './DailyQuote';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "TCS",
      period: "Jan 2023 - Present",
      description: "Working as a Software Engineer developing and maintaining enterprise applications."
    },
    {
      title: "Software Engineer",
      company: "Adappt Mobile Cloud application pvt ltd",
      period: "Jan 2022 - Dec 2022",
      description: "Specialized in mobile application development and cloud solutions."
    },
    {
      title: "Software Engineer",
      company: "Falaina India Pvt Ltd",
      period: "Jul 2021 - Dec 2021",
      description: "Focused on software development and system integration."
    },
    {
      title: "Junior Software Developer",
      company: "Deep Identity Pte Ltd",
      period: "Jun 2020 - Jun 2021",
      description: "Worked on identity management and security solutions."
    },
    {
      title: "Application Developer",
      company: "Ingenuity Insights India Pvt Ltd",
      period: "May 2018 - May 2020",
      description: "Led development of mobile applications and enterprise solutions."
    },
    {
      title: "Software Developer Intern",
      company: "Zoho Corp",
      period: "Nov 2017 - Apr 2018",
      description: "Gained hands-on experience in software development."
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">
          Experience Journey
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="glass-effect p-6 rounded-xl transform transition-all duration-500 hover:scale-110 group cursor-pointer">
                    <div className={`flex items-center space-x-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <Calendar className="text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                      <span className="text-sm text-blue-300 group-hover:text-blue-200 transition-colors">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{exp.title}</h3>
                    <p className="text-blue-300 font-medium mb-2 group-hover:text-blue-200 transition-colors">{exp.company}</p>
                    <p className="text-blue-100 group-hover:text-white transition-colors">{exp.description}</p>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <DailyQuote />
        </div>
      </div>
    </section>
  );
};

export default Experience;