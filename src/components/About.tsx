import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/80 dark:bg-blue-900/30 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 animate-slideRight">About Me</h2>
        <div className="bg-white/90 dark:bg-blue-900/20 backdrop-blur-md rounded-2xl p-8 border border-gray-200/20 dark:border-white/10 transform hover:scale-105 transition-all duration-500">
          <div className="space-y-6 leading-relaxed">
            <p className="text-gray-700 dark:text-white/90 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              I'm a passionate Software Developer with over 6 years of experience specializing in mobile application development.
              My expertise spans across Android, iOS, and cross-platform frameworks like Xamarin and .NET MAUI, allowing me to
              create seamless mobile experiences across different platforms.
            </p>
            <p className="text-gray-700 dark:text-white/90 animate-fadeIn" style={{ animationDelay: '400ms' }}>
              Throughout my career, I've had the opportunity to work on diverse projects in Healthcare, Finance, Cybersecurity,
              and Aviation sectors. I've successfully delivered more than 10 applications, each contributing to my growth as a
              developer and reinforcing my passion for creating impactful solutions.
            </p>
            <p className="text-gray-700 dark:text-white/90 animate-fadeIn" style={{ animationDelay: '600ms' }}>
              My technical toolkit includes strong proficiency in .NET Web Services, Node.js, and both SQL and NoSQL databases.
              I'm always excited to take on new challenges and contribute to innovative projects that push the boundaries of
              what's possible in mobile development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;