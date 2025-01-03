"use client";

import { useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectItem {
  id: number;
  imageUrl: string;
  title: string;
  url: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    imageUrl: "/images/deats/deat_thumbnail.png",
    title: "DEATS",
    url: "deats",
  },
  {
    id: 2,
    imageUrl: "/images/qdrop/qdrop_1.png",
    title: "Qdrop",
    url: "qdrop",
  },
  {
    id: 3,
    imageUrl: "/images/fotscore/fotscore_3.png",
    title: "FOTSCORE",
    url: "fotscore",
  },
  {
    id: 4,
    imageUrl: "/images/pawwise/pawwise_thumbnail.png",
    title: "PawWise",
    url: "pawwise",
  },
  {
    id: 5,
    imageUrl: "/images/evaluation/image.png",
    title: "PROJECT",
    url: "project_evaluation",
  },
  {
    id: 6,
    imageUrl: "/images/live/live_6.png",
    title: "PROJECT",
    url: "live_service",
  },
];

const IMAGE_CONTAINER_STYLE =
  "relative flex items-center justify-center rounded-[4px] overflow-hidden transition-transform duration-300 hover:scale-95";

const OVERLAY_STYLE =
  "absolute inset-0 bg-[#0000009e] flex items-center justify-center transition-opacity duration-300";

export default function MainProject() {
  const router = useRouter();

  const handlePrevClick = useCallback(
    (projectUrl: string) => {
      router.push(`/projects?projectName=${projectUrl}`);
    },
    [router],
  );
  const renderProjects = useMemo(() => {
    return PROJECTS.map((project) => (
      <div
        key={project.id}
        className={IMAGE_CONTAINER_STYLE}
        role="button"
        aria-label={`${project.title} 프로젝트 보기`}
        onClick={() => handlePrevClick(project.url)}
      >
        <div className="relative h-[360px] w-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.id <= 2}
          />
          <div className={OVERLAY_STYLE}>
            <p className="text-center text-xl font-bold text-[#ffffffa3]">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    ));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[430px] bg-white">
        <div className="h-full w-full pt-6">
          <section className="px-5">
            <h2 className="mb-3 text-[24px] font-bold">SIDE PROJECT.</h2>
          </section>
          <div className="flex overflow-x-auto bg-white pl-5 pr-5">
            <div className="grid h-[360px] min-w-full gap-3">
              {renderProjects}
            </div>
            <div className="min-w-[16px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
