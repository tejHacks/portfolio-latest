import React from 'react';
import { User, Heart, Target, Download, Database, Server, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-emerald-600/20 rounded-lg">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Thinking in Systems</h3>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-emerald-400">Hey, I'm Olateju Olamide Emmanuel.</strong> I'm a backend-focused Computer Science student with a passion for clean architecture, strong logic, and building scalable systems that solve real-world problems.
                </p>
                
                <p>
                  Rooted in strong engineering principles, I specialize in backend development — from designing APIs and structuring databases to writing clean, maintainable code that scales. My toolbox includes <strong className="text-amber-400">PHP, Laravel, MySQL, and Python</strong>, but I'm just as comfortable diving into <strong className="text-blue-400">Vue.js, React, Node.js</strong>, and <strong className="text-green-400">Linux-based environments</strong>.
                </p>
                
                <p>
                  I think in systems, not just syntax. I'm driven by performance, reliability, and doing things the right way — even when it's harder. Whether I'm deploying with <strong className="text-purple-400">Docker</strong>, versioning with <strong className="text-orange-400">Git</strong>, or automating workflows with custom scripts, I get excited about the tools that make development smoother and smarter.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Heart className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Passion & Purpose</h3>
              </div>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Beyond the codebase, I'm a dedicated self-learner with a tinkerer's spirit — constantly exploring <strong className="text-emerald-400">system design, dev tooling, security concepts, and open-source contributions</strong>. I also have a deep curiosity for everything from <em className="text-slate-400">Linux internals and history</em> to <em className="text-slate-400">philosophy, anime, and the occasional CLI rabbit hole</em>.
                </p>
                
                <p>
                  I learn by building — and when things break, I learn even faster. I'm currently looking for <strong className="text-emerald-400">backend-focused opportunities or internships</strong> where I can contribute meaningfully, grow alongside a great team, and continue creating software that actually matters.
                </p>
              </div>
            </div>

            {/* Resume Download */}
            <div className="text-center">
              <a
                href="https://example.com/resume.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <Download className="w-5 h-5 mr-3" />
                Download My Resume
              </a>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                  <div className="aspect-square bg-slate-700 rounded-2xl flex items-center justify-center">
                    <User className="w-32 h-32 text-slate-500" />
                  </div>
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 p-3 bg-emerald-600 rounded-xl animate-pulse">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-3 bg-blue-600 rounded-xl animate-pulse delay-100">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-8 p-3 bg-purple-600 rounded-xl animate-pulse delay-200">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">25+</div>
                <div className="text-slate-300 text-sm">Projects Built</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-300 text-sm">Technologies</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-slate-300 text-sm">Years Learning</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">∞</div>
                <div className="text-slate-300 text-sm">Curiosity Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;