"use client";

import React from "react";
import { projects } from "./constants";
import { useSearchParams } from "next/navigation";
import { Icon } from "@/components/icon/Icon";
import Image from "next/image";

const ProjectCard: React.FC<{ projectName: string | null }> = ({
  projectName,
}) => {
  const project = projects[projectName as string];
  console.log(project.image[0]);
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="px-4 pb-3 pt-5">
        <Icon name="prev" />
      </div>
      <div>
        <h3 className="px-4 text-[16px] font-bold">{project.title}</h3>
        <p className="px-4 text-[14px] font-medium text-gray-500">
          {project.date}
        </p>
        <p className="px-4 pt-2 text-[14px] font-medium">
          {project.mainDescription}
        </p>
        <div className="scrollbar-hide relative my-4 mb-1 h-[155px] w-full overflow-x-auto">
          <div className="flex gap-4">
            {project.image.map((img, index) => (
              <div
                key={index}
                className="border-[#rgb(34 34 34 / 17%)] relative h-[155px] w-[80%] flex-none border border-solid first:ml-0"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={img}
                  alt={`${project.title} Image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                  sizes="80vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <h3 className="px-5 text-[20px] font-bold text-[#222222]">
          Description
        </h3> */}

        {project.description.map((desc, index) => (
          <div key={index} className="px-4 pt-3">
            <h4 className="text-[14px] font-semibold text-[#222222]">
              {desc.title}
            </h4>
            <div className="ml-3 mt-2">
              {desc.description.map((item, idx) => (
                <div key={idx} className="align-center flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#2229]" />
                  <p className="text-[14px] leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-6 px-4">
          <h3 className="text-[14px] font-bold text-[#222222]">Tech Stack</h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-[4px] bg-[#434040] px-[8px] py-1 text-[14px] font-bold text-[#EEEFF0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 px-4">
          <h3 className="text-[14px] font-bold text-[#222222]">
            {project.link.detail}
          </h3>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("projectName");

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ProjectCard projectName={projectName} />
      </div>
    </div>
  );
};

export default ProjectsPage;
