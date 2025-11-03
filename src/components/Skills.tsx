import { 
  Code, 
  Database, 
  Server, 
  Terminal, 
  Monitor,
  Cpu,
  Shield,
  BookOpen,
  Coffee
} from 'lucide-react';
import { FaPhp, FaCode, FaLaravel, FaDragon, FaWindows, FaNode, FaReact, FaPython, FaDocker, FaGitAlt, FaLinux, FaShieldAlt, FaNetworkWired, FaBrain, FaVial, FaGitSquare } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiFedora, SiPostgresql, SiSqlite, SiMariadb, SiParrotsecurity, SiTensorflow, SiOpencv, SiTailwindcss, SiJavascript, SiHtml5, SiVuedotjs, SiPostman, SiReact, SiExpo, SiFirebase, SiFlutter, SiTypescript, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "emerald",
      skills: [
        { name: "Node.js", level: 75, icon: <FaNode className="text-green-400" /> },
        { name: "REST APIs", level: 85, icon: <FaNetworkWired className="text-sky-400" /> },
        { name: "PHP", level: 90, icon: <FaPhp className="text-purple-400" /> },
        { name: "Laravel", level: 85, icon: <FaLaravel className="text-red-400" /> },
        { name: "Python", level: 70, icon: <FaPython className="text-yellow-400" /> },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "React", level: 75, icon: <FaReact className="text-cyan-400" /> },
        { name: "Vue.js", level: 80, icon: <SiVuedotjs className="text-green-400" /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML/CSS", level: 90, icon: <SiHtml5 className="text-orange-400" /> },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Cpu className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "React Native", level: 80, icon: <SiReact className="text-blue-400" /> },
        { name: "Expo", level: 75, icon: <SiExpo className="text-gray-400" /> },
        { name: "Firebase", level: 70, icon: <SiFirebase className="text-yellow-400" /> },
        { name: "Flutter", level: 65, icon: <SiFlutter className="text-blue-500" /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript className="text-blue-300" /> },
        { name: "Redux", level: 70, icon: <SiRedux className="text-purple-400" /> },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "amber",
      skills: [
        { name: "MySQL", level: 85, icon: <SiMysql className="text-blue-400" /> },
        { name: "PostgreSQL", level: 75, icon: <SiPostgresql className="text-indigo-400" /> },
        { name: "SQLite", level: 80, icon: <SiSqlite className="text-purple-300" /> },
        { name: "MariaDB", level: 75, icon: <SiMariadb className="text-blue-300" /> },
        { name: "MongoDB", level: 75, icon: <SiMongodb className="text-blue-300" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="w-6 h-6" />,
      color: "cyan",
      skills: [
        { name: "Docker", level: 70, icon: <FaDocker className="text-blue-400" /> },
        { name: "Git", level: 90, icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Linux", level: 90, icon: <FaLinux className="text-white" /> },
        { name: "VS Code", level: 95, icon: <FaCode className="text-blue-500" /> },
        { name: "Postman", level: 85, icon: <SiPostman className="text-orange-300" /> },
        { name: "Fedora", level: 85, icon: <SiFedora className="text-blue-400" /> },
        { name: "Windows", level: 90, icon: <FaWindows className="text-blue-300" /> },
      ],
    },
    {
      title: "Security & Systems",
      icon: <Shield className="w-6 h-6" />,
      color: "red",
      skills: [
        { name: "Kali Linux", level: 83, icon: <FaDragon className="text-red-500" /> },
        { name: "Parrot OS", level: 70, icon: <SiParrotsecurity className="text-green-300" /> },
        { name: "Network Security", level: 70, icon: <FaShieldAlt className="text-rose-400" /> },
        { name: "System Admin", level: 70, icon: <Terminal className="text-white" /> },
      ],
    },
    {
      title: "Machine Learning",
      icon: <BookOpen className="w-6 h-6" />,
      color: "pink",
      skills: [
        { name: "Python ML", level: 65, icon: <FaBrain className="text-pink-400" /> },
        { name: "TensorFlow", level: 65, icon: <SiTensorflow className="text-orange-400" /> },
        { name: "Data Analysis", level: 50, icon: <FaVial className="text-fuchsia-400" /> },
        { name: "OpenCV", level: 55, icon: <SiOpencv className="text-slate-300" /> },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-600 to-emerald-700 border-emerald-500/50 shadow-emerald-500/25",
      blue: "from-blue-600 to-blue-700 border-blue-500/50 shadow-blue-500/25",
      purple: "from-purple-600 to-purple-700 border-purple-500/50 shadow-purple-500/25",
      amber: "from-amber-600 to-amber-700 border-amber-500/50 shadow-amber-500/25",
      cyan: "from-cyan-600 to-cyan-700 border-cyan-500/50 shadow-cyan-500/25",
      red: "from-red-600 to-red-700 border-red-500/50 shadow-red-500/25",
      pink: "from-pink-600 to-pink-700 border-pink-500/50 shadow-pink-500/25",
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
            A comprehensive toolkit for building scalable, maintainable full-stack and mobile solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${categoryIndex * 100}ms`,
              }}
            >
              {/* Category Header */}
              <div className={`flex items-center space-x-3 mb-6 p-3 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)} border shadow-lg`}>
                <div className="text-white">{category.icon}</div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <span className="text-xl">{skill.icon}</span>
                    <div className="flex-1">
                      <span className="text-slate-300 font-medium text-lg">{skill.name}</span>
                      <div className="w-full bg-slate-700 rounded-full h-2.5 mt-1">
                        <div
                          className={`h-2.5 rounded-full bg-${category.color}-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
              I believe in continuous learning, clean code, and building impactful full-stack and mobile solutions. 
              Whether it’s mastering React Native with Expo and Firebase or diving into system architecture, 
              I’m always ready to tackle the next challenge with enthusiasm and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;