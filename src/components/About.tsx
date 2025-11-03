import { Heart, Target, Download, Database, Server, Code2 } from 'lucide-react';
import ResumePDF from '../assets/OLATEJU RESUME LATEST.pdf';
import ProfileImage from '../assets/teju.jpeg';

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
                <h3 className="text-2xl font-bold text-emerald-400">Full-Stack & Mobile Engineer</h3>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-emerald-400">Hey, I'm Olateju Olamide Emmanuel.</strong> I'm a Computer Science graduate and Software Engineer specializing in full-stack and mobile development. I craft scalable systems with clean architecture, responsive UIs, and robust logic to tackle real-world challenges, from web backends to cross-platform apps.
                </p>

                <p>
                  My expertise spans full-stack development—building APIs, databases, and frontends—alongside mobile innovation with <strong className="text-amber-400">React Native</strong>. My core stack includes <strong className="text-amber-400">React, Node.js, PHP, Laravel, MySQL, and Python</strong>, with <strong className="text-blue-400">React Native</strong> powering seamless mobile experiences. I also thrive in <strong className="text-green-400">Linux environments</strong>, optimizing deployments and debugging on Ubuntu.
                </p>
                <p>
                  I think in systems, not just code. Performance, reliability, and user-friendly mobile interfaces drive me. I love tools like <strong className="text-purple-400">Docker</strong> for containerized apps and <strong className="text-orange-400">Git</strong> for version control, ensuring smart, scalable development workflows.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Passion & Drive</h3>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Beyond coding, I’m a self-driven learner. My passion fuels exploration into <strong className="text-emerald-400">system design, mobile optimization, dev tooling, and open-source contributions</strong>. With <strong className="text-blue-400">React Native</strong>, I’ve built apps like DevMind and Shelfly (check tejuthedev.vercel.app), blending full-stack logic with mobile finesse.
                </p>

                <p>
                  I thrive on breaking and fixing—learning fastest when things get tough. I’m seeking <strong className="text-emerald-400">full-stack and mobile-focused software engineering roles</strong> where I can innovate, grow with a stellar team, and create impactful solutions, from web backends to mobile-first experiences.
                </p>
              </div>
            </div>

            {/* Resume Download */}
            <div className="text-center">
              <a
                href={ResumePDF}
                download="Olateju_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <Download className="w-5 h-5 mr-3" />
                Download My Resume
              </a>
              <p className="text-slate-400 text-sm mt-4">
                Featuring my React Native Linux Commands app, a 96% accurate AI model, and 20+ full-stack/mobile projects.
              </p>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                  <div className="aspect-square bg-slate-700 rounded-2xl flex items-center justify-center">
                    <img
                      src={ProfileImage}
                      alt="Olateju Olamide Emmanuel"
                      className="w-[300px] h-[300px] object-cover rounded"
                      onError={(e) => (e.currentTarget.src = '/assets/fallback.jpg')}
                    />
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
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-slate-300 text-sm">Years Coding</div>
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