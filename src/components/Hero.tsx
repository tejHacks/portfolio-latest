import React from "react";
import { ArrowRight, Code2, Smartphone, Zap } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-8 animate-[fadeInDown_0.6s_ease-out]">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-300">
            Available for Full-Stack & Mobile Roles
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-[fadeInUp_0.8s_ease-out]">
          <span className="block text-white mb-2">Olateju Olamide</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Full-Stack & Mobile Engineer
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-[fadeInUp_1s_ease-out]">
          Building production apps with{" "}
          <span className="text-emerald-400 font-semibold">React Native</span>,{" "}
          <span className="text-blue-400 font-semibold">Laravel</span>, and{" "}
          <span className="text-purple-400 font-semibold">Python</span>.
          <br className="hidden md:block" />
          From backend APIs to mobile apps that actually ship.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-[fadeInUp_1.2s_ease-out]">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-300">
              <span className="text-white font-bold">25+</span> Projects Shipped
            </span>
          </div>
          <div className="h-6 w-px bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300">
              <span className="text-white font-bold">7+</span> React Native Apps
            </span>
          </div>
          <div className="h-6 w-px bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-slate-300">
              <span className="text-white font-bold">96%</span> ML Accuracy
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1.4s_ease-out]">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border border-slate-700 transition-all duration-300 hover:bg-slate-800 hover:border-slate-600 hover:scale-105"
          >
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
