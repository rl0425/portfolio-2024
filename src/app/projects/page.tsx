import React from "react";
import { Project } from "./types";
import { projects } from "./constants";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-500">{project.date}</p>
      {project.description.map((desc, index) => (
        <div key={index}>
          <h4>{desc.title}</h4>
          <p>{desc.description.join(", ")}</p>
        </div>
      ))}
      <div className="mt-2">
        <strong>Tech Stack:</strong> {project.techStack.join(", ")}
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
