import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  GitBranch, 
  Terminal, 
  Layers,
  Monitor,
  Cpu,
  Shield,
  BookOpen,
  Coffee
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "emerald",
      skills: [
        { name: "PHP", level: 90, icon: "🐘" },
        { name: "Laravel", level: 85, icon: "🎨" },
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "REST APIs", level: 85, icon: "🔗" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "💛" },
        { name: "Tailwind CSS", level: 90, icon: "🌊" },
        { name: "HTML/CSS", level: 90, icon: "🎨" }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "MySQL", level: 85, icon: "🐬" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "SQLite", level: 80, icon: "💎" },
        { name: "MariaDB", level: 75, icon: "🦭" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="w-6 h-6" />,
      color: "amber",
      skills: [
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "Git", level: 85, icon: "🌿" },
        { name: "Linux", level: 80, icon: "🐧" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Postman", level: 85, icon: "📮" }
      ]
    },
    {
      title: "Security & Systems",
      icon: <Shield className="w-6 h-6" />,
      color: "red",
      skills: [
        { name: "Kali Linux", level: 65, icon: "🛡️" },
        { name: "Parrot OS", level: 60, icon: "🦜" },
        { name: "Network Security", level: 55, icon: "🔒" },
        { name: "System Admin", level: 70, icon: "⚙️" }
      ]
    },
    {
      title: "Machine Learning",
      icon: <BookOpen className="w-6 h-6" />,
      color: "pink",
      skills: [
        { name: "Python ML", level: 65, icon: "🧠" },
        { name: "TensorFlow", level: 60, icon: "🤖" },
        { name: "Data Analysis", level: 70, icon: "📊" },
        { name: "OpenCV", level: 55, icon: "👁️" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-600 to-emerald-700 border-emerald-500/50 shadow-emerald-500/25",
      blue: "from-blue-600 to-blue-700 border-blue-500/50 shadow-blue-500/25",
      purple: "from-purple-600 to-purple-700 border-purple-500/50 shadow-purple-500/25",
      amber: "from-amber-600 to-amber-700 border-amber-500/50 shadow-amber-500/25",
      red: "from-red-600 to-red-700 border-red-500/50 shadow-red-500/25",
      pink: "from-pink-600 to-pink-700 border-pink-500/50 shadow-pink-500/25"
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center space-x-4">
            <Code className="w-12 h-12 text-emerald-400" />
            <span>Skills & <span className="text-emerald-400">Technologies</span></span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable, maintainable software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${categoryIndex * 100}ms`
              }}
            >
              {/* Category Header */}
              <div className={`flex items-center space-x-3 mb-6 p-3 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)} border shadow-lg`}>
                <div className="text-white">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-emerald-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Coffee className="w-8 h-8 text-amber-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Powered by Coffee & Curiosity</h3>
              <Coffee className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              I believe in continuous learning, clean code, and building things that matter. 
              Whether it's diving deep into system architecture or exploring the latest in ML, 
              I'm always ready to tackle the next challenge with enthusiasm and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;