"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import clsx from "clsx";

interface IntroductionSection {
  id: number;
  content: React.ReactNode;
}

const STYLES = {
  CONTAINER: "bg-white px-5",
  INNER: "mx-auto bg-white",
  MAIN: "h-full w-full pt-6",
  SECTION: "mb-4",
  HEADING: "mb-1 text-[24px] md:text-[26px] font-bold md:font-extrabold",
  CONTENT: "flex flex-col gap-1 text-[14px] md:text-[15px] font-semibold",
  BUTTON:
    "(mt-4 text-[12px] md:text-[12px] font-medium) (text-blue-500 hover:text-blue-600) (transition-colors duration-200)",
} as const;

const INITIAL_VISIBLE_SECTIONS = 2;

export default function Introduce() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsExpanded(width >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const sections: IntroductionSection[] = useMemo(
    () => [
      {
        id: 1,
        content: (
          <span className="font-semibold">
            3년 차 프론트엔드 개발자로서, 비즈니스 임팩트를 창출하는 기술 구현에
            집중합니다.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <p>
            기술적 완성도와 사용자 경험을 모두 고려한 개발을 지향합니다. 최신
            기술 트렌드를 파악하고 적절히 도입하되, 안정성과 생산성의 균형을
            맞추는 것을 중요하게 생각합니다. 특히 다양한 직군의 팀원들과
            협업하며 더 나은 서비스를 만들어내는 과정에서 큰 성취감을 느낍니다.
          </p>
        ),
      },
      {
        id: 3,
        content: (
          <>
            첫 회사에서는 100억 원 규모의 투자 유치와 140개 이상의 고객사 확보에
            직접적으로 기여했습니다. 프로젝트 관리 도구(PPM)의 핵심인 간트차트를
            포함한 전체 프로젝트 관리 시스템을 설계하고 개발하며, 기술이 실제
            비즈니스 성과로 이어지는 과정을 경험했습니다.
          </>
        ),
      },
      {
        id: 4,
        content: (
          <p>
            이후 연 매출 200억 원 규모의 에듀테크 기업에서 170만 학생이 이용하는
            온라인 강의 플랫폼의 실시간 수업 기능을 개발했습니다. Agora를
            활용하여 안정적인 실시간 화상 수업 시스템을 구축했고, 수백 명의
            강사진이 효과적으로 온라인 수업을 진행할 수 있도록 지원했습니다. 이
            기능은 현재 플랫폼의 주요 서비스 중 하나로 활발히 사용되고 있습니다.
          </p>
        ),
      },
    ],
    [],
  );

  const visibleSections = useMemo(
    () =>
      windowWidth >= 768
        ? sections
        : isExpanded
          ? sections
          : sections.slice(0, INITIAL_VISIBLE_SECTIONS),
    [sections, isExpanded, windowWidth],
  );

  return (
    <div className={STYLES.CONTAINER}>
      <div className={STYLES.INNER}>
        <main className={STYLES.MAIN}>
          <section className={STYLES.SECTION}>
            <h2 className={STYLES.HEADING} role="heading" aria-level={2}>
              INTRODUCE.
            </h2>

            <div className={STYLES.CONTENT}>
              {visibleSections.map((section) => (
                <div
                  className="text-[13px] font-normal leading-[1.9] text-[#222222ba] md:text-[15px]"
                  key={section.id}
                >
                  {section.content}
                </div>
              ))}

              {windowWidth < 768 &&
                sections.length > INITIAL_VISIBLE_SECTIONS && (
                  <div
                    onClick={handleToggleExpand}
                    className="mt-1 w-fit cursor-pointer rounded-md bg-[#222222e0] px-5 py-[4px] text-[12px] text-[#ffffff] md:text-[14px]"
                  >
                    <button
                      className={clsx(STYLES.BUTTON)}
                      role="button"
                      aria-expanded={isExpanded}
                      aria-label={isExpanded ? "접기" : "더보기"}
                    >
                      {isExpanded ? "접기" : "더보기"}
                    </button>
                  </div>
                )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
