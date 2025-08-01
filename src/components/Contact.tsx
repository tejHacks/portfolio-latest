import React from 'react';
import { Mail, Github, Twitter, Linkedin, MessageCircle, ExternalLink, Send, Heart } from 'lucide-react';
import { Analytics } from "@vercel/analytics/next";


const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "olateju202@gmail.com",
      href: "mailto:olateju202@gmail.com",
      color: "red",
      description: "For professional inquiries and opportunities"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "+234 808 697 6247",
      href: "https://wa.me/2348086976247",
      color: "green",
      description: "Quick chats and instant communication"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      subtitle: "@tejHacks",
      href: "https://github.com/tejHacks",
      color: "gray",
      description: "Check out my code and contributions"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      subtitle: "Olateju Olamide",
      href: "https://www.linkedin.com/in/olateju-olamide-22314a292/",
      color: "blue",
      description: "Professional networking and career updates"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "Twitter",
      subtitle: "@OlatejuOlamid10",
      href: "https://x.com/OlatejuOlamid10",
      color: "sky",
      description: "Tech thoughts and daily updates"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "text-red-400 bg-red-600/20 hover:bg-red-600/30 border-red-500/30",
      green: "text-green-400 bg-green-600/20 hover:bg-green-600/30 border-green-500/30",
      gray: "text-gray-400 bg-gray-600/20 hover:bg-gray-600/30 border-gray-500/30",
      blue: "text-blue-400 bg-blue-600/20 hover:bg-blue-600/30 border-blue-500/30",
      sky: "text-sky-400 bg-sky-600/20 hover:bg-sky-600/30 border-sky-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4">
            Ready to build something amazing together? I don't bite—unless you write semicolons in Python 😤
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you're looking for a backend developer, have a project idea, or just want to chat about tech, 
            I'm always excited to connect with fellow developers and innovators.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border ${getColorClasses(method.color)} transition-all duration-300 transform hover:scale-105 hover:shadow-xl group`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${getColorClasses(method.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {method.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-slate-300 font-medium mb-2">{method.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{method.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Send className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Ready to Start a Conversation?</h3>
              <Heart className="w-8 h-8 text-red-400" />
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I'm currently open to <strong className="text-emerald-400">backend development opportunities</strong>, 
              <strong className="text-blue-400"> internships</strong>, and <strong className="text-purple-400">collaborative projects</strong>. 
              Let's discuss how we can build something meaningful together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:olateju202@gmail.com"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 flex items-center space-x-3"
              >
                <Mail className="w-5 h-5" />
                <span>Send me an email</span>
              </a>
              <a
                href="https://wa.me/2348086976247"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-slate-600 hover:border-green-400 text-slate-300 hover:text-green-400 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-full border border-slate-700/50">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Based in Akure, Nigeria 🇳🇬</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;