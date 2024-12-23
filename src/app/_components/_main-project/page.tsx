"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

interface ProjectItem {
  id: number;
  imageUrl: string;
  title: string;
  url: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    imageUrl: "/images/live/live_1.png",
    title: "LIVE PROJECT",
    url: "live_service",
  },
  {
    id: 2,
    imageUrl: "/images/live/live_2.png",
    title: "Project 1",
    url: "live_service",
  },
  {
    id: 3,
    imageUrl: "/images/live/live_3.png",
    title: "Project 1",
    url: "live_service",
  },
  {
    id: 4,
    imageUrl: "/images/live/live_4.png",
    title: "Project 1",
    url: "live_service",
  },
  {
    id: 5,
    imageUrl: "/images/live/live_5.png",
    title: "Project 1",
    url: "live_service",
  },
  {
    id: 6,
    imageUrl: "/images/live/live_6.png",
    title: "Project 1",
    url: "live_service",
  },
];

const IMAGE_CONTAINER_STYLE =
  "relative flex items-center justify-center rounded-[4px] overflow-hidden transition-transform duration-300 hover:scale-95";

const OVERLAY_STYLE =
  "absolute inset-0 bg-[] flex items-center justify-center transition-opacity duration-300";

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
            priority={project.id <= 2} // 처음 2개 이미지는 우선 로딩
          />
          {/* 오버레이 레이어와 텍스트 */}
          <div className={OVERLAY_STYLE}>
            <p className="text-center text-xl font-bold text-[#ffffffa3]"></p>
          </div>
        </div>
      </div>
    ));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[430px] bg-white">
        <div className="h-full w-full pt-6">
          <section className="mb-2 px-5">
            <h2 className="mb-3 text-[24px] font-bold">MAIN PROJECT.</h2>
          </section>
          <div className="flex overflow-x-auto bg-white pl-5">
            <div className="grid h-[360px] min-w-[590px] grid-cols-3 gap-3">
              {renderProjects}
            </div>
            <div className="min-w-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
