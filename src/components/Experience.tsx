import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import DailyQuote from './DailyQuote';
import ExperiencePopup from './ExperiencePopup';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<null | {
    title: string;
    company: string;
    details: string[];
  }>(null);

  const experiences = [
    {
      title: "Software Engineer",
      company: "TCS",
      period: "Jan 2023 - Present",
      description: "Working as a Software Engineer developing and maintaining enterprise applications.",
      details: [
        "Developed mobile applications using Xamarin and .NET MAUI while ensuring seamless BackEnd integration.",
        "Contributed to ASP.NET application development and provided cross-functional support across different project phases.",
        "Worked with various services, plugins, and analytics tools to enhance application performance and user experience.",
        "Managed the complete mobile app development lifecycle, from project initiation to deployment and maintenance.",
        "Worked closely with the QA team (Onshore) to define test cases, conduct rigorous testing, and resolve performance bottlenecks and bugs."
      ]
    },
    {
      title: "Software Engineer",
      company: "Adappt Mobile Cloud application pvt ltd",
      period: "Jan 2022 - Dec 2022",
      description: "Specialized in mobile application development and cloud solutions.",
      details: [
        "Analyzing the client's requirements and designing a technical document for the requirement as a team.",
        "Participated in daily standup meetings and was involved in scrum project estimation meeting",
        "Worked on the Accessibility features",
        "Used MVVM design pattern to design the application.",
        "Used an App center for analytics and error handling.",
        "Worked on the development of applications for android and iOS, with Xamarin forms."
      ]
    },
    {
      title: "Software Engineer",
      company: "Falaina India Pvt Ltd",
      period: "Jul 2021 - Dec 2021",
      description: "Software Engineer with Expertise in Web and Mobile Development for Financial Security Applications",
      details: [
        "Schedule Developing the Mobile and web-based software using computer programming languages such as Xamarin,C#,ASP Net,Web API and MSSQL.",
        "Experience in pushservice the Application in App Store and Google Play Store.",
        "Developed an application where users can log in with QR or Push Notification from Mobile to web(MFA )",
        "Followed MVVM Patterns and MVC."
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Deep Identity Pte Ltd",
      period: "Jun 2020 - Jun 2021",
      description: "Worked as a Software Engineer and Developed Identity and Access Management (IAM) Solutions",
      details: [
        "Successfully Developed applications using these Technologies like Xamarin, Asp Net, Web API, SQL",
        "Testing the applications and websites on different web browsers and Mobile devices to ensure a standard user experience for the clients across all platforms."
      ]
    },
    {
      title: "Application Developer",
      company: "Ingenuity Insights India Pvt Ltd",
      period: "May 2018 - May 2020",
      description: "Led development of mobile applications and enterprise solutions.",
      details: [
        "Analyzing the requirements and designed a technical document for the requirement as a team.",
        "Implementing Rest API to get all response from server end and render the data on UI screens as per the keyword. Using the serialized JSON to read the response that came through the server."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Zoho Corp",
      period: "Nov 2017 - Apr 2018",
      description: "Gained hands-on experience in software development.",
      details: [
        "Assisting team in verifying, developing, and testing user interfaces for business process",
        "Work with product owners and leads to understand use cases and develop them into feature.",
        "Participate in code reviews."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-br from-navy via-dark-blue to-navy">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">
          Experience Journey
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-blue via-light-blue to-dusty-rose"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-sky-blue rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-sky-blue rounded-full animate-ping"></div>
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div 
                    className="glass-effect p-6 rounded-xl transform transition-all duration-500 hover:scale-110 group cursor-pointer"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div className={`flex items-center space-x-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <Calendar className="text-sky-blue group-hover:text-light-blue transition-colors" size={20} />
                      <span className="text-sm text-sky-blue group-hover:text-light-blue transition-colors">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-light-blue transition-colors">{exp.title}</h3>
                    <p className="text-sky-blue font-medium mb-2 group-hover:text-light-blue transition-colors">{exp.company}</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{exp.description}</p>
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

      {selectedExperience && (
        <ExperiencePopup
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          experience={selectedExperience}
        />
      )}
    </section>
  );
};

export default Experience;