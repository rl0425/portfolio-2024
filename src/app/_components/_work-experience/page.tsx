/**
 * 작업 경험 섹션 스타일 상수
 */
const STYLES = {
  CONTAINER: "flex flex-col gap-3",
  MAIN_TITLE: "text-[14px] md:text-[15px] font-semibold text-[#222222ba]",
  SUB_TITLE: "text-[14px] md:text-[16px] font-bold underline text-[#222222ba]",
  DETAIL_TITLE: "text-[12px] md:text-[13px] font-semibold text-[#22222275]",
  LIST_ITEM:
    "ml-2 mb-2 text-[12px] md:text-[15px] font-normal text-[#222222ba] leading-[1.5]",
  HIGHLIGHT: "font-semibold text-[#222222]",
  PAGE_WRAPPER: "bg-white px-5",
  CONTENT_WRAPPER: "mx-auto bg-white",
  MAIN_CONTENT: "h-full w-full pt-6",
  SECTION: "mb-6",
  DIVIDER: "h-[1px] w-full bg-[#2222223b]",
  MAIN_HEADING: "mb-1 text-[24px] font-bold md:text-[26px] md:font-extrabold",
  COMPANY_NAME: "text-[14px] font-bold text-[#222222] md:text-[16px]",
  COMPANY_PERIOD: "text-[12px] font-normal text-[#777676] md:text-[14px]",
  COMPANY_DESC: "text-[14px] font-medium md:text-[15px]",
  CONTENT_CONTAINER:
    "flex flex-col gap-3 text-[12px] font-normal leading-relaxed md:text-[14px]",
  COMPANY_INFO_CONTAINER: "flex items-center gap-2",
  COMPANY_INFO_BOX: "bg-[#2222221c] p-4 rounded-lg",
  SECTION_MARGIN: "mt-6",
} as const;

/**
 * 작업 경험 컴포넌트
 */
