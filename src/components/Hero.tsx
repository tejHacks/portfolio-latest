import { ArrowDown, Code, Terminal, Zap, Rocket } from "lucide-react";
import { FaLinux } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black pt-20 pb-20 relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Enhanced Animated Icons with more movement */}
          <div className="flex justify-center space-x-8 mb-12">
            <div
              className="animate-bounce hover:scale-125 transition-transform duration-300"
              style={{ animationDelay: "0s" }}
            >
              <div className="p-3 bg-emerald-600/20 rounded-lg hover:bg-emerald-600/40 transition-all">
                <Code className="w-8 h-8 text-emerald-400 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="animate-bounce hover:scale-125 transition-transform duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-3 bg-blue-600/20 rounded-lg hover:bg-blue-600/40 transition-all">
                <Terminal className="w-8 h-8 text-blue-400 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="animate-bounce hover:scale-125 transition-transform duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="p-3 bg-amber-600/20 rounded-lg hover:bg-amber-600/40 transition-all">
                <Rocket className="w-8 h-8 text-amber-400 drop-shadow-lg" />
              </div>
            </div>
            <div
              className="animate-bounce hover:scale-125 transition-transform duration-300"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/40 transition-all">
                <FaLinux className="w-8 h-8 text-purple-400 drop-shadow-lg" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-pulse">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              tej
            </span>
            <span className="text-amber-400 drop-shadow-lg">{"{}"}</span>
            <span className="text-slate-300">'s</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-emerald-300 font-semibold mb-4 animate-bounce">
            <Zap className="w-6 h-6" />
            <span>Building the Future</span>
            <Zap className="w-6 h-6" />
          </div>

          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
            Full-Stack & Mobile Engineer | AI Enthusiast | Building Scalable
            Solutions
          </p>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed bg-gradient-to-r from-slate-700/30 to-slate-900/30 p-6 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
            Crafting robust systems with clean architecture, seamless mobile
            experiences, and cutting-edge tech. From backend APIs to full-stack
            applications that solve real problems.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a
              href="#about"
              className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50 flex items-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 border-2 border-blue-400/50 hover:border-blue-300 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 group"
            >
              <span className="group-hover:text-emerald-300 transition-colors">
                Let's Connect
              </span>
            </a>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-emerald-400/60 hover:text-emerald-400 transition-colors cursor-pointer">
            <ArrowDown className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
