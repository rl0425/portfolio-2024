/**
 * 작업 경험 섹션 스타일 상수
 */
const STYLES = {
  CONTAINER: "flex flex-col gap-2",
  MAIN_TITLE: "text-[12px] md:text-[14px] font-semibold text-[#222222ba]",
  SUB_TITLE: "ml-4 text-[13px] font-semibold text-[#222222ba]",
  LIST_ITEM:
    "ml-8 text-[12px] md:text-[14px] font-normal text-[#222222ba] leading-[1.5]",
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
            <h2 className="mb-4 text-[24px] font-bold">WORK EXPERIENCE.</h2>

            <div className="flex flex-col gap-4 text-[12px] font-normal leading-relaxed md:text-[14px]">
              <div>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">(주)헤븐트리</span>
                  <span className="text-[12px] font-normal text-[#777676] md:text-[14px]">
                    2021년 7월 ~ 2022년 12월
                  </span>
                </p>
                <p className="font-medium">
                  프로젝트 관리 솔루션에서 포트폴리오까지 통합적인 관리를 할 수
                  있는 프로그램 클로바인(Clovine)을 개발하는 IT 솔루션 기업
                </p>
              </div>

              <div>
                <div className={STYLES.CONTAINER}>
                  <h3 className={STYLES.MAIN_TITLE}>
                    프론트엔드/백엔드 개발 담당
                  </h3>
                  <h4 className={STYLES.SUB_TITLE}>
                    Clovine의 통합형 프로젝트 관리 프로그램(PPM) 개발
                  </h4>
                  <ul className="list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 간트차트 기능 및 페이지 구현
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 생성, 작업 등록/관리, 팀원 할당, 진척도 추적 등
                      핵심 PPM 기능 개발
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 개요, 평가, 생성 기능 및 전용 페이지 설계 및
                      구현
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 엔터프라이즈 고객을 위한 맞춤형 기능 및 페이지 개발
                    </li>
                  </ul>
                  <h4 className={STYLES.SUB_TITLE}>성과 및 기여</h4>
                  <ul className="list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 해당 프로젝트를 통해 100억 원 규모의 투자 유치 및 140개
                      이상의 고객사 확보에 기여
                    </li>
                  </ul>
                  <h4 className={STYLES.SUB_TITLE}>
                    개발 프로세스 최적화 및 문서화
                  </h4>
                  <ul className="list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 데이터베이스 테이블 정의서 작성
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 관리 및 협업을 위한 공통 컴포넌트와 UI
                      가이드라인 문서화
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 개발 프로세스 개선을 위한 체계적인 문서 작업 수행
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">(주)클래스유</span>
                  <span className="text-[12px] font-normal text-[#777676] md:text-[14px]">
                    2023년 8월 ~ 2024년 11월
                  </span>
                </p>
                <p className="font-medium">
                  강의별 커뮤니티 서비스가 있는 커뮤니티형 온라인 강의 플랫폼을
                  개발 및 지원하는 IT 솔루션 기업
                </p>
              </div>

              <div className={STYLES.CONTAINER}>
                <h3 className={STYLES.MAIN_TITLE}>프론트엔드 개발 담당</h3>
                {/* 플랫폼 유지 및 개선 */}
                <h4 className={STYLES.SUB_TITLE}>플랫폼 유지 및 개선</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 커뮤니티형 온라인 강의 플랫폼의 레거시 코드 유지 및 보수
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 모바일 및 반응형 UI, Android/iOS 웹뷰 환경 지원 기능 구현
                  </li>
                </ul>
                {/* 핵심 서비스 개발 */}
                <h4 className={STYLES.SUB_TITLE}>핵심 서비스 개발</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 화상 통화(라이브) 서비스 구축
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • Agora Video SDK를 활용하여 실시간 강의 및 화상 통화 서비스
                    개발
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 170만 명의 학생과 수백 명의 강사가 사용하는 핵심 기능 구현
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 화면 및 강의 비디오 공유, 채팅, 소그룹 라이브 등 다양한
                    기능 지원
                  </li>
                </ul>
                {/* 개발 프로세스 개선 */}
                <h4 className={STYLES.SUB_TITLE}>개발 프로세스 개선</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 공통 UI 컴포넌트 및 UI 모달 패키지 개발
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 코드 컨벤션 정립 및 기존 레거시 코드 품질 보완
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
