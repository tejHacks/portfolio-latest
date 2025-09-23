import {  FaLaughWink, } from 'react-icons/fa';
import { ExternalLink,ComputerIcon, Github,SpeakerIcon, Brain, Stethoscope, Mic, Code, Palette, Timer, Calculator, Lock, Globe } from 'lucide-react';

import Image1 from '../assets/mark-dart.jpg';
import Image2 from '../assets/palindrome.png';
import Image4 from '../assets/mass-converter.png'
import Image3 from '../assets/pomo-chrono.png';
import Image5 from '../assets/web-paint.png';
import Image6 from '../assets/password-maanger.png';
import Image7 from '../assets/spanish.png';
import Image8 from '../assets/rizz.jpg';
import Image9 from '../assets/plants-keeper.png';
import Image10 from '../assets/cpp-camp-1.jpg';
import Image11 from '../assets/lumicare.png';
import Image12 from '../assets/mamacare.jpg';
import Image13 from '../assets/bible.jpg';  // Download the screenshot from https://raw.githubusercontent.com/tejHacks/random-bible-verse-extension/main/bible.jpg and save it in src/assets/

// Add these to your imports at the top
import Image14 from '../assets/linux-keeper.png';  // Screenshot for Linux Commands Keeper
import Image15 from '../assets/docker.png';  // For Docker Commands Keeper
import Image16 from '../assets/library.png';  // For AUO Library
import Image17 from '../assets/poem.png';  // For Poem Keeper
import Image18 from '../assets/bible-study.png';  // For Bible Study Notes
import Image19 from '../assets/sniphub.png';  // For SnipHub
import Image20 from '../assets/color-pallete.png';  // For Color Palette Generator
import Image21 from '../assets/nmap.png';  // For Nmap Commands Keeper


