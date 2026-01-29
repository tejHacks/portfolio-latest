import { FaLaughWink, FaMobile, FaApple, FaAndroid } from "react-icons/fa";
import {
  ExternalLink,
  ComputerIcon,
  Github,
  SpeakerIcon,
  Smartphone,
  Brain,
  Stethoscope,
  Book,
  Gamepad2Icon,
  Mic,
  Code,
  Lock,
  Globe,
} from "lucide-react";

import Image1 from "../assets/mark-dart.jpg";
import Image6 from "../assets/password-maanger.png";
import Image7 from "../assets/spanish.png";
import Image8 from "../assets/rizz.jpg";
import Image10 from "../assets/cpp-camp-1.jpg";
import Image11 from "../assets/lumicare.png";
import Image12 from "../assets/mamacare.jpg";
import Image13 from "../assets/bible.jpg";

import Image14 from "../assets/linux-keeper.png";
import Image15 from "../assets/docker.png";
import Image16 from "../assets/library.png";
import Image19 from "../assets/sniphub.png";
import Image21 from "../assets/nmap.png";
import Image22 from "../assets/bible-game.jpg";
import { FaLinux } from "react-icons/fa6";

// Download buttons component
const DownloadButtons = ({
  androidLink,
  iosLink,
}: {
  androidLink?: string | null;
  iosLink?: string | null;
}) => {
  if (!androidLink && !iosLink) return null;

  return (
    <div className="flex gap-2">
      {androidLink ? (
        <a
          href={androidLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
        >
          <FaAndroid className="w-4 h-4" />
          <span className="text-sm font-semibold">Android</span>
        </a>
      ) : (
        <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-800/50 text-slate-500 rounded-lg cursor-not-allowed border border-slate-700/30">
          <FaAndroid className="w-4 h-4 opacity-40" />
          <span className="text-sm font-medium opacity-60">Android</span>
        </div>
      )}

      {iosLink ? (
        <a
          href={iosLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-slate-500/50"
        >
          <FaApple className="w-4 h-4" />
          <span className="text-sm font-semibold">iOS</span>
        </a>
      ) : (
        <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-800/50 text-slate-500 rounded-lg cursor-not-allowed border border-slate-700/30">
          <FaApple className="w-4 h-4 opacity-40" />
          <span className="text-sm font-medium opacity-60">iOS</span>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const mlProjects = [
    {
      title: "Neonatal Jaundice Prediction",
      description:
        "Machine learning model deployed as a web app for early jaundice diagnosis. Built with Python and scikit-learn, hosted on Netlify for clinical accessibility.",
      techStack: [
        "Python",
        "TypeScript",
        "React",
        "Node.js",
        "MySQL",
        "scikit-learn",
        "Pandas",
        "NumPy",
      ],
      icon: <Brain className="w-8 h-8" />,
      category: "Medical AI",
      liveDemo: "https://lumicare-ai.netlify.app",
      github: "https://github.com/tejHacks/neonatal-jaundice-prediction",
      color: "emerald",
    },
    {
      title: "Breast Cancer Detection via Ultrasound",
      description:
        "Deep learning model using ultrasound images for breast cancer detection. Developed for Final Year Research Project.",
      techStack: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Streamlit",
        "Keras",
        "NumPy",
      ],
      icon: <Stethoscope className="w-8 h-8" />,
      category: "Medical Imaging",
      liveDemo: null,
      github: "https://github.com/tejHacks/breast-cancer-ultrasound",
      color: "pink",
    },
    {
      title: "Speaker Diarization System",
      description:
        "Streamlit-based audio processing system to identify and separate different speakers in conversations. Combines PyTorch and audio signal processing.",
      techStack: [
        "Python",
        "Streamlit",
        "librosa",
        "PyTorch",
        "scipy",
        "Pydub",
        "Ffmpeg",
        "PyAnnote",
        "Keras",
        "sklearn",
      ],
      icon: <Mic className="w-8 h-8" />,
      category: "Audio AI",
      liveDemo: null,
      github: "https://github.com/tejHacks/speaker-diarization",
      color: "purple",
    },
  ];

  const webProjects = [
    {
      title: "CppCamp",
      description:
        "Next-gen platform for mastering C++ with hands-on practice, AI-based mentor, and a fully functional web-based code editor.",
      techStack: ["React", "TypeScript", "Framer Motion", "Local Storage"],
      image: Image10,
      liveDemo: "https://cpp-camp.vercel.app/",
      github: "https://github.com/tejHacks/cppCamp",
      icon: <ComputerIcon className="w-6 h-6" />,
    },
    {
      title: "Lumicare AI",
      description:
        "Web app for detecting jaundice in babies using custom Computer Vision model. Built for HelpMum Hackathon with 96%+ accuracy.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "MySQL",
        "TensorFlow",
        "FastAPI",
        "Flask",
      ],
      image: Image11,
      liveDemo: "https://lumicare-ai.netlify.app/",
      github: "https://github.com/tejHacks/jaundice-model-backend",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "MamaCare",
      description:
        "Comprehensive web app for pregnant mothers with pregnancy tracking, BMI calculator, jaundice checker, and more.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "MySQL",
        "TensorFlow",
        "Docker",
      ],
      image: Image12,
      liveDemo: "https://lumicare-ai.netlify.app/",
      github: "https://github.com/tejHacks/jaundice-model-backend",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: "RizzMe",
      description:
        "A sleek pickup line generator with smooth animations and creative vibes.",
      techStack: ["React", "TypeScript", "Framer Motion"],
      image: Image8,
      liveDemo: "https://rizz-generator.vercel.app/",
      github: "https://github.com/tejHacks/rizz-generator/",
      icon: <FaLaughWink className="w-6 h-6" />,
    },
    {
      title: "MarkDart",
      description:
        "Sleek web-based Markdown editor with live preview and dark mode.",
      techStack: ["React", "Next.js", "TypeScript"],
      image: Image1,
      liveDemo: "https://markdart-editor.vercel.app/",
      github: "https://github.com/tejHacks/markDartv1/",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Bible Quiz Adventure",
      description:
        "Interactive Bible quiz game to test your knowledge of God's Word.",
      techStack: ["React", "TypeScript", "Local Storage"],
      image: Image22,
      liveDemo: "https://bible-quiz-game-blombone.netlify.app/",
      github: "https://github.com/tejHacks/bible-game",
      icon: <Gamepad2Icon className="w-6 h-6" />,
    },
    {
      title: "Bible Verse Extension",
      description:
        "Chrome extension that replaces new tabs with inspiring daily Bible verses.",
      techStack: ["JavaScript", "Chrome Extension API", "HTML5", "CSS3"],
      image: Image13,
      liveDemo: null,
      github: "https://github.com/tejHacks/random-bible-verse-extension",
      icon: <Book className="w-6 h-6" />,
    },
    {
      title: "Linux Commands Keeper",
      description:
        "Compact PHP web app for organizing and referencing Linux commands.",
      techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: Image14,
      liveDemo: null,
      github: "https://github.com/tejHacks/linux-commands-keeper",
      icon: <FaLinux className="w-6 h-6" />,
    },
    {
      title: "Docker Commands Keeper",
      description:
        "PHP-based tool for managing Docker commands with search and quick access.",
      techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: Image15,
      liveDemo: null,
      github: "https://github.com/tejHacks/docker-commands-keeper",
      icon: <ComputerIcon className="w-6 h-6" />,
    },
    {
      title: "Nmap Commands Keeper",
      description:
        "PHP tool for managing Nmap commands with copy-to-clipboard and dark mode.",
      techStack: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
      image: Image21,
      liveDemo: null,
      github: "https://github.com/tejHacks/nmap-commands-keeper",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "AUO Library Management System",
      description:
        "Full-featured library system with student/lecturer registration and book tracking.",
      techStack: ["PHP", "MySQL", "Bootstrap", "jQuery", "Ajax"],
      image: Image16,
      liveDemo: null,
      github: "https://github.com/tejHacks/auo-library",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "SnipHub",
      description:
        "Minimalist code snippet manager with auth, CRUD, and hacker-themed UI.",
      techStack: ["PHP", "MySQL", "Bootstrap 5", "jQuery"],
      image: Image19,
      liveDemo: null,
      github: "https://github.com/tejHacks/snipHub",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Learn Spanish",
      description:
        "Simple Spanish learning app with text-to-speech using Web Speech API.",
      techStack: ["Vue.js 3", "Composition API", "Tailwind CSS", "Vite"],
      image: Image7,
      liveDemo: "https://spanish-words-pi.vercel.app/",
      github: "https://github.com/tejHacks/spanish-words",
      icon: <SpeakerIcon className="w-6 h-6" />,
    },
    {
      title: "Password Monkey",
      description:
        "Secure password manager with encryption, generation, and organized storage.",
      techStack: ["PHP", "MySQL", "Bootstrap", "AES Encryption"],
      image: Image6,
      liveDemo: null,
      github: "https://github.com/tejHacks/password-keeper-php",
      icon: <Lock className="w-6 h-6" />,
    },
  ];

  const mobileProjects = [
    {
      title: "Linux Commands App",
      description:
        "Offline-first React Native app for browsing and learning Linux commands with lazy loading and fast search.",
      stack: ["React Native", "TypeScript", "Expo", "NativeWind"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink:
        "https://play.google.com/store/apps/details?id=com.instagram.android",
      iosLink: "https://apps.apple.com/us/app/instagram/id389801252",
    },
    {
      title: "Kairos",
      description:
        "Prayer reminder app for Christians, built around Jewish sacred hours with offline support.",
      stack: ["React Native", "Expo", "Notifications"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: "https://play.google.com/store/apps/details?id=com.duolingo",
      iosLink: null,
    },
    {
      title: "OyoKọpa",
      description:
        "CORPERS-focused mobile app for discovering places, services, and essentials in Oyo State.",
      stack: ["React Native", "TypeScript"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: null,
      iosLink:
        "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128",
    },
    {
      title: "MamaCare (Mobile)",
      description:
        "Pregnancy companion app offering tracking, health tools, and maternal resources.",
      stack: ["React Native", "Expo", "Firebase"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: null,
      iosLink: null,
    },
    {
      title: "Òdù Ilé",
      description:
        "Educational mobile app for learning Yorùbá history and cultural heritage.",
      stack: ["React Native"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: null,
      iosLink: null,
    },
    {
      title: "Taska",
      description:
        "Minimal task management app focused on clarity, reminders, and productivity.",
      stack: ["React Native"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: null,
      iosLink: null,
    },
    {
      title: "JaundX",
      description:
        "Mobile AI app for neonatal jaundice detection using computer vision models.",
      stack: ["React Native", "Python", "TensorFlow", "OpenCV"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: null,
      iosLink: null,
    },
    {
      title: "SmoothSpeex",
      description:
        "ML-powered app for speaker separation and voice diarization.",
      stack: ["Python", "PyTorch", "Audio Processing"],
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      androidLink: null,
      iosLink: null,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-600/20 to-emerald-900/20 border-emerald-500/30",
      pink: "from-pink-600/20 to-pink-900/20 border-pink-500/30",
      purple: "from-purple-600/20 to-purple-900/20 border-purple-500/30",
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black via-slate-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of mobile apps, web development, and machine learning
            work
          </p>
        </div>

        {/* Mobile Apps Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <FaMobile className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Mobile Apps
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mobileProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 pb-20 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1 line-clamp-2">
                      {project.title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-800/80 text-slate-300 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 bg-slate-800/80 text-slate-400 rounded-md text-xs">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <DownloadButtons
                    androidLink={project.androidLink}
                    iosLink={project.iosLink}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ML Projects Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/10 rounded-xl">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Machine Learning & AI
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map((project) => (
              <div
                key={project.title}
                className={`bg-gradient-to-br ${getColorClasses(project.color)} backdrop-blur-sm rounded-2xl p-6 border hover:border-opacity-70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-${project.color}-600/20 text-${project.color}-400`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <span
                      className={`text-${project.color}-400 text-xs font-semibold uppercase tracking-wider`}
                    >
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      {project.title}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/60 text-slate-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 text-slate-500 rounded-lg cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">No Demo</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Web Development
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                      {project.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white line-clamp-1">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800/70 text-slate-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800/70 text-slate-400 rounded-md text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all transform hover:scale-105 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <a
            href="https://github.com/tejHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
