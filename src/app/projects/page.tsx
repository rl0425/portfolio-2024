"use client";

import React, { useCallback, useState } from "react";
import { projects } from "./constants";
import { useSearchParams, useRouter } from "next/navigation";
import { Icon } from "@/components/icon/Icon";
import Image from "next/image";

/**
 * 더보기 버튼 스타일 상수
 */
const MORE_BUTTON_STYLE =
  "text-[12px] font-medium text-blue-500 mt-2 cursor-pointer hover:text-blue-600";

/**
 * 설명 텍스트 최대 표시 줄 수
 */
const MAX_VISIBLE_ITEMS = 3;

const ProjectCard: React.FC<{ projectName: string | null }> = ({
  projectName,
}) => {
  const router = useRouter();
  const project = projects[projectName as string];
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handlePrevClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className="mb-10 flex flex-col gap-3">
      <div
        className="cursor-pointer px-5 pb-3 pt-5"
        onClick={handlePrevClick}
        role="button"
        aria-label="이전 페이지로 이동"
      >
        <Icon name="prev" />
      </div>
      <div>
        <h3 className="px-5 text-[16px] font-bold">{project.title}</h3>
        <p className="px-5 text-[14px] font-medium text-gray-500">
          {project.date}
        </p>
        <p className="px-5 pt-2 text-[12px] leading-5">
          {project.mainDescription}
        </p>
        <div></div>
        <div className="scrollbar-hide relative my-4 mb-1 w-full overflow-x-auto">
          <div className="flex gap-4">
            {project.image.map((img, index) => (
              <div
                key={index}
                className="border-[#rgb(34 34 34 / 17%)] relative w-[88%] flex-none border-solid first:ml-0"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src={img}
                  alt={`${project.title} Image ${index + 1}`}
                  fill
                  className="object-cover"
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
          <div key={index} className="px-5 pt-3">
            <h4 className="w-fit px-[2px] text-[12px] font-extrabold text-[#2229]">
              {desc.title}
            </h4>
            <div className="ml-3 mt-2">
              {(isExpanded
                ? desc.description
                : desc.description.slice(0, MAX_VISIBLE_ITEMS)
              ).map((item, idx) => (
                <div key={idx} className="align-center flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#2229]" />
                  <p className="text-[12px] font-normal leading-6">{item}</p>
                </div>
              ))}
              {desc.description.length > MAX_VISIBLE_ITEMS && (
                <button
                  onClick={handleToggleExpand}
                  className={MORE_BUTTON_STYLE}
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? "내용 접기" : "더 보기"}
                >
                  {isExpanded ? "접기" : "더 보기"}
                </button>
              )}
            </div>
          </div>
        ))}
        <div className="mt-6 px-5">
          <h3 className="text-[14px] font-bold text-[#222222]">Tech Stack</h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-[4px] border border-solid border-[#2222224f] bg-[#ffffff] px-[8px] py-1 text-[14px] font-bold text-[#222222]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 px-5">
          <h3 className="text-[14px] font-bold text-[#222222]">
            {project.link.title}
          </h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.link.related.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
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
