import React from 'react';
import { Brain, Book, Gamepad2, Shield, Terminal, Palette, Heart, Puzzle, Coffee, Music } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Coding & Tinkering",
      description: "Backend logic, dev tools, building stuff",
      color: "emerald"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Bible Study",
      description: "Rooted in purpose and values",
      color: "amber"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Reading Books",
      description: "Technical, history, philosophy",
      color: "blue"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Chess & Logic Puzzles",
      description: "Strategy and deep thinking",
      color: "purple"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Basketball & Gaming",
      description: "Whether IRL or retro",
      color: "orange"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Art & Aesthetics",
      description: "Design, anime, digital vibes",
      color: "pink"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Linux & CLI",
      description: "Terminal tools and shell life",
      color: "green"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Concepts",
      description: "Kali, Parrot, systems poking",
      color: "red"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Self-Learning",
      description: "Docs, breakdowns, late-night builds",
      color: "brown"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "History & Philosophy",
      description: "Stoics, Aurelius, meaning",
      color: "indigo"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Poetry & Writing",
      description: "Expression and reflection",
      color: "violet"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Puzzle & Car Games",
      description: "Fun breaks with logic layers",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "text-emerald-400 bg-emerald-600/20 hover:bg-emerald-600/30",
      amber: "text-amber-400 bg-amber-600/20 hover:bg-amber-600/30",
      blue: "text-blue-400 bg-blue-600/20 hover:bg-blue-600/30",
      purple: "text-purple-400 bg-purple-600/20 hover:bg-purple-600/30",
      orange: "text-orange-400 bg-orange-600/20 hover:bg-orange-600/30",
      pink: "text-pink-400 bg-pink-600/20 hover:bg-pink-600/30",
      green: "text-green-400 bg-green-600/20 hover:bg-green-600/30",
      red: "text-red-400 bg-red-600/20 hover:bg-red-600/30",
      brown: "text-yellow-600 bg-yellow-600/20 hover:bg-yellow-600/30",
      indigo: "text-indigo-400 bg-indigo-600/20 hover:bg-indigo-600/30",
      violet: "text-violet-400 bg-violet-600/20 hover:bg-violet-600/30",
      cyan: "text-cyan-400 bg-cyan-600/20 hover:bg-cyan-600/30"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center">
            <Heart className="w-12 h-12 text-red-400 mr-4" />
            Hobbies & <span className="text-emerald-400">Interests</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Beyond code: the passions and curiosities that fuel my creativity and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`w-16 h-16 rounded-2xl ${getColorClasses(hobby.color)} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                <div className="transition-transform duration-300 group-hover:animate-pulse">
                  {hobby.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {hobby.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;