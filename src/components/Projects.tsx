import { ExternalLink, Github, Brain, Stethoscope, Mic, Code, Palette, Timer, Calculator, Lock, Globe } from 'lucide-react';

const Projects = () => {
 const mlProjects = [
  {
    title: "Neonatal Jaundice Prediction",
    description: "Machine learning model deployed as a web app for early jaundice diagnosis. Built with Python and scikit-learn, hosted on Netlify for clinical accessibility.",
    techStack: ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy"],
    icon: <Brain className="w-8 h-8" />,
    category: "Medical AI",
    liveDemo: "https://lumicare-ai.netlify.app",
    github: "https://github.com/tejHacks/neonatal-jaundice-prediction",
    color: "emerald"
  },
  {
    title: "Breast Cancer Detection via Ultrasound",
    description: "Deep learning model using ultrasound images for breast cancer detection. Deployed with Streamlit (not currently live).",
    techStack: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
    icon: <Stethoscope className="w-8 h-8" />,
    category: "Medical Imaging",
    liveDemo: null,
    github: "https://github.com/tejHacks/breast-cancer-ultrasound",
    color: "pink"
  },
  {
    title: "Speaker Diarization System",
    description: "Streamlit-based audio processing system to identify and separate different speakers in conversations. Combines PyTorch and audio signal processing.",
    techStack: ["Python", "Streamlit", "librosa", "PyTorch", "scipy", "sklearn"],
    icon: <Mic className="w-8 h-8" />,
    category: "Audio AI",
    liveDemo: null,
    github: "https://github.com/tejHacks/speaker-diarization",
    color: "purple"
  }
];


  const webProjects = [
    {
      title: "Palindrome Checker",
      description: "A sleek web application that checks if words or phrases are palindromes. Features real-time validation, case-insensitive checking, and handles spaces and punctuation gracefully. Built with clean JavaScript and responsive design.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      liveDemo: "https://palindrome-checker-plum-sigma.vercel.app/",
      github: "https://github.com/tejHacks/palindrome-checker",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Web Paint App",
      description: "Digital canvas application with multiple brush tools, color palette, layers support, and save functionality. Implements HTML5 Canvas API with smooth drawing experience and undo/redo capabilities for creative expression.",
      techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Local Storage"],
      image: "https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg",
      liveDemo: "https://web-paint-delta.vercel.app/",
      github: "https://github.com/tejHacks/web-paint-app",
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Pomo Chrono",
      description: "Productivity-focused Pomodoro timer with customizable work/break intervals, progress tracking, and ambient sounds. Features session statistics, daily goals, and notification system to boost focus and productivity.",
      techStack: ["JavaScript", "Web Audio API", "CSS3", "Progressive Web App"],
      image: "https://images.pexels.com/photos/1059120/pexels-photo-1059120.jpeg",
      liveDemo: "https://pomo-chrono.vercel.app/",
      github: "https://github.com/tejHacks/pomo-chrono",
      icon: <Timer className="w-6 h-6" />
    },
    {
      title: "Mass Converter",
      description: "Comprehensive unit conversion tool supporting multiple mass units from grams to tons. Features instant conversion, precise calculations, scientific notation support, and educational information about different measurement systems.",
      techStack: ["JavaScript", "CSS3", "HTML5", "Math.js"],
      image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg",
      liveDemo: "https://mass-converter-eight.vercel.app/",
      github: "https://github.com/tejHacks/mass-converter",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Vue Todo App",
      description: "Modern task management application built with Vue 3 Composition API. Features drag-and-drop reordering, categories, due dates, priority levels, and local storage persistence for seamless task organization.",
      techStack: ["Vue.js 3", "Composition API", "Tailwind CSS", "Vite"],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      liveDemo: "https://vue-todo-app-orpin-rho.vercel.app",
      github: "https://github.com/tejHacks/vue-todo-app",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Password Manager",
      description: "Secure password management system with encryption, password generation, and organized storage. Built with PHP and MySQL, featuring strong encryption algorithms and user authentication for protecting sensitive credentials.",
      techStack: ["PHP", "MySQL", "Bootstrap", "AES Encryption", "Apache"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      github: "https://github.com/tejHacks/password-keeper-php",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-600/20 to-emerald-800/20 border-emerald-500/30",
      pink: "from-pink-600/20 to-pink-800/20 border-pink-500/30",
      purple: "from-purple-600/20 to-purple-800/20 border-purple-500/30",
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of my work spanning web development, machine learning, and system tools
          </p>
        </div>

        {/* ML Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Brain className="w-8 h-8 text-emerald-400 mr-4" />
            Machine Learning & AI Projects
          </h3>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {mlProjects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-gradient-to-br ${getColorClasses(project.color)} backdrop-blur-sm rounded-2xl p-6 border hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl bg-${project.color}-600/20 text-${project.color}-400`}>
                    {project.icon}
                  </div>
                  <div>
                    <span className={`text-${project.color}-400 text-sm font-medium`}>{project.category}</span>
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>  
                  {project.liveDemo ? (
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
  >
    <ExternalLink className="w-4 h-4" />
    <span>Live Demo</span>
  </a>
) : (
  <div className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white rounded-lg opacity-60 cursor-not-allowed">
    <ExternalLink className="w-4 h-4" />
    <span>Live Link Not Available</span>
  </div>
)}

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Projects Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Globe className="w-8 h-8 text-blue-400 mr-4" />
            Web Development Projects
          </h3>
          
          <div className="space-y-12">
            {webProjects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="aspect-video lg:aspect-square bg-slate-700 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-emerald-600/20 rounded-lg text-emerald-400">
                      {project.icon}
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-white">{project.title}</h4>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/tejHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-3" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;