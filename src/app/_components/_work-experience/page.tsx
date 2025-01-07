/**
 * 작업 경험 섹션 스타일 상수
 */
const STYLES = {
  CONTAINER: "flex flex-col gap-1",
  MAIN_TITLE: "text-[14px] md:text-[14px] font-semibold text-[#222222ba]",
  SUB_TITLE: "text-[14px] font-semibold text-[#222222ba]",
  DETAIL_TITLE: "text-[12px] font-semibold text-[#22222275]",
  LIST_ITEM:
    "ml-2 mb-2 text-[12px] md:text-[14px] font-normal text-[#222222ba] leading-[1.5]",
  HIGHLIGHT: "font-semibold text-[#222222]",
} as const;

/**
 * 작업 경험 컴포넌트
 */
export default function WorkExperience() {
  return (
    <div className="bg-white px-5">
      <div className="mx-auto bg-white">
        <main className="h-full w-full pt-6">
          <section className="mb-6">
            <h2 className="mb-1 text-[24px] font-bold">WORK EXPERIENCE.</h2>

            <div className="flex flex-col gap-4 text-[12px] font-normal leading-relaxed md:text-[14px]">
              <div>
                <p className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold">
                    (주)헤븐트리
                  </span>
                  <span className="text-[12px] font-normal text-[#777676] md:text-[14px]">
                    2021년 7월 ~ 2022년 12월
                  </span>
                </p>
                <p className="text-[14px] font-medium md:text-[14px]">
                  프로젝트 관리 솔루션에서 포트폴리오까지 통합적인 관리를 할 수
                  있는 프로그램 클로바인(Clovine)을 개발하는 IT 솔루션 기업
                </p>
                <h3 className={STYLES.DETAIL_TITLE}>프론트엔드/백엔드 개발</h3>
              </div>
              <div className="h-[1px] w-full bg-[#2222223b]"></div>
              <div>
                <div className={STYLES.CONTAINER}>
                  <h4 className={STYLES.SUB_TITLE}>
                    Clovine의 통합형 프로젝트 관리 프로그램(PPM) 개발
                  </h4>
                  <ul className="mb-2 list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • DHTMLX 라이브러리 기반의 간트차트 커스터마이징 및
                      구현으로 태스크, 마일스톤, 일정 그래픽 차트 및 실시간 수정
                      기능 개발
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 생성, 작업 등록/관리, 팀원 할당, 진척도 추적 등
                      핵심 PPM 기능 개발 및 API 통신 속도 300% 향상 달성
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 개요, 평가, 생성 페이지 설계 및 구현을 통해
                      웹페이지 방문자 수(PV) 300% 증가 달성
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 엔터프라이즈 고객을 위한 트리 뷰 조직도, 워크스페이스
                      간트차트, 사업분야 리스트 등 맞춤형 기능 개발
                    </li>
                  </ul>
                  <h4 className={STYLES.SUB_TITLE}>
                    개발 프로세스 최적화 및 문서화
                  </h4>
                  <ul className="list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 데이터베이스 테이블 정의서 및 함수 기능 명세서 작성으로
                      유지보수성 향상
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 관리 및 협업을 위한 공통 컴포넌트와 UI
                      가이드라인 문서화
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • Git 브랜치 전략 수립 및 코드 리뷰 프로세스 구축으로 팀
                      협업 효율성 증대
                    </li>
                  </ul>
                  <h4 className={STYLES.SUB_TITLE}>성과 및 기여</h4>
                  <ul className="mb-2 list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 해당 프로젝트를 통해 100억 원 규모의 투자 유치 및 140개
                      이상의 고객사 확보에 기여
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • PM을 맡은 프로젝트에서 창업진흥원 소속 다수 기업의
                      접근성과 실사용률을 확보하는 실질적인 비즈니스 성과 달성
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 함수 모듈화와 재사용 가능한 컴포넌트 설계를 통해 개발
                      생산성 200% 향상 및 유지보수성 강화
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <p className="flex items-center gap-2 text-[14px]">
                  <span className="font-semibold">(주)클래스유</span>
                  <span className="text-[12px] font-normal text-[#777676] md:text-[14px]">
                    2023년 8월 ~ 2024년 11월
                  </span>
                </p>
                <p className="text-[14px] font-medium md:text-[14px]">
                  강의별 커뮤니티 서비스가 있는 커뮤니티형 온라인 강의 플랫폼을
                  개발 및 지원하는 IT 솔루션 기업
                </p>
                <h3 className={STYLES.DETAIL_TITLE}>프론트엔드 개발</h3>
              </div>
              <div className="h-[1px] w-full bg-[#2222223b]"></div>
              <div className={STYLES.CONTAINER}>
                <h4 className={STYLES.SUB_TITLE}>
                  실시간 강의 및 화상 통화 서비스 개발
                </h4>
                <ul className="mb-2 list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • Agora Video SDK와 SD-RTN을 활용하여 실시간 강의 및 화상
                    통화 서비스의 핵심 기능 구현
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 수 십 명의 학생과 강사가 동시 접속하는 대규모 실시간 강의
                    시스템 구축
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 사용자 인원별 페이지네이션 및 지연 로딩 구현으로 렌더링
                    성능 최적화 달성
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 화면 공유, 강의 영상 재생, 실시간 채팅, 소그룹 라이브 등
                    다양한 인터랙티브 기능 개발
                  </li>
                </ul>

                <h4 className={STYLES.SUB_TITLE}>개발 프로세스 개선</h4>
                <ul className="mb-2 list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 재사용 가능한 UI 컴포넌트 라이브러리 구축으로 개발 생산성
                    200% 향상
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • TypeScript 도입 및 코드 컨벤션 정립으로 코드 품질 및
                    유지보수성 강화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 성능 모니터링 시스템 구축으로 실시간 서비스 안정성 확보
                  </li>
                </ul>

                <h4 className={STYLES.SUB_TITLE}>플랫폼 유지 및 개선</h4>
                <ul className="mb-2 list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 레거시 코드 리팩토링을 통한 애플리케이션 성능 30% 개선
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • TypeScript 도입 및 코드 컨벤션 정립으로 코드 품질 및
                    유지보수성 강화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 반응형 UI/UX 개선으로 다양한 디바이스에서의 사용자 경험
                    향상
                  </li>
                </ul>

                <h4 className={STYLES.SUB_TITLE}>성과 및 기여</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 실시간 강의 시스템 구축으로 월간 활성 사용자(MAU) 50% 증가
                    달성
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 화상 통화 기능 도입으로 사용자 체류 시간 평균 45% 향상
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 소그룹 라이브 기능 개발로 학습자 참여도 20% 증가
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 모바일 최적화를 통한 크로스 플랫폼 지원으로 모바일 사용자
                    비율 40% 확대
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