export default function WorkExperience() {
  return (
    <div className={STYLES.PAGE_WRAPPER}>
      <div className={STYLES.CONTENT_WRAPPER}>
        <main className={STYLES.MAIN_CONTENT}>
          <section className={STYLES.SECTION}>
            <h2 className={STYLES.MAIN_HEADING}>WORK EXPERIENCE.</h2>

            <div className={STYLES.CONTENT_CONTAINER}>
              <div className={STYLES.COMPANY_INFO_BOX}>
                <p className={STYLES.COMPANY_INFO_CONTAINER}>
                  <span className={STYLES.COMPANY_NAME}>(주)클래스유</span>
                  <span className={STYLES.COMPANY_PERIOD}>
                    2023년 8월 ~ 2024년 11월
                  </span>
                </p>
                <p className={STYLES.COMPANY_DESC}>
                  강의별 커뮤니티 서비스가 있는 커뮤니티형 온라인 강의 플랫폼을
                  개발 및 지원하는 IT 솔루션 기업
                </p>
                <h3 className={STYLES.DETAIL_TITLE}>프론트엔드 개발</h3>
              </div>
              <div className={STYLES.DIVIDER}></div>
              <div className={STYLES.CONTAINER}>
                <h4 className={STYLES.SUB_TITLE}>
                  실시간 강의 및 화상 통화 서비스 개발
                </h4>
                <ul className="mb-2 list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • Agora Video SDK와 SD-RTN을 활용하여 실시간 강의 및 화상
                    통화 서비스의 핵심 기능을 구현하여 사용자 경험을 극대화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 수십 명의 학생과 강사가 동시 접속할 수 있는 대규모 실시간
                    강의 시스템을 성공적으로 구축하여 플랫폼의 확장성을 확보
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 지연 로딩 및 컴포넌트 최적화를 통해 초기 로딩 속도를 30%
                    향상시키고, 대규모 사용자 접속 시 안정성을 극대화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 화면 공유, 강의 영상 재생, 실시간 채팅, 소그룹 라이브 등
                    다양한 인터랙티브 기능을 개발하여 사용자 참여도를 향상
                  </li>
                </ul>

                <h4 className={STYLES.SUB_TITLE}>개발 프로세스 개선</h4>
                <ul className="mb-2 list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • Webpack 빌드 최적화 및 코드 스플리팅 기법을 통해 초기 로딩
                    시간을 50% 단축
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • TypeScript 도입 및 코드 품질 개선을 위한 컨벤션을
                    수립하고, 재사용 가능한 UI 컴포넌트 라이브러리를 구축하여
                    개발 효율성을 증가
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • TypeScript와 Next.js를 기반으로 프로젝트 구조를
                    재설계하고, 코드 마이그레이션을 주도하여 코드의 일관성을
                    확보
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • Recoil/Redux 기반의 전역 상태 관리 아키텍처를 설계하고
                    성능을 최적화하여 애플리케이션의 반응성을 개선
                  </li>
                </ul>

                <h4 className={STYLES.SUB_TITLE}>플랫폼 유지 및 개선</h4>
                <ul className="mb-2 list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • Context API와 React Query를 활용하여 전역 상태 관리 구조를
                    개선하고 비동기 로직 처리를 위한 커스텀 훅을 설계 및
                    적용하여 코드의 가독성을 높임
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • TypeScript 도입 및 코드 컨벤션 정립으로 코드 품질 및
                    유지보수성을 강화하여 팀 내 협업을 원활하게 함
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 반응형 UI/UX 개선을 통해 다양한 디바이스에서 사용자 경험을
                    향상시켜 사용자 만족도를 높임
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 사용자 피드백 수집 및 분석을 통해 기능 개선 사항을
                    도출하고, 이를 바탕으로 지속적인 플랫폼 개선을 주도
                  </li>
                </ul>

                <h4 className={STYLES.SUB_TITLE}>성과 및 기여</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 실시간 강의 시스템 구축으로 월간 활성 사용자(MAU) 50%
                    증가를 달성하여 플랫폼의 가치 증대에 기여
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 화상 통화 기능 도입에 따른 사용자 체류 시간 평균 50%
                    향상을 이끌어내어 사용자 참여도를 높임
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 소그룹 라이브 기능 개발로 학습자 참여도를 15% 증가시켜
                    교육 효과를 극대화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 모바일 최적화를 통한 크로스 플랫폼 지원으로 모바일 사용자
                    비율을 확대하여 시장 경쟁력을 강화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 팀 내 코드 리뷰 및 지식 공유를 통해 팀원들의 기술 역량을
                    강화하고, 프로젝트의 전반적인 품질을 향상시킴
                  </li>
                </ul>
              </div>

              <div className={STYLES.SECTION_MARGIN}>
                <div className={STYLES.COMPANY_INFO_BOX}>
                  <p className={STYLES.COMPANY_INFO_CONTAINER}>
                    <span className={STYLES.COMPANY_NAME}>(주)헤븐트리</span>
                    <span className={STYLES.COMPANY_PERIOD}>
                      2021년 7월 ~ 2022년 12월
                    </span>
                  </p>
                  <p className={STYLES.COMPANY_DESC}>
                    프로젝트 관리 솔루션부터 포트폴리오까지 통합 관리가 가능한
                    클로바인(Clovine) 서비스 개발
                  </p>
                  <h3 className={STYLES.DETAIL_TITLE}>
                    프론트엔드/백엔드 개발
                  </h3>
                </div>
              </div>
              <div className={STYLES.DIVIDER}></div>
              <div>
                <div className={STYLES.CONTAINER}>
                  <h4 className={STYLES.SUB_TITLE}>
                    통합형 프로젝트 관리 프로그램(PPM) 기능 개발
                  </h4>
                  <ul className="mb-2 list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • DHTMLX Gantt 라이브러리 커스터마이징을 통한 자사
                      PPM(프로젝트 포트폴리오 관리) 시스템에 최적화된 간트차트
                      서비스 개발
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 생성, 작업 등록/관리, 팀원 할당, 진척도 추적 등
                      PPM 핵심 기능 구현으로 웹페이지 방문자 수(PV) 200% 증가
                      달성
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 트리 구조 기반 조직도 시스템, 사용자 권한 기반 접근 제어
                      시스템 등 다양한 산업군에서 사용 가능한 관리기능 개발
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 엔터프라이즈 고객을 위한 트리 뷰 조직도, 워크스페이스
                      간트차트, 사업 분야 리스트 등 맞춤형 기능 개발로 140개
                      이상의 고객사 확보에 기여
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      RESTful API 설계 및 통신 최적화, 재사용 가능한 공통 함수
                      개발 및 비즈니스 로직 모듈화
                    </li>
                  </ul>
                  <h4 className={STYLES.SUB_TITLE}>
                    개발 프로세스 최적화 및 문서화
                  </h4>
                  <ul className="list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 데이터베이스 테이블 정의서 및 함수 기능 명세서를
                      작성하여 유지보수성향상 및 팀 내 지식 공유 촉진
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 프로젝트 관리를 위한 공통 함수와 UI 가이드라인을
                      문서화하여 개발 표준을 수립
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • Git Flow 전략 도입 및 코드 리뷰 프로세스 구축으로 배포
                      안정성과 코드 품질 향상
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      MongoDB 인덱싱 및 데이터 캐싱 전략 도입으로 API 응답 속도
                      200% 개선
                    </li>
                  </ul>
                  <h4 className={STYLES.SUB_TITLE}>성과 및 기여</h4>
                  <ul className="mb-2 list-none">
                    <li className={STYLES.LIST_ITEM}>
                      • 시드 단계에서 시리즈 A 100억 원 규모 투자 유치 과정의
                      핵심 서비스 개발 주도
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 창업진흥원 산하 100여 개 기업 대상 엔터프라이즈 솔루션
                      구축으로 140개 이상의 고객사 확보
                    </li>
                    <li className={STYLES.LIST_ITEM}>
                      • 서비스 개선을 통한 전체 페이지뷰(PV) 200% 증가 달성
                    </li>
                  </ul>
                </div>
              </div>

              <div className={STYLES.COMPANY_INFO_BOX}>
                <p className={STYLES.COMPANY_INFO_CONTAINER}>
                  <span className={STYLES.COMPANY_NAME}>멘토링</span>
                  <span className={STYLES.COMPANY_PERIOD}>
                    2024년 8월 ~ 2024년 9월
                  </span>
                </p>
                <p className={STYLES.COMPANY_DESC}>
                  [유데미 x 스나이퍼팩토리] Next.js 프로젝트 캠프 2기 리드 멘토
                </p>
                <h3 className={STYLES.DETAIL_TITLE}>프론트엔드 개발</h3>
              </div>
              <div className={STYLES.DIVIDER}></div>

              <div className={STYLES.CONTENT_CONTAINER}>
                <h4 className={STYLES.SUB_TITLE}>주요 역할 및 성과</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • Next.js 기반의 실전 프로젝트 캠프에서 3개 팀을 동시에
                    리드하며 멘토링을 수행, 각 팀의 프로젝트 진행 상황을
                    주도적으로 관리
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 팀별 프로젝트 기획부터 배포까지의 과정을 기술적으로
                    지도하여 실무 경험을 쌓도록 지원
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 총 12명의 교육생 중 1명의 우수 수료생을 배출하여
                    프로그램의 효과성을 입증
                  </li>
                </ul>
                <h4 className={STYLES.SUB_TITLE}>프로젝트 기획 및 설계</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 요구사항 분석 및 기술 스택 선정에 대한 멘토링을 통해
                    팀들이 프로젝트 목표에 적합한 기술을 선택하도록 유도
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 프로젝트 아키텍처 설계를 멘토링하여 각 팀의 설계가
                    최적화될 수 있도록 지원
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • Git 기반의 협업 워크플로우를 구축하여 팀 내 협업 효율성을
                    극대화하고 코드 관리 체계를 정립
                  </li>
                </ul>
                <h4 className={STYLES.SUB_TITLE}>기술 지도</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • Next.js 13 App Router를 실전에서 활용할 수 있도록 실습을
                    통해 심화 교육 제공
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • TypeScript 기반의 컴포넌트 설계를 지도하여 코드의 가독성과
                    유지보수성을 높임
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 상태 관리 및 데이터 페칭 전략을 수립하여 팀들이 효율적으로
                    데이터를 처리할 수 있도록 지원
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • CI/CD 파이프라인 구축을 지원하여 자동화된 배포 프로세스를
                    도입, 개발 주기를 단축
                  </li>
                </ul>
                <h4 className={STYLES.SUB_TITLE}>프로젝트 관리</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 주간 코드 리뷰를 진행하여 코드 품질을 높이고, 지속적인
                    피드백을 통해 개발자의 성장 지원
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 팀별 기술적 난제를 해결하도록 지원하며, 문제 해결 능력을
                    강화
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 프로젝트 일정 및 품질 관리를 통해 목표 달성을 위한
                    체계적인 진행을 도모
                  </li>
                </ul>
                <h4 className={STYLES.SUB_TITLE}>성과 및 기여</h4>
                <ul className="list-none">
                  <li className={STYLES.LIST_ITEM}>
                    • 멘토링 프로그램을 통해 교육생들의 실무 능력을 향상시키고,
                    향후 취업 가능성을 높임
                  </li>
                  <li className={STYLES.LIST_ITEM}>
                    • 팀원 간의 협업과 소통을 강화하여 프로젝트 완수율을 높이고,
                    팀워크를 증진
                  </li>
                </ul>
              </div>
              <div className={STYLES.DIVIDER}></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
