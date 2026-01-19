import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  keyPrompt: string;
  description: string;
  learnMoreUrl: string;
  tooltip?: string;
}

const ProjectCard = ({
  title,
  image,
  keyPrompt,
  description,
  learnMoreUrl,
  tooltip,
}: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate(learnMoreUrl);
  };

  return (
    <article 
      onDoubleClick={handleDoubleClick}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
    >
      {/* Tooltip badge */}
      {tooltip && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
          {tooltip}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Key Prompt */}
        <p className="text-primary font-medium text-sm mb-3">{keyPrompt}</p>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More Link */}
        <a
          href={learnMoreUrl}
          className="inline-flex items-center text-primary font-medium text-sm hover:underline underline-offset-4 transition-colors"
        >
          Learn More
          <svg
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;