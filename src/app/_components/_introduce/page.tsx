"use client";

import { useState, useCallback, useMemo } from "react";
import clsx from "clsx";

interface IntroductionSection {
  id: number;
  content: React.ReactNode;
}

const STYLES = {
  CONTAINER: "bg-white px-5",
  INNER: "mx-auto max-w-[430px] bg-white",
  MAIN: "h-full w-full pt-10",
  SECTION: "mb-4",
  HEADING: "mb-2 text-[24px] font-bold",
  CONTENT: "flex flex-col gap-1 text-[12px] font-normal leading-relaxed",
  BUTTON:
    "(mt-4 text-[12px] font-medium) (text-blue-500 hover:text-blue-600) (transition-colors duration-200)",
} as const;

const INITIAL_VISIBLE_SECTIONS = 2;

export default function Introduce() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const sections: IntroductionSection[] = useMemo(
    () => [
      {
        id: 1,
        content: (
          <span className="font-semibold">
            2년 반 차 프론트엔드 개발자로서, 기술적 발전과 비즈니스 성과를
            동시에 창출하는 것을 목표로 합니다.
          </span>
        ),
      },
      {
        id: 2,
        content: (
          <>
            첫 직장에서는 프로젝트 관리 도구(PPM)의 핵심 기능인
            <span className="font-semibold"> 간트차트 (Gantt Chart) </span>
            페이지를 설계 및 구현하여,{" "}
            <span className="font-semibold">
              100억 원 규모의 투자 유치와 140개 이상의 고객사 확보에 기여
            </span>
            했습니다. 이를 통해 기술 개발이 비즈니스 성과로 이어질 수 있음을
            체감하며, 실질적 가치를 창출하는 개발자의 중요성을 배웠습니다.
          </>
        ),
      },
      {
        id: 3,
        content: (
          <p>
            이후, 두 번째 회사에서는 누적 학생 수 170만 명, 연 매출 200억 원
            규모의 온라인 교육 플랫폼에서{" "}
            <span className="font-semibold">
              실시간 화상 통화 서비스를 주도적으로 개발
            </span>
            했습니다. 특정 라이브러리(Agora)를 효과적으로 활용해{" "}
            <span className="font-semibold">
              수백 개 강의와 강사를 지원하는 플랫폼의 대표 기능
            </span>
            으로 자리 잡았으며, 이를 통해 플랫폼 사용자 경험과 비즈니스 경쟁력을
            크게 향상시켰습니다.
          </p>
        ),
      },
      {
        id: 4,
        content: (
          <p>
            코드 품질 개선과 개발 프로세스 최적화를 중요하게 여기며,{" "}
            <span className="font-semibold">
              사용자 중심의 생산적인 서비스 개발
            </span>
            을 추구합니다.
            <br /> 또한, 기존 기술 스택과 요구사항을 충실히 준수하면서도 최신
            기술 트렌드에 뒤처지지 않는 개발 철학을 가지고 있습니다. <br />팀
            단위 협업의 중요성을 깊이 생각하며, 다양한 직무의 팀원들과
            적극적으로 소통하고 협력하여 높은 완성도의 결과물을 만들어내는 것을
            목표로 삼고 있습니다.
          </p>
        ),
      },
    ],
    [],
  );

  const visibleSections = useMemo(
    () => (isExpanded ? sections : sections.slice(0, INITIAL_VISIBLE_SECTIONS)),
    [sections, isExpanded],
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
                  className="text-[12px] font-normal leading-[2.0] leading-relaxed text-[#222222ba]"
                  key={section.id}
                >
                  {section.content}
                </div>
              ))}

              {sections.length > INITIAL_VISIBLE_SECTIONS && (
                <div className="mt-1 w-fit rounded-md bg-[#222222e0] px-5 py-[4px] text-[12px] text-[#ffffff]">
                  <button
                    onClick={handleToggleExpand}
                    className={clsx(STYLES.BUTTON)}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "LESS" : "MORE"}
                  >
                    {isExpanded ? "LESS" : "MORE"}
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
