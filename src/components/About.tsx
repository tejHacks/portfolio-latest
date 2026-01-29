import {
  Heart,
  Target,
  Download,
  Database,
  Server,
  Code2,
  Rocket,
} from "lucide-react";
import ResumePDF from "../assets/OLATEJU RESUME LATEST.pdf";
import ProfileImage from "../assets/teju.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Role Summary */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-emerald-600/20 rounded-lg">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">
                  Full-Stack & Mobile Engineer
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-emerald-400">
                    I’m Olateju Olamide Emmanuel
                  </strong>
                  , a Computer Science graduate and Software Engineer focused on
                  building scalable full-stack systems and production-ready
                  mobile applications.
                </p>

                <p>
                  I work across{" "}
                  <strong className="text-amber-400">
                    React, PHP, Laravel, MySQL, and Python
                  </strong>
                  , with <strong className="text-blue-400">React Native</strong>{" "}
                  powering cross-platform mobile apps. I’m most effective in{" "}
                  <strong className="text-green-400">Linux environments</strong>
                  , where I deploy, debug, and optimize systems with confidence.
                </p>

                <p>
                  I approach problems as systems—not just features—prioritizing{" "}
                  <strong>
                    performance, reliability, and clean architecture
                  </strong>
                  . Tools like{" "}
                  <strong className="text-purple-400">Docker</strong> and{" "}
                  <strong className="text-orange-400">Git</strong> are core to
                  how I ship and scale software.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-amber-600/20 rounded-lg">
                  <Rocket className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400">
                  Highlights
                </h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-4 text-slate-300">
                <li> 25+ production-grade projects built</li>
                <li> React Native apps shipped & maintained</li>
                <li>ML models with ~96% accuracy</li>
                <li>Linux-first development workflow</li>
              </ul>
            </div>

            {/* Passion */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">
                  Passion & Drive
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I’m a self-driven learner who grows fastest under pressure. I
                  enjoy breaking systems, fixing them properly, and documenting
                  what I learn along the way.
                </p>

                <p>
                  I’m actively seeking{" "}
                  <strong className="text-emerald-400">
                    full-stack and mobile-focused software engineering roles
                  </strong>{" "}
                  where I can contribute, grow with strong engineers, and build
                  systems that matter.
                </p>
              </div>
            </div>

            {/* Resume */}
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
                Selected projects, mobile apps, and applied machine learning
                work.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Profile */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700/50">
                  <img
                    src={ProfileImage}
                    alt="Olateju Olamide Emmanuel"
                    className="w-[300px] h-[300px] object-cover rounded mx-auto"
                  />

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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Stat value="25+" label="Projects Built" color="emerald" />
              <Stat value="15+" label="Technologies" color="blue" />
              <Stat
                value="5+"
                label="Years Building & Learning"
                color="purple"
              />
              <Stat value="∞" label="Curiosity Level" color="amber" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) => (
  <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center">
    <div className={`text-3xl font-bold text-${color}-400 mb-2`}>{value}</div>
    <div className="text-slate-300 text-sm">{label}</div>
  </div>
);

export default About;
