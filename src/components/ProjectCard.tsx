// components/ProjectCard.tsx
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  icon: React.ReactNode;
  category?: string;
  liveDemo?: string | null;
  github: string;
  color?: string;
}

const ProjectCard = ({ title, description, techStack, image, icon, category, liveDemo, github, color }: ProjectProps) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex flex-col">
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = '/assets/fallback.jpg')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-3 mb-3">
          <div className={`p-2 bg-blue-600/20 rounded-lg text-blue-400`}>{icon}</div>
          <h4 className="text-lg sm:text-xl font-bold text-white">{title}</h4>
        </div>

        {category && <span className={`text-${color}-400 text-sm mb-1`}>{category}</span>}

        <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          {liveDemo ? (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white rounded-lg opacity-50 cursor-not-allowed text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>No Demo</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