const Projects = () => {
  const mlProjects = [

    {
      title: "Neonatal Jaundice Prediction",
      description: "Machine learning model deployed as a web app for early jaundice diagnosis. Built with Python and scikit-learn, hosted on Netlify for clinical accessibility.",
      techStack: ["Python", "TypeScript", "React", "Node.js", "MySQL", "scikit-learn", "Pandas", "NumPy",],
      icon: <Brain className="w-8 h-8" />,
      category: "Medical AI",
      liveDemo: "https://lumicare-ai.netlify.app",
      github: "https://github.com/tejHacks/neonatal-jaundice-prediction",
      color: "emerald"
    },
    {
      title: "Breast Cancer Detection via Ultrasound",
      description: "Aim: Deep learning model using ultrasound images for breast cancer detection.Developed for Final Year Research Project before undergoing the Speaker Dirizaition Model Development.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Streamlit", "Keras", "NumPy"],
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
      title: "CppCamp",
      description: "A multi functional next-gen platform for mastering C++ with hands-on practice, smart tools, AI based mentor and learning resources plus straightfroward curriculum and simplified approach to learning plus fully functional web based code editor",
      techStack: ["JavaScript", "React", "TypeScript", "Local Storage", "Framer Motion", "Lucide React"],
      image: Image10,
      liveDemo: "https://cpp-camp.vercel.app/",
      github: " https://github.com/tejHacks/cppCamp",
      icon: <ComputerIcon className="w-6 h-6" />
    },
     {
      title: "Lumicare AI",
      description: "A multi functional web app designed to detect jaundice in babies using a custom-built Computer Vision based model. I and 2 of my colleagues built this model for the HelpMum carecode Hackathon and our models accuracy was over 96% after training and fine-tuning,I handled the models deployment and designed the frontend and backend of the entire web application architecture.",
      techStack: ["JavaScript", "React", "TypeScript", "Local Storage","Node.js", "MYSQL","Fast API", "SwaggerUI","Tensorflow", "OpenCV", "Framer Motion", "Lucide React","Python","Sklearn", "Flask"],
      image: Image11,
      liveDemo: "https://lumicare-ai.netlify.app/",
      github: "https://github.com/tejHacks/jaundice-model-backend",
      icon: <ComputerIcon className="w-6 h-6" />
    },
      {
      title: "MamaCare ",
      description: "A multi functional web application designed to help pregnant mothers in the pregnancy stage with multiple features tailored towards aiding them(Pregnancy, tracker,",
      techStack: ["JavaScript", "React", "TypeScript", "Local Storage","Node.js", "MYSQL","Fast API", "SwaggerUI","Tensorflow", "OpenCV", "Framer Motion", "Lucide React","Python","Sklearn", "Flask"],
      image: Image12,
      liveDemo: "https://lumicare-ai.netlify.app/",
      github: "https://github.com/tejHacks/jaundice-model-backend",
      icon: <ComputerIcon className="w-6 h-6" />
    },
    {
      title: "RizzMe",
      description: "A sleezy line generator for ri**ing your opposite gender",
      techStack: ["JavaScript", "React", "TypeScript", "Local Storage", "Framer Motion", "Lucide React"],
      image: Image8,
      liveDemo: "https://rizz-generator.vercel.app/",
      github: " https://github.com/tejHacks/rizz-generator/",
      icon: <FaLaughWink className="w-6 h-6" />
    },
    {
      title: "MarkDart",
      description: "A sleek web based Markdown editor",
      techStack: ["JavaScript", "React", "NextJS", "TypeScript", "Local Storage", "Next Themes"],
      image: Image1,
      liveDemo: "https://markdart-editor.vercel.app/",
      github: "https://github.com/tejHacks/markDartv1/",
      icon: <Code className="w-6 h-6" />
    },
        {
    title: "Bible Verse Extension",
    description: "My first random Bible verse Chrome extension—replaces your new tab with inspiring daily Bible verses and Psalms for a quick spiritual boost. Simple, lightweight, and easy to install.",
    techStack: ["JavaScript", "Chrome Extension API", "HTML5", "CSS3"],
    image: Image13,
    liveDemo: null,  // No live link for extensions; could add a demo video URL if you have one
    github: "https://github.com/tejHacks/random-bible-verse-extension",
    icon: <Code className="w-6 h-6" />  // Using Code icon since it's dev-focused; swap to SpeakerIcon if you want audio vibes
  },
  {
    title: "Linux Commands Keeper",
    description: "A compact PHP web app for storing, viewing, and organizing your favorite Linux commands—perfect for quick reference and CLI workflows.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: Image14,
    liveDemo: null,
    github: "https://github.com/tejHacks/linux-commands-keeper",
    icon: <ComputerIcon className="w-6 h-6" />
  },
  {
    title: "Docker Commands Keeper",
    description: "Another handy PHP-based commands keeper, this time focused on Docker—save, search, and manage container commands for smoother devops flows.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: Image15,
    liveDemo: null,
    github: "https://github.com/tejHacks/docker-commands-keeper",
    icon: <ComputerIcon className="w-6 h-6" />
  },
  {
    title: "Nmap Commands Keeper",
    description: "A PHP web tool for managing Nmap commands with copy-to-clipboard, dark mode, and secure execution previews—built for pentesting enthusiasts (execution safety in progress).",
    techStack: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
    image: Image21,
    liveDemo: null,
    github: "https://github.com/tejHacks/nmap-commands-keeper",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "AUO Library Management System",
    description: "Full-featured PHP system for Achievers University library—handles student/lecturer registrations, book tracking, borrowing, searches, and reading plans to streamline workflows.",
    techStack: ["PHP", "MySQL", "Bootstrap", "jQuery", "Ajax", "JavaScript"],
    image: Image16,
    liveDemo: null,
    github: "https://github.com/tejHacks/auo-library",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Poem Keeper",
    description: "A simple PHP app to store, edit, and reflect on your personal poems—your digital notebook for creative writing sessions.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: Image17,
    liveDemo: null,
    github: "https://github.com/tejHacks/poem-keeper",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Bible Study Notes",
    description: "Basic PHP app for tracking Bible study notes, with plans for favorites, memory verses, searches, and daily goals—keeping your spiritual journey organized.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: Image18,
    liveDemo: null,
    github: "https://github.com/tejHacks/bible-study-notes",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "SnipHub",
    description: "Minimalist PHP code snippet manager with auth, CRUD ops, search, and a hacker-themed UI—toggle dark mode and store your snippets like a pro.",
    techStack: ["PHP", "MySQL", "Bootstrap 5", "jQuery", "JavaScript"],
    image: Image19,
    liveDemo: null,
    github: "https://github.com/tejHacks/snipHub",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Color Palette Generator",
    description: "Web-based JS tool for generating harmonious color palettes—pick hues, tweak schemes, and export for your design projects.",
    techStack: ["JavaScript", "HTML5", "CSS3", "React"],
    image: Image20,
    liveDemo: "https://color-pallete-nine.vercel.app/",
    github: "https://github.com/tejHacks/color-pallete-generator",
    icon: <Palette className="w-6 h-6" />
  },
    {
      title: "Palindrome Checker",
      description: "A sleek web application that checks if words or phrases are palindromes. Features real-time validation, case-insensitive checking, and handles spaces and punctuation gracefully. Built with clean JavaScript and responsive design.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      image: Image2,
      liveDemo: "https://palindrome-checker-plum-sigma.vercel.app/",
      github: "https://github.com/tejHacks/palindrome-checker",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Web Paint App",
      description: "Digital canvas application with multiple brush tools, color palette, layers support, and save functionality. Implements HTML5 Canvas API with smooth drawing experience and undo/redo capabilities for creative expression.",
      techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Local Storage"],
      image: Image5,
      liveDemo: "https://web-paint-delta.vercel.app/",
      github: "https://github.com/tejHacks/web-paint-app",
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Pomo Chrono",
      description: "Productivity-focused Pomodoro timer with customizable work/break intervals, progress tracking, and ambient sounds. Features session statistics, daily goals, and notification system to boost focus and productivity.",
      techStack: ["JavaScript", "Web Audio API", "CSS3", "Progressive Web App"],
      image: Image3,
      liveDemo: "https://pomo-chrono.vercel.app/",
      github: "https://github.com/tejHacks/pomo-chrono",
      icon: <Timer className="w-6 h-6" />
    },
    {
      title: "Mass Converter",
      description: "Comprehensive unit conversion tool supporting multiple mass units from grams to tons. Features instant conversion, precise calculations, scientific notation support, and educational information about different measurement systems.",
      techStack: ["JavaScript", "CSS3", "HTML5", "Math.js"],
      image: Image4,
      liveDemo: "https://mass-converter-eight.vercel.app/",
      github: "https://github.com/tejHacks/mass-converter",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Learn Spanish",
      description: "Learn Spanish with this simple app built with Vue and Vite.. Features text to Speech via Web based SpeechUtterance API in JavaScript and Composition API In Vue.",
      techStack: ["Vue.js 3", "Composition API", "Tailwind CSS", "Vite"],
      image: Image7,
      liveDemo: "https://spanish-words-pi.vercel.app/",
      github: "https://github.com/tejHacks/spanish-words",
      icon: <SpeakerIcon className="w-6 h-6" />
    },
    {
      title: "Password Monkey",
      description: "Secure password management system with encryption, password generation, and organized storage. Built with PHP and MySQL, featuring strong encryption algorithms and user authentication for protecting sensitive credentials.",
      techStack: ["PHP", "MySQL", "Bootstrap", "AES Encryption", "Apache"],
      image: Image6,
      github: "https://github.com/tejHacks/password-keeper-php",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Plants Keeper",
      description: "Track and manage your plant collection with a PHP & MySQL database.",
      techStack: ["PHP", "MySQL", "Bootstrap", "AES Encryption", "Apache"],
      image: Image9,
      github: "https://github.com/tejHacks/plants-keeper",
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
            {mlProjects.map((project) => (
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
  {/* Web Projects Section */}
<div>
  <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
    <Globe className="w-8 h-8 text-blue-400 mr-4" />
    Web Development Projects
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {webProjects.map((project) => (
      <div
        key={project.title}
        className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex flex-col"
      >
        {/* Image Section */}
        <div className="relative w-full h-48 sm:h-64 md:h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = '/assets/fallback.jpg')} // Fallback image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
              {project.icon}
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">{project.title}</h4>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors transform hover:scale-105 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors transform hover:scale-105 text-sm"
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