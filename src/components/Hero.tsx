import { ArrowDown, Code, Coffee, Terminal } from 'lucide-react';

const Hero = () => {
  return (
 <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-20">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <div className="space-y-8 animate-fade-in">
    {/* Animated Icons */}
      <div className="flex justify-center space-x-6 mb-8">
   <div className="animate-bounce delay-100">
     <Code className="w-8 h-8 text-emerald-400" />
   </div>
   <div className="animate-bounce delay-200">
     <Terminal className="w-8 h-8 text-blue-400" />
   </div>
   <div className="animate-bounce delay-300">
     <Coffee className="w-8 h-8 text-amber-400" />
   </div>
    </div>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
   Welcome to{' '}
   <span className="text-emerald-400">tej</span>
   <span className="text-amber-400">{'{}'}</span>
   <span className="text-slate-300">'s</span>
   <br />
   <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
     Portfolio
   </span>
    </h1>
    
    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
   Software Engineer | Backend Specialist | Building the Future
    </p>
    
    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
   Crafting scalable systems with clean architecture, robust logic, and a passion for problem-solving.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
   <a
     href="#about"
     className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
   >
     Explore My Work
   </a>
   <a
     href="#contact"
     className="px-8 py-3 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
   >
     Let's Connect
   </a>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
   <ArrowDown className="w-6 h-6 text-slate-400" />
    </div>
  </div>
   </div>
 </section>
  );
};

export default Hero;