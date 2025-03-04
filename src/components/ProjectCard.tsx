
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white/70 backdrop-blur-md border border-white/20 shadow-sm transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden">
        <Image
          layout="responsive"
          width={300}
          height={200}
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-3">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-1">
                Ver projeto <ArrowUpRight size={16} />
              </Button>
            </a>
          )}
          {githubLink && (
             <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="gap-1">
                <Github size={16} /> Código
              </Button>
              </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
