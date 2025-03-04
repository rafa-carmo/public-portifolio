'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projects as projectList } from "@/constants/projects";
import { useTranslations } from "next-intl";


const Projects = ({locale} : {locale:string}) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const project_t = useTranslations('Projects');
  
  const projects = projectList[locale]

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">{project_t("title")}</h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16">
            {project_t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-16">
            <Button onClick={loadMoreProjects} size="lg" variant="outline">
              {project_t("button")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
