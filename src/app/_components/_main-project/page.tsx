"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";

interface ProjectItem {
  id: number;
  imageUrl: string;
  title: string;
  url: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    imageUrl: "/images/live/live_2.png",
    title: "LIVE",
    url: "live_service",
  },
  {
    id: 2,
    imageUrl: "/images/gantt/gantt9.png",
    title: "Gantt",
    url: "gantt_chart",
  },
  {
    id: 3,
    imageUrl: "/images/enterprise/enterprise_1.png",
    title: "Enterprise",
    url: "enterprise_model",
  },
  {
    id: 4,
    imageUrl: "/images/summary/summary_4.png",
    title: "Summary",
    url: "project_summary",
  },
  {
    id: 5,
    imageUrl: "/images/evaluation/image.png",
    title: "Evaluation",
    url: "project_evaluation",
  },
];

// 애니메이션 및 스타일 정의
const SHIMMER_STYLES = `
  @keyframes shimmer {
    0% { background-position: -200% center; opacity: 0.9; }
    50% { background-position: 0% center; opacity: 1; }
    100% { background-position: 200% center; opacity: 0.9; }
  }

  .title-shimmer {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 1) 55%, rgba(255, 255, 255, 0.5) 100%);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(255, 255, 255, 0.95);
    position: relative;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2);
    font-weight: 700;
  }

  .title-shimmer[data-animate='true'] {
    animation: shimmer 2.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ANIMATION_STYLES = {
  image1: `
    @keyframes float1 {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(15px, 20px) rotate(3deg); }
      50% { transform: translate(-10px, 15px) rotate(-3deg); }
      75% { transform: translate(-18px, -10px) rotate(2deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
  `,
  image2: `
    @keyframes float2 {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(-12px, 18px) rotate(-4deg); }
      50% { transform: translate(20px, -15px) rotate(3deg); }
      75% { transform: translate(8px, -20px) rotate(-2deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
  `,
} as const;

const IMAGE_CONTAINER_STYLE =
  "relative flex items-center justify-center rounded-[4px] overflow-hidden transition-transform duration-300 hover:scale-95";
const OVERLAY_STYLE =
  "absolute inset-0 bg-[#0000009e] flex items-center justify-center transition-opacity duration-300";

const GRID_LAYOUT_STYLES = {
  container: "grid grid-cols-2 gap-3 h-[600px] min-w-full",
  leftSection: "relative h-full",
  rightSection: "grid grid-rows-2 gap-3",
  rightTop: "grid grid-cols-2 gap-3",
  rightBottom: "relative h-full",
} as const;

const STYLES = {
  mobileView: "md:hidden flex flex-col gap-3 max-h-[340px]",
  pcView: "hidden md:block",
  mobileItem: "relative w-full px-5",
} as const;

export default function MainProject() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const shimmerTimeouts = useRef<{ [key: number]: NodeJS.Timeout }>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const style = document.createElement("style");
    style.textContent =
      Object.values(ANIMATION_STYLES).join("\n") + SHIMMER_STYLES;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isClient]);

  const startRandomShimmer = useCallback(
    (projectId: number) => {
      if (!isClient) return;

      const element = document.getElementById(`title-${projectId}`);
      if (!element) return;

      const animate = () => {
        element.setAttribute("data-animate", "true");

        setTimeout(() => {
          element.setAttribute("data-animate", "false");
          const nextDelay = 8000 + Math.random() * 10000;
          shimmerTimeouts.current[projectId] = setTimeout(animate, nextDelay);
        }, 2000);
      };

      const initialDelay = Math.random() * 10000;
      shimmerTimeouts.current[projectId] = setTimeout(animate, initialDelay);
    },
    [isClient],
  );

  useEffect(() => {
    if (!isClient) return;

    PROJECTS.forEach((project) => {
      startRandomShimmer(project.id);
    });

    return () => {
      Object.values(shimmerTimeouts.current).forEach((timeout) =>
        clearTimeout(timeout),
      );
    };
  }, [isClient, startRandomShimmer]);

  const renderProjects = useMemo(
    () => (
      <>
        <div className={STYLES.mobileView}>
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`${IMAGE_CONTAINER_STYLE} ${STYLES.mobileItem}`}
              role="button"
              aria-label={`${project.title} 프로젝트 보기`}
              onClick={() =>
                router.push(`/projects?projectName=${project.url}`)
              }
            >
              <div className="relative h-[360px] w-full">
                {isClient && (
                  <div
                    className="absolute inset-0"
                    style={{
                      animation: `float${(index % 2) + 1} ${
                        6 + index * 1.5
                      }s ease-in-out infinite`,
                    }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={project.id <= 2}
                    />
                  </div>
                )}
                <div className={OVERLAY_STYLE}>
                  <p
                    id={`title-${project.id}`}
                    className="title-shimmer text-center text-xl font-bold"
                    data-animate="false"
                  >
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={STYLES.pcView}>
          <div className={GRID_LAYOUT_STYLES.container}>
            <div className={GRID_LAYOUT_STYLES.leftSection}>
              <div
                className={`${IMAGE_CONTAINER_STYLE} h-full`}
                role="button"
                aria-label={`${PROJECTS[0].title} 프로젝트 보기`}
                onClick={() =>
                  router.push(`/projects?projectName=${PROJECTS[0].url}`)
                }
              >
                <div className="relative h-full w-full">
                  {isClient && (
                    <div
                      className="absolute inset-0"
                      style={{
                        animation: `float1 ${6}s ease-in-out infinite`,
                      }}
                    >
                      <Image
                        src={PROJECTS[0].imageUrl}
                        alt={PROJECTS[0].title}
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority
                      />
                    </div>
                  )}
                  <div className={OVERLAY_STYLE}>
                    <p
                      id={`title-${PROJECTS[0].id}`}
                      className="title-shimmer text-center text-xl font-bold"
                      data-animate="false"
                    >
                      {PROJECTS[0].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={GRID_LAYOUT_STYLES.rightSection}>
              <div className={GRID_LAYOUT_STYLES.rightTop}>
                {PROJECTS.slice(1, 3).map((project, index) => (
                  <div
                    key={project.id}
                    className={IMAGE_CONTAINER_STYLE}
                    role="button"
                    aria-label={`${project.title} 프로젝트 보기`}
                    onClick={() =>
                      router.push(`/projects?projectName=${project.url}`)
                    }
                  >
                    <div className="relative h-full w-full">
                      {isClient && (
                        <div
                          className="absolute inset-0"
                          style={{
                            animation: `float${(index % 2) + 1} ${
                              6 + (index + 1) * 1.5
                            }s ease-in-out infinite`,
                          }}
                        >
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="25vw"
                            priority
                          />
                        </div>
                      )}
                      <div className={OVERLAY_STYLE}>
                        <p
                          id={`title-${project.id}`}
                          className="title-shimmer text-center text-xl font-bold"
                          data-animate="false"
                        >
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={GRID_LAYOUT_STYLES.rightBottom}>
                <div
                  className={`${IMAGE_CONTAINER_STYLE} h-full`}
                  role="button"
                  aria-label={`${PROJECTS[3].title} 프로젝트 보기`}
                  onClick={() =>
                    router.push(`/projects?projectName=${PROJECTS[3].url}`)
                  }
                >
                  <div className="relative h-full w-full">
                    {isClient && (
                      <div
                        className="absolute inset-0"
                        style={{
                          animation: `float1 ${7.5}s ease-in-out infinite`,
                        }}
                      >
                        <Image
                          src={PROJECTS[3].imageUrl}
                          alt={PROJECTS[3].title}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    )}
                    <div className={OVERLAY_STYLE}>
                      <p
                        id={`title-${PROJECTS[3].id}`}
                        className="title-shimmer text-center text-xl font-bold"
                        data-animate="false"
                      >
                        {PROJECTS[3].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    [isClient, router],
  );

  if (!isClient) {
    return (
      <div className="bg-white">
        <div className="mx-auto bg-white">
          <div className="h-full w-full pt-6">
            <section className="mb-2 px-5">
              <h2 className="mb-3 text-[24px] font-bold">MAIN PROJECT.</h2>
            </section>
            <div className="flex overflow-x-auto bg-white pl-5 pr-5">
              {/* 로딩 상태 UI */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto bg-white">
        <div className="h-full w-full pt-6">
          <section className="mb-2 px-5">
            <h2 className="mb-3 text-[24px] font-bold">MAIN PROJECT.</h2>
          </section>
          <div className="bg-white">{renderProjects}</div>
        </div>
      </div>
    </div>
  );
}
