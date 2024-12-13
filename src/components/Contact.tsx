import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import CustomPopup from './CustomPopup';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-white mb-12 text-center animate-slideRight">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fadeIn">
            <div className="glass-effect rounded-2xl p-8 animate-glow">
              <h3 className="text-2xl font-display font-semibold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email</p>
                    <a 
                      href="mailto:muthukumarct978@gmail.com" 
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      muthukumarct978@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Phone</p>
                    <a 
                      href="tel:+919841874081" 
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      +91 - 9841874081
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Location</p>
                    <p className="text-white">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-effect rounded-2xl p-8 animate-glow"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-200 mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-blue-900/30 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-200 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-blue-900/30 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-200 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-blue-900/30 border border-blue-400/30 rounded-lg px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg"
              >
                <Send size={18} />
                <span className="font-medium">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <CustomPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default Contact;