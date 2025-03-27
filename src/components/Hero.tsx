import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold animate-slideRight">
                I'M <span className="text-amber-400">Muthukumar</span>
              </h1>
              <p className="text-xl text-gray-400 animate-slideLeft">Software Developer</p>
              
              <div className="flex space-x-4">
                <a href="#contact" className="bg-amber-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-amber-500 transition-colors transform hover:scale-105">
                  Contact Me
                </a>
              </div>
              
              <div className="flex space-x-4 text-gray-400">
                <a href="https://github.com" className="hover:text-amber-400 transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://in.linkedin.com/in/ctmuthu" className="hover:text-amber-400 transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:muthukumarct978@gmail.com" className="hover:text-amber-400 transition-colors transform hover:scale-110">
                  <Mail size={24} />
                </a>
                <div className="flex items-center space-x-2">
                  <MapPin size={24} />
                  <span>Chennai, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fadeIn">
              <div className="bg-blue-900/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all">
                <div className="text-gray-300 space-y-4">
                  <p className="leading-relaxed">
                    I'm a Software Developer with 6+ years of experience in mobile application development, 
                    specializing in Android, iOS, and cross-platform frameworks like Xamarin and .NET MAUI.
                  </p>
                  <p className="leading-relaxed">
                    With solid skills in HTML, CSS, JavaScript, and frameworks like Angular and React, 
                    I have worked across diverse domains such as Healthcare, Finance, Cybersecurity, 
                    TV Game Apps, and Aviation.
                  </p>
                  <blockquote className="border-l-4 border-amber-400 pl-4 italic text-amber-400">
                    "Believe it! Never give up, because that is my ninja way!" - Naruto Uzumaki
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative animate-float">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-blue-500 rounded-full blur opacity-75 animate-pulse"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEOzUzVT3sKyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718291702946?e=2147483647&v=beta&t=z5MnrZrlljzHP6R88f8krreA0gnILH0IV5LdoJBNAg8"
              alt="Profile"
              className="relative w-72 h-72 rounded-full object-cover mx-auto border-4 border-amber-400 transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;