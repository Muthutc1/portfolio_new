import React, { useState } from 'react';
import { Smartphone, Apple, Monitor, Smile, Code2, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('android');

  return (
    <section id="portfolio" className="py-12 bg-gradient-to-br from-navy/40 via-dark-blue/30 to-navy/40 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-blue via-light-blue to-dusty-rose animate-pulse">
          Apps & Web Apps
        </h2>

        {/* Tabs */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-dark-blue/30 backdrop-blur-md rounded-2xl p-2 max-w-2xl w-full">
            <div className="grid grid-cols-3 gap-2">
              {[
                { 
                  id: 'android',
                  icon: <Smartphone className="w-5 h-5" />,
                  label: 'Android Apps',
                  color: 'from-green-400/80 to-emerald-600/80'
                },
                { 
                  id: 'ios',
                  icon: <Apple className="w-5 h-5" />,
                  label: 'iOS Apps',
                  color: 'from-blue-400/80 to-indigo-600/80'
                },
                { 
                  id: 'frontend',
                  icon: <Monitor className="w-5 h-5" />,
                  label: 'Frontend',
                  color: 'from-purple-400/80 to-pink-600/80'
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl transition-all duration-500 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} shadow-lg scale-105`
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[600px]">
          {/* Android Apps Tab */}
          <div className={`absolute inset-0 transition-all duration-700 transform ${
            activeTab === 'android' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}>
            <div className="relative w-[300px] mx-auto">
              <div className="relative aspect-[9/19] bg-gradient-to-b from-dark-blue to-navy rounded-[3rem] p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-2 bg-gradient-to-br from-sky-blue/10 to-light-blue/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
                  <div className="h-6 bg-black/80 flex items-center justify-between px-6">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex space-x-2">
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="text-center animate-bounce">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                        Hi there! <Smile className="inline-block w-6 h-6 text-yellow-500 animate-pulse" />
                      </h3>
                    </div>
                    <div className="space-y-4 animate-fadeIn">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <Code2 className="w-5 h-5 mr-2 text-emerald-400" />
                          Android Projects
                        </h4>
                        <ul className="space-y-3">
                          {[
                            'Healthcare App',
                            'Fitness Tracker',
                            'Social Media App'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-white/80 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* iOS Apps Tab */}
          <div className={`absolute inset-0 transition-all duration-700 transform ${
            activeTab === 'ios' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
          }`}>
            <div className="relative w-[300px] mx-auto">
              <div className="relative aspect-[9/19] bg-gradient-to-b from-navy to-dark-blue rounded-[3rem] p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-sky-blue/10 to-light-blue/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
                  <div className="h-12 flex items-end justify-between px-6 pb-2">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex space-x-2">
                      <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="text-center animate-bounce">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                        Welcome! <Smile className="inline-block w-6 h-6 text-yellow-500 animate-pulse" />
                      </h3>
                    </div>
                    <div className="space-y-4 animate-fadeIn">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <Code2 className="w-5 h-5 mr-2 text-blue-400" />
                          iOS Projects
                        </h4>
                        <ul className="space-y-3">
                          {[
                            'Finance App',
                            'Weather App',
                            'Task Manager'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-white/80 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend Tab */}
          <div className={`absolute inset-0 transition-all duration-700 transform ${
            activeTab === 'frontend' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}>
            <div className="relative w-[600px] mx-auto">
              <div className="bg-gradient-to-b from-navy to-dark-blue rounded-lg p-4 shadow-2xl">
                {/* MacBook Screen */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-sky-blue/10 to-light-blue/10 rounded-lg overflow-hidden backdrop-blur-xl">
                  {/* Menu Bar */}
                  <div className="h-6 bg-black/80 flex items-center justify-between px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-200"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8">
                    <div className="text-center animate-bounce mb-6">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Hey there! <Smile className="inline-block w-6 h-6 text-yellow-500 animate-pulse" />
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6 animate-fadeIn">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <Code2 className="w-5 h-5 mr-2 text-purple-400" />
                          Web Apps
                        </h4>
                        <ul className="space-y-3">
                          {[
                            'Admin Dashboard',
                            'E-commerce Platform',
                            'Social Network'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-white/80 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                        <h4 className="font-semibold text-white mb-4 flex items-center">
                          <Code2 className="w-5 h-5 mr-2 text-pink-400" />
                          Technologies
                        </h4>
                        <ul className="space-y-3">
                          {[
                            'React & Next.js',
                            'TypeScript',
                            'Tailwind CSS'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-white/80 hover:text-white transition-colors">
                              <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* MacBook Base */}
                <div className="h-4 bg-gradient-to-b from-navy to-dark-blue rounded-b-xl mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;