import { Projects } from "./types";

export const projects: Projects = {
  live_service: {
    title: "LIVE SERVICE",
    date: "23.08 ~ 24.09",
    mainDescription: (
      <p>
        <a
          href="https://docs.agora.io/en/video-calling/get-started/get-started-sdk"
          className="underline"
        >
          Agora Video SDK
        </a>
        와 Agora SD-RTN을 활용하여 실시간 화상 회의 및 미디어 파일 재생 기능을
        통합한 혁신적인 온라인 강의 플랫폼을 구축함. 프로젝트 완료 후 사용자
        만족도 90%, 월간 활성 사용자 수 10% 증가. 기존 시스템의 한계를 극복하고,
        사용자 친화적인 환경을 제공하여 교육의 질을 크게 향상한 프로젝트
      </p>
    ),
    image: {
      type: "narrow",
      images: [
        "/images/live/live_6.png",
        "/images/live/live_8.png",
        "/images/live/live_9.png",
        "/images/live/live_10.png",
        "/images/live/live_12.png",
        "/images/live/live_18.png",
        "/images/live/live_19.png",
        "/images/live/live_20.png",
        "/images/live/live_21.png",
        "/images/live/live_22.png",
        "/images/live/live_23.png",
      ],
    },
    description: [
      {
        title: "실시간 화상 회의 및 화면 공유",
        description: [
          <p key="0">
            Agora Video Calling SDK를 통해 강사와 학생 간 원활한 소통 지원
            <br />
            <span className="underline">
              50% 이상의 대규모 강의 선생님들이 라이브 세션을 적극 활용, 강의
              수료율 30% 가량 향상
            </span>
          </p>,
          <p key="1">
            기술적 접근 - Agora의 Adaptive Bitrate Technology를 통해 다양한
            네트워크 환경에서도 안정적인 비디오 품질을 유지.{" "}
            <span className="underline">
              사용자의 네트워크 상태에 따라 자동으로 비트레이트를 조정하여
              최적의 통신 환경 제공
            </span>
          </p>,
        ],
      },
      {
        title: "소켓 통신 및 이벤트 관리",
        description: [
          <p key="0">
            Pusher 라이브러리를 활용하여 사용자 간의 실시간 소통을 구현.{" "}
            <span className="underline">
              채팅, 공지사항 전달, 마이크/비디오 조절 등 다양한 이벤트를
              효율적으로 관리
            </span>
          </p>,
          <p key="1">
            기술적 접근 - Pusher를 통한 소켓 통신을 통해 각 사용자 간의 이벤트를
            실시간으로 전달하여, 사용자 경험을 극대화. 특정 사용자가 마이크를
            켜거나 끌 때 모든 사용자에게 거의 동시에 일어나는 느낌을 주며, 아주
            작은 딜레이로 동시 반영
          </p>,
        ],
      },
      {
        title: "서버 연결 및 성능 최적화",
        description: [
          <p key="0">
            수 십명의 사용자가 Agora Server에 접속했을 때 발생하는 렉 문제 해결
            -{" "}
            <span className="underline">
              사용자의 비디오 및 음성을 대기 상태로 설정하고 화면에 렌더링 시
              즉각적으로 출력하여 서버 부하를 최소화
            </span>
          </p>,
          <p key="1">
            사용자의 액션과 렌더링되는 화면에 따라 Agora Server에서 Client ID를
            찾아 마이크와 카메라를 활성화/비활성화, Agora의 Multi-Stream Support
            기능을 사용하여 Agora Server 카메라 동시송출 성능 이슈 완화
          </p>,
        ],
      },
      {
        title: "소규모 그룹 전환 최적화",
        description: [
          <p key="0">
            메인 라이브 세션에서 소규모 그룹으로의 전환 시 발생할 수 있는 복잡한
            상태 관리 문제 해결.{" "}
            <span className="underline">
              기존 라이브 종료 후 모든 컴포넌트를 초기화하고, 새로운 그룹 세션에
              접속하는 과정에서의 지연 및 복잡한 논리적 오류 해결
            </span>
          </p>,
          <p key="1">
            기술적 접근 - Recoil 및 Context API를 활용하여 전역 상태 관리를
            세분화함으로써, 상태 변화에 따른 컴포넌트 간 데이터 흐름을
            안정적으로 유지.{" "}
            <span className="underline">
              이로 인해 소규모 그룹 전환 시 사용자 경험이 향상되고, 불필요한
              렌더링을 줄여 성능 최적화
            </span>
          </p>,
        ],
      },
      {
        title: "동영상 공유 및 동기화 문제 해결",
        description: [
          <p key="0">
            여러 사용자가 동일한 영상을 공유할 때 발생하는 재생 시간 차이 문제
            해결.{" "}
            <span className="underline">
              소켓 통신의 지연으로 인해 동영상 재생 시간이 차이나는 문제를 해결
            </span>
          </p>,
          <p key="1">
            기술적 구현 - 비디오 재생 상태를 Agora 측 클라이언트에 비디오
            스트림을 강제로 삽입하는 방식으로 중앙 관리를 수행. 이를 통해 특정
            사용자가 비디오를 정지하거나 재생할 때 모든 사용자에게 동일한 상태가
            반영됨.
            <br />
            <span className="underline">
              Agora 사의 기술 지원팀과 긴밀하게 협업하며, 라이브러리를 분석하고
              이해하는 과정을 통해 동기화 문제 해결
            </span>
          </p>,
        ],
      },

      {
        title: "UI/UX 설계",
        description: [
          <p key="0">
            styled-components를 활용하여 컴포넌트 기반의 UI 설계를 진행.{" "}
            <span className="underline">
              매번 전체 디자인을 변경해야 하는 상황에서, 변수화 및 상수화를 통해
              공통적인 스타일 요소를 효과적으로 관리
            </span>
          </p>,
          <p key="1">
            기술적 접근 - 디자인 시스템의 유연성을 높이기 위해 색상, 폰트, 여백
            등의 속성을 변수로 정의하여 재사용성을 극대화.{" "}
            <span className="underline">
              이를 통해 디자인 변경 시 일관성을 유지하며, 개발 효율성을 향상
            </span>
          </p>,
        ],
      },
      {
        title: "강의 플랫폼과의 통합",
        description: [
          <p key="0">
            기존 강의 플랫폼의 강의 영상 및 사용자 화면 공유 기능을 실시간으로
            연동하여 학습 효과 극대화하여 커뮤니티 강의 수료율 30% 가량 향상
          </p>,
          <p key="1">
            백엔드 팀과 협력해 API 통신 최적화, 데이터 전송 속도 개선. RESTful
            API 설계를 통해 데이터 처리 속도 향상
          </p>,
        ],
      },
      {
        title: "NextAuth를 통한 인증 시스템 구현",
        description: [
          <p key="0">
            Next.js의 NextAuth 라이브러리를 활용하여 외부 소셜 로그인 기능을
            통합. 이를 통해 사용자는 카카오, 구글, 네이버 등 다양한 소셜
            계정으로 간편하게 로그인할 수 있음
          </p>,
          <p key="1">
            백엔드 팀과 긴밀히 협력하여 로그인 데이터 구조와 플로우 차트를
            공동으로 설계.
            <br />
            <span className="underline">
              시스템 데이터의 일관성을 유지하고, 사용자 인증 과정의 효율성을
              극대화
            </span>
          </p>,
        ],
      },
    ],
    techStack: [
      "React",
      "React Query",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Recoil",
      "Styled-Components",
      "CSS-in-JS",
      "Git",
      "GitHub",
      "Figma",
    ],
    feature: [
      {
        title: "독립형 라이브 페이지 개발",
        items: [
          <p key="0">
            기존 강의 플랫폼에 라이브 기능을 통합하여 사용자 친화적인 독립적
            페이지 구축.{" "}
            <span className="underline">
              이용자들이 다양한 강의를 통해 서버에 남는 라이브 이용 로그가 일일
              500회를 초과하는 성과를 기록
            </span>
          </p>,
          <p key="1">
            라이브 기능 도입 후 사용자 참여가 증가하여, 강의 수와 이용 빈도 모두
            크게 향상됨. 이로 인해 플랫폼의 전반적인 활성화가 이루어짐
          </p>,
        ],
      },
      {
        title: "라이브 예약 서비스",
        items: [
          <p key="0">
            특정 시간대 예약 시 자동으로 라이브 채널을 생성하여 사용자 편의성을
            높임.{" "}
            <span className="underline">
              각 커뮤니티(강의) 채널에서 라이브를 예약하는 사용자 수가 급증하며,
              사용자 커뮤니티 강의 참여가 활발해짐
            </span>
          </p>,
        ],
      },
      {
        title: "반응형 웹 디자인 및 크로스 플랫폼 호환성",
        items: [
          <p key="0">
            모바일 환경에 맞춘 웹뷰 디자인을 새롭게 구축하여, iOS 및 Android
            개발자들이 제공하는 디자인과 기능을 완전히 일치시킴.{" "}
            <span className="underline">
              이를 통해 사용자에게 일관된 경험을 제공하며, 라이브 기능
              구현에서도 PC(웹)와 동일한 사용자 인터페이스를 유지
            </span>
          </p>,
          <p key="1">
            기술적 접근: 라이브 기능이 PC(웹)에서만 개발된 후, 해당 소스를 웹뷰
            형태로 모바일 팀에게 공유하여 협업을 강화.{" "}
            <span className="underline">
              이러한 설계를 통해 모바일 환경에서도 원활한 영상 공유 및 사용자
              인터랙션이 가능하도록 하여, 전체적인 사용자 만족도가 향상됨
            </span>
          </p>,
        ],
      },
      {
        title: "사용자 지원 기능",
        items: [
          <p key="0">
            커뮤니티 라이브에서 매니저 호출 기능 추가.{" "}
            <span className="underline">
              이로 인해 고객 문의 처리 속도가 급격하게 향상되었으며, 실시간 지원
              요청에 대한 API를 별도로 개발하여 사용자 요청을 실시간으로 처리
            </span>
          </p>,
          <p key="1">
            기술적 접근 - 사용자가 도움을 요청할 때, CM 팀의 Slack과 연동하여
            즉각적으로 알림이 전송되도록 설계.{" "}
            <span className="underline">
              실시간으로 도움 요청이 가능해져, 사용자 만족도가 크게 향상됨
            </span>
          </p>,
        ],
      },

      {
        title: "소규모 그룹 기능 및 설문조사",
        items: [
          <p key="0">
            메인 라이브에서 소규모 그룹으로 나뉘어 별도의 라이브 세션 생성.{" "}
            <span className="underline">
              수동적이던 사용자의 활동 참가율 증가와 그룹별 맞춤형 강의 기능
              제공으로 선생님과 학생의 만족도 상승
            </span>
          </p>,
          <p key="1">
            주관식, 객관식, 체크리스트 형식의 설문조사 생성 및 배포 기능 제공.{" "}
            <span className="underline">
              설문조사 결과를 바탕으로 강의 개선 점 도출 및 사용자 피드백 반영
            </span>
          </p>,
        ],
      },
      {
        title: "그 외 주요 기능",
        items: [
          <p key="0">
            <span className="font-semibold underline">라이브 세부 설정</span> -
            라이브 제목, 설명 및 공지사항 설정과 사용자 정보 확인 기능 제공
            <br />
            <span className="font-semibold underline">
              화면 및 비디오 공유
            </span>{" "}
            - 화면과 영상의 동시 공유, URL 및 자료 공유 기능
            <br />
            <span className="font-semibold underline">
              그리드 및 핀 뷰 기능
            </span>{" "}
            - 사용자 표시 조정 및 하이라이트 뷰 설정 기능
            <br />
            <span className="font-semibold underline">
              소그룹 기능 (멀티 라이브)
            </span>{" "}
            - 소규모 그룹으로 나뉘어 별도의 라이브 세션 생성 가능
            <br />
            <span className="font-semibold underline">
              설문조사 및 실시간 채팅
            </span>{" "}
            - 다양한 형식의 설문조사와 실시간 채팅 기능 통합
            <br />
            <span className="font-semibold underline">
              사용자 지원 및 관리 기능
            </span>{" "}
            - 실시간 지원 요청 API, 고객센터 연동, 관리자 조용히 입장, 후기 작성
            및 호출 기능
          </p>,
        ],
      },
      // {
      //   title: "최대 30명 사용자 지원",
      //   items: [
      //     "동시 접속자 30명까지 원활한 라이브 환경 제공. 대규모 사용자 참여 시에도 안정적인 성능 보장.",
      //   ],
      // },
      // {
      //   title: "라이브 세부 설정",
      //   items: [
      //     "라이브 타이틀, 설명, 공지사항 설정 기능 제공.",
      //     "각 사용자별 정보 확인 및 메시지 송신 기능 지원.",
      //     "관리자(admin)가 마이크 및 비디오 설정을 통제하여 라이브 운영 효율성 강화.",
      //   ],
      // },
      // {
      //   title: "화면 공유 및 비디오 공유",
      //   items: [
      //     "창 전환 및 영상 공유자의 카메라 동시 공유 가능.",
      //     "URL, 강의 자료(주차별 영상 포함) 및 서버에 저장된 다양한 영상 콘텐츠 공유.",
      //     "모든 사용자에게 동일 구간의 영상 동기화 재생 기능 제공으로 학습 몰입도 향상.",
      //   ],
      // },
      // {
      //   title: "그리드 및 핀 뷰 기능",
      //   items: [
      //     "사용자가 화면에 표시할 인원을 직접 조정 가능.",
      //     "특정 사용자를 하이라이트 뷰로 설정하여 발표자 또는 주요 참여자의 가시성을 높임.",
      //   ],
      // },
      // {
      //   title: "소그룹 기능 (멀티 라이브)",
      //   items: [
      //     "메인 라이브에서 소규모 그룹으로 나뉘어 별도의 라이브 세션을 생성할 수 있는 기능 지원.",
      //     "사용자를 자동 분배하거나 커스텀 분배로 새로운 소그룹 라이브로 이동 가능.",
      //     "관리자가 각 소그룹의 세션을 종료하거나 메시지를 전송하고, 멤버를 이동 및 제거할 수 있는 제어 기능 제공.",
      //   ],
      // },
      // {
      //   title: "설문조사 기능",
      //   items: [
      //     "주관식, 객관식, 체크리스트 형식의 설문조사 생성 및 배포.",
      //     "실시간 통계 및 결과 시각화를 통해 사용자 참여도와 피드백 분석 가능.",
      //   ],
      // },
      // {
      //   title: "실시간 채팅 시스템",
      //   items: [
      //     "기존 강의 플랫폼의 채팅 기능을 통합하여 참여자 간 소통과 협업을 실시간으로 지원.",
      //   ],
      // },
      // {
      //   title: "고객센터 및 Q&A 기능",
      //   items: [
      //     "라이브 중 발생할 수 있는 사용자 문의나 기술 지원을 빠르게 처리할 수 있는 고객센터 연동.",
      //   ],
      // },
      // {
      //   title: "관리자 조용히 입장 기능",
      //   items: [
      //     "관리자 계정으로 카메라, 마이크를 비활성화한 상태에서 은밀히 라이브에 참여할 수 있는 기능 제공.",
      //   ],
      // },
      // {
      //   title: "후기 작성 기능",
      //   items: [
      //     "사용자별로 후기를 작성할 수 있는 시스템 구축. 이를 통해 수업 또는 라이브에 대한 투명한 피드백과 품질 개선 도모.",
      //   ],
      // },
      // {
      //   title: "매니저 호출 및 사용자 호출 기능",
      //   items: [
      //     "라이브 세션 중 필요한 매니저나 다른 강의 채널의 수강자를 호출할 수 있는 기능 지원.",
      //   ],
      // },
    ],
    team: ["프론트엔드 2명,", "백엔드 2명,", "디자이너 2명,", "마케터 1명"],
    link: {
      title: "Related",
      related: [
        <a
          key="0"
          href="https://docs.agora.io/en/video-calling/get-started/get-started-sdk"
          className="underline"
        >
          Agora Video SDK,
        </a>,
        <a key="1" href="https://www.classu.co.kr/new" className="underline">
          ClassU
        </a>,
      ],
    },
  },
  gantt_chart: {
    title: "Gantt Chart",
    date: "21.12 ~ 22.03",
    mainDescription: (
      <p>
        <a href="https://dhtmlx.com/" className="underline">
          DHTMLX
        </a>{" "}
        Gantt 라이브러리를 기반으로 자사의 PPM(프로젝트 포트폴리오 관리)
        시스템에 최적화된 간트차트 서비스를 개발함.
        <br /> 프로젝트의 모든 태스크와 마일스톤을 시각화하고, 다양한 상태 관리
        및 자동화 기능을 구현하여 프로젝트 관리 효율을 300% 향상시켰으며 특히
        실시간 일정 조정, 다중 태스크 처리, 자동 종속성 관리 등의 핵심 기능을
        자체 개발하여 사용자 경험을 크게 개선하였고, 이는 월간 방문자 수 300%
        증가와 프로젝트 관리 시간 60% 단축이라는 가시적인 성과를 달성함.
      </p>
    ),
    image: {
      type: "narrow",
      images: [
        "/images/gantt/gantt_6.png",
        "/images/gantt/gantt_7.png",
        "/images/gantt/gantt_3.png",
        "/images/gantt/gantt_8.png",
        "/images/gantt/gantt_4.gif",
        "/images/gantt/gantt_5.gif",
        "/images/gantt/gantt_1.png",
      ],
    },
    description: [
      {
        title: "기획 및 개발",
        title: "기획 및 개발",
        description: [
          <p key="0">
            <span className="font-semibold">
              요구사항 분석 및 아키텍처 설계
            </span>{" "}
            <br />
            - DHTMLX Gantt의 코어 기능을 분석하고 자사 PPM 시스템에 최적화된
            아키텍처 설계 : 기본 제공 API 분석 및 커스텀 이벤트 핸들러 설계,
            대규모 데이터 처리를 위한 렌더링 최적화 방안 수립
            <br />
            - 태스크와 마일스톤의 상태 관리 시스템 구축 (진행중, 완료, 지연,
            보류 등) : 상태 전이 규칙 및 자동 상태 변경 로직, 상태별 시각적 표현
            요소 정의 및 구현
            <br />- 프로젝트별 사용자 권한(관리자, 일반 사용자, 게스트 등) 관리
            시스템 설계 : 권한별 접근 가능 매트릭스 설계
            <br />- RESTful API 설계 및 데이터 모델링을 통한 확장 가능한 구조
            확립 : MongoDB 스키마 최적화 및 인덱싱 전략 수립, 대용량 데이터
            처리를 위한 쿼리 최적화
          </p>,
          <p key="1">
            <span className="font-semibold">애자일 개발 프로세스</span> <br />
            - 2주 단위의 스프린트로 진행하여 빠른 피드백과 개선 사이클 구현
            <br />
            - 데일리 스크럼과 스프린트 리뷰를 통한 지속적인 품질 관리
            <br />
            - 피드백 우선순위 분석 및 백로그 반영, A/B 테스트를 통한 UI/UX 개선
            등 사용자 피드백 수집 및 반영
            <br />
          </p>,
        ],
      },
      {
        title: "성능 최적화 및 코드 개선",
        description: [
          <p key="0">
            <span className="font-semibold">
              DHTMLX Gantt 라이브러리 최적화
            </span>
            <br />- 예제 데모 코드를 자사 플랫폼에 맞춰 개선하여 API 통신 속도
            300% 향상
            <br />- 다중 선택 및 일괄 수정 기능, 자동 일정 조정 알고리즘 등 기존
            간트차트 기능 개수 200% 이상 증가 및 성능 최적화
            <br />- 공통 함수 추출화 및 모듈화, 이벤트 핸들러 통합 관리 등 함수
            모듈화를 통한 재사용성 향상 및 타 페이지 연동 용이성 확보
          </p>,
          <p key="1">
            <span className="font-semibold">문서화 및 설계</span>
            <br />- 함수 기능 명세서 및 데이터베이스 테이블 설계서 작성
            <br />- 태스크와 마일스톤의 모든 상태 케이스 정의 및 관리 로직 설계
            및 예외 케이스 처리 방안 정의
          </p>,
        ],
      },
      {
        title: "결과 및 성과",
        description: [
          <p key="1">
            <span className="font-semibold">성능 개선</span>
            <br />- 기존 태스크 수정마다 개별 API 호출 로직을 개선하여, 다중
            태스크 일괄 처리로 수정당 평균 0.3초로 단축 하는 등{" "}
            <span className="font-semibold">
              태스크 데이터 일괄 처리 로직 구현으로 API 호출 횟수 75% 감소
            </span>
            <br />- 초기 로딩 시 50개의 태스크/마일스톤 데이터 분할 로드, 자주
            사용되는 설정 데이터 메모리 캐싱으로 반복 요청을 제거하는 등 데이터
            페이지네이션 및 캐싱 전략 도입
            <br />- DocumentFragment 활용으로 DOM 조작을 최소화해, 초기 렌더링
            시간 및 메모리 사용량을 절반 가량 절감시킴
            <br />- 기존 런타임 에러 및 버그 수정과 브라우저 호환성 개선, 모바일
            환경 최적화로 시스템의 안정성을 향상시킴
          </p>,
          <p key="1">
            <span className="font-semibold">비즈니스 성과</span>
            <br />- 웹페이지 방문자 수(PV) 300% 증가 및 사용자 체류시간, 페이지
            재방문율 증가
            <br />- 내부 사용자 만족도 조사 결과 90점을 획득 하는 등 직관적인
            UI/UX 부분에서 높은 평가를 받음
            <br />- 고객사의 기능 요청 반영률을 85% 이상 달성 하는 등 고객사
            피드백 기반 기능 개선으로 충성 고객 확보
            <br />- 타 서비스(Kanban, Mind Map, Feed...) 대비 높은 사용성 평가로
            신규 고객 유치 기여
          </p>,
        ],
      },
    ],
    techStack: [
      "JavaScript",
      "Jquery",
      "NodeJs",
      "Express",
      "SCSS",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "Zeplin",
      "SourceTree",
    ],
    feature: [
      {
        title: "독립적인 프로젝트 관리 페이지 개발",
        items: [
          "모든 태스크, 마일스톤, 일정을 통합 관리하는 페이지 구현",
          "워크스페이스 내 전체 간트 차트 통합 관리 기능",
          "확장 가능한 구조로 설계하여 추가 기능 개발 용이",
        ],
      },
      {
        title: "다양한 뷰 제공",
        items: [
          "태스크 및 마일스톤의 리스트 뷰와 그래프 뷰 동시 지원",
          "태스크 뷰, 멤버 뷰 등 목적별 맞춤형 인터페이스 제공",
          "일간, 월간, 연간 단위의 상세 일정 관리 뷰",
        ],
      },
      {
        title: "데이터 커스터마이징 기능",
        items: [
          "그래프 데이터의 유연한 커스터마이징 옵션 제공",
          "사용자 정의 필터 및 정렬 기능",
          "드래그 및 다중 선택을 통한 일괄 일정 조정",
        ],
      },
      {
        title: "태스크 간 연결(링크) 기능",
        items: [
          "태스크 간 관계를 시각적으로 표현하는 연결선 구현",
          "종속성에 따른 자동 일정 조정 기능",
          "크리티컬 패스 자동 계산 및 시각화",
        ],
      },
      {
        title: "일정 단위별 관리 기능",
        items: [
          "일간, 월간, 연간 단위로 프로젝트 일정을 관리할 수 있는 상세 뷰 제공",
          "드래그 및 다중 선택을 통해 태스크 일정을 대량으로 조정하는 편의 기능 개발",
        ],
      },
    ],
    team: ["프론트엔드 1명,", "디자이너 1명,", "마케터 1명"],
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://clovine.co.kr/kr/gantt" className="underline">
          Clovine
        </a>,
      ],
    },
  },
  enterprise_model: {
    title: "Enterprise Model",
    date: "22.06 ~ 22.08",
    mainDescription: (
      <p>
        <a href="https://www.mss.go.kr/site/smba/main.do" className="underline">
          중소벤처기업부
        </a>
        의 산하기관인 창업진흥원에서 요구하는 자사 PPM 솔루션 프로그램의
        엔터프라이즈 모델 기획 및 개발
      </p>
    ),
    image: {
      type: "narrow",
      images: [
        "/images/enterprise/enterprise_7.png",
        "/images/enterprise/enterprise_3.png",
        "/images/enterprise/enterprise_1.png",
        "/images/enterprise/enterprise_2.png",
        "/images/enterprise/enterprise_4.png",
        "/images/enterprise/enterprise_5.png",
        "/images/enterprise/enterprise_6.png",
      ],
    },
    description: [
      {
        title: "솔루션 완성도와 활용성 증대",
        description: [
          <p key="0">
            창업진흥원 소속 100여 개 기업이 자사의 솔루션에 접근하고
            커스터마이징할 수 있도록 지원 및 기술 개발
          </p>,
          <p key="1">
            클라이언트(창업진흥원)의 요구사항과 명세서를 기한 내에 모두 충족,
            이를 통해 기업 이미지와 신뢰도를 강화
          </p>,
          <p key="2">
            높은 완성도로 서비스 사용량을 증대하며{" "}
            <span className="underline">
              창업진흥원 소속 다수 기업의 접근성과 실사용률을 확보
            </span>
            하는 실질적인 비즈니스 성과 달성
          </p>,
        ],
      },
      {
        title: "기능 확장 및 솔루션 고도화",
        description: [
          <p key="0">
            기존 프로젝트 내에서만 사용 가능했던 간트차트를 확장하여
            워크스페이스 전체 프로젝트를 관리할 수 있는 기술 도입 및 개선
          </p>,
          <p key="1">
            <span className="underline">
              조직도 기반의 트리뷰, 필터링 리스트뷰, 탭형 카드뷰, 워크스페이스
            </span>{" "}
            등 데이터를 다양한 방식으로 시각화하는 기능 개발
          </p>,
        ],
      },
      {
        title: "기능 명세화 및 문서화",
        description: [
          "함수 명세서와 DB 테이블 설계서를 작성하여 프로젝트 관리 체계화를 실현하고 확장성을 확보",
          "클래스 이름 및 파일 네이밍 규칙을 통일하고 문서화하여 코드베이스의 유지보수성과 팀 협업 효율성을 극대화",
        ],
      },
      {
        title: "PM(Project Manager) 역할 수행",
        description: [
          <p key="0">
            디자이너 3명, 마케터 2명, 프론트엔드 및 백엔드 개발자 3명으로 구성된
            팀에서{" "}
            <span className="underline">
              프로젝트 매니저로서의 역할을 성공적으로 수행
            </span>{" "}
          </p>,
          <p key="1">
            프로젝트 일정, 리소스, 인력을 체계적으로 관리하며 전반적인 진행을
            원활하게 이끌어냄
          </p>,
          <p key="2">
            자사 PPM 솔루션을 활용하여 사용자 관점에서 일정과 태스크를 직접
            관리하며, 제품의 안정성과 실효성을 검증
          </p>,
        ],
      },
      {
        title: "반응형 디자인 및 사용자 경험 강화",
        description: [
          <p key="0">
            태블릿과 모바일 환경을 고려하여 반응형 레이아웃과 디자인을 설계,
            다양한 디바이스 환경에서 최적의 사용자 경험 제공
          </p>,
        ],
      },
    ],
    techStack: [
      "JavaScript",
      "Jquery",
      "NodeJs",
      "Express",
      "SCSS",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "Zeplin",
      "SourceTree",
    ],

    feature: [
      {
        title: "트리 뷰 조직도 페이지 개발",
        items: [
          "각 조직의 체계도를 시각적으로 표현한 트리 뷰 페이지 개발",
          "트리 구조에서 노드 추가/삭제, 이동, 트리 전체 추가/삭제 기능 구현",
        ],
      },
      {
        title: "워크스페이스 간트차트 페이지 개발",
        items: [
          "워크스페이스 내 모든 프로젝트의 일정 및 상세 내용을 한눈에 확인할 수 있는 간트차트 기능 제공",
          "프로젝트별 테마 색상 설정, 링크 이동, 날짜 표시 기능 구현",
          "워크스페이스 다중 선택 및 간트차트 데이터 정렬 기능 개발",
        ],
      },
      {
        title: "사업분야 리스트 페이지 개발",
        items: [
          "사업 분야별 각 회사의 아이템, 담당자, 사업 소개서를 리스트 형태로 제공",
          "필터링, 페이지네이션, 검색 기능을 통해 사용자의 데이터 접근성 향상",
          "모달 창을 통한 회사 소개서 열람 및 파일 다운로드 기능 제공",
        ],
      },
      {
        title: "태스크 및 마일스톤 관리 기능",
        items: [
          "빈 스케줄 및 태스크, 마일스톤의 생성, 삭제, 수정 기능 구현",
          "참여자 추가/삭제 및 그룹화 기능 제공으로 협업 환경 강화",
          "모든 태스크와 마일스톤의 일정 및 내용 관리 기능 지원",
        ],
      },
      {
        title: "공지사항 카드 뷰 페이지 개발",
        items: [
          "워크스페이스 내 모든 프로젝트의 태스크와 공지사항을 카드 형식으로 표시",
          "태스크 카드 뷰: 태스크 제목, 기간, 참여자, 상태 등 주요 정보를 시각적으로 제공",
          "공지사항 카드 뷰: 공지사항의 유형, 제목, 작성자, 작성일 등 핵심 정보를 명확하게 표시",
        ],
      },
    ],
    team: ["프론트엔드 3명,", "디자이너 3명,", "마케터 2명"],
    link: {
      title: "Related",
      related: [
        <a
          key="0"
          href="https://clovine.co.kr/kr/partners"
          className="underline"
        >
          Clovine
        </a>,
      ],
    },
  },
  project_evaluation: {
    title: "Project Evaluation",
    date: "22.06 ~ 22.07",
    mainDescription: (
      <p>
        완료된 프로젝트뿐만 아니라 진행 중인 프로젝트의 상태를 실시간으로 평가할
        수 있는 기능을 사용자들에게 제공하는 서비스 페이지를 기획하고 개발함
      </p>
    ),
    image: {
      type: "narrow",
      images: [
        "/images/evaluation/evaluation_1.png",
        "/images/evaluation/evaluation_2.gif",
        "/images/evaluation/evaluation_3.png",
        "/images/evaluation/evaluation_4.png",
      ],
    },
    description: [
      {
        title: "디자인과 배포를 제외한 전반적인 기획 및 개발, 구현 작업 수행",
        description: [
          <p key="0">
            프로젝트의 핵심 기능을 직접 설계하고 구현하며 전체적인 개발 프로세스
            주도함
          </p>,
        ],
      },
      {
        title: "Chart.js를 활용한 데이터 시각화",
        description: [
          <p key="0">
            역상승 그래프 및 태스크·마일스톤 테이블 서비스를 개발하여, 데이터의
            시각적 표현을 통해 사용자가 프로젝트 진행 상황과 결과를 직관적으로
            이해할 수 있도록 지원함
          </p>,
        ],
      },
      {
        title: "다양한 산업군의 프로젝트 산출물 계산 및 평가 기능",
        description: [
          "카테고리별 프로젝트 평가 지표를 제공함으로써 폭넓은 고객층 확보에 기여. 이를 통해 사용자는 산업군에 맞춘 맞춤형 평가를 받을 수 있음",
        ],
      },
      {
        title: "다각적인 프로젝트 가치 평가 지표 기반 기능 개발",
        description: [
          <p key="0">
            사용자들에게 프로젝트 성과를 수치화하고 다양한 시각적 데이터를
            제공하여 자사 PPM 시스템의 활용성과 기능성을 증대시킴. 이를 통해
            사용자들은 프로젝트의 성공 여부를 명확하게 판단할 수 있음
          </p>,
        ],
      },
      {
        title: "함수 기능 명세서 및 DB 테이블 설계서 작성",
        description: [
          <p key="0">시스템 구조를 문서화하여 유지보수성과 확장성을 강화</p>,
        ],
      },
      {
        title:
          "프로젝트 내 태스크 및 마일스톤 데이터 기반 차트 및 그래프 서비스 기획·개발",
        description: [
          <p key="0">
            모든 태스크와 마일스톤의 데이터를 시각화하여 사용자 편의성과 데이터
            활용도를 극대화함. 이를 통해 사용자는 프로젝트의 진행 상황을 한눈에
            파악할 수 있으며, 참여자의 프로젝트 참여율과 완성률에 대한 평가도
            제공됨. <br />
            또한, 팀원 간의 상호 평가 및 댓글 기능을 통해 협업의 질을 높이고,
            초기 프로젝트 목표 달성 비율 및 실패 비율을 명확히 보여줌으로써
            프로젝트 관리의 효율성을 제고함.
          </p>,
        ],
      },
    ],
    techStack: [
      "JavaScript",
      "Jquery",
      "NodeJs",
      "Express",
      "SCSS",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "Zeplin",
      "SourceTree",
    ],
    feature: [
      {
        title: "프로젝트 종합 평가 기능",
        items: [
          <p key="0">
            프로젝트의 성과와 진행 상황을 다각도로 평가할 수 있는 종합 평가
            시스템을 구축함. 산업 표준 기반의 객관적 평가 지표를 제공하여 다양한
            산업군의 고객층 확보를 달성하고, 프로젝트 특성에 맞는 맞춤형 평가
            기준 설정 및 관리 기능을 구현함.
          </p>,
        ],
      },
      {
        title: "성과 측정 및 시각화",
        items: [
          <p key="0">
            상태별 태스크 분석 및 대시보드 - 진행 상태별 태스크 현황을
            실시간으로 모니터링하여 프로젝트의 건강도를 추적함. 지연 및 초과
            일정 현황을 퍼센트 차트로 시각화하여 직관적인 진행 상황 파악을
            지원하며, 계획 대비 실제 완료 일정을 번다운 차트로 구현하여 효율적인
            일정 관리를 도움
          </p>,
        ],
      },
      {
        title: "멤버 평가 시스템",
        items: [
          <p key="0">
            프로젝트 성격에 따른 맞춤형 가중치 설정으로 공정한 평가 기준을
            제공함. 멤버별 태스크 할당 현황과 성과를 추적하여 업무 효율성을
            분석하고, 일정 준수 현황 분석을 통해 객관적인 성과 평가 시스템을
            구현함.
          </p>,
        ],
      },
      {
        title: "상호작용 및 피드백",
        items: [
          <p key="0">
            <ul>
              <li>
                Comments : 카테고리별 특성을 고려한 댓글 시스템을 구현하여
                효율적인 커뮤니케이션을 지원함
              </li>
              <li>
                Goals : 프로젝트 목표 달성도에 대한 실시간 평가 및 피드백을
                제공하여 목표 관리의 투명성을 높임
              </li>
              <li>
                Task : 개별 태스크 진행 상황을 공유하고 이슈를 논의할 수 있는
                기능을 제공함
              </li>
              <li>
                Task Chart : 전체 진척도를 분석하여 프로젝트 방향성을 점검할 수
                있도록 지원함
              </li>
              <li>
                Member Evaluation : 팀원 간의 객관적 평가 시스템을 제공하여
                협업의 질을 향상시킴
              </li>
            </ul>
          </p>,
        ],
      },
      {
        title: "통합 대시보드",
        items: [
          <p key="0">
            프로젝트 포트폴리오 뷰를 제공하여 전체 프로젝트 현황을 통합 관리함.
            참여 중인 모든 프로젝트의 실시간 진행 상황을 모니터링하고,
            프로젝트별 정량적 성과 점수를 산출 및 추적함. 종합 포인트 시스템을
            통해 객관적 성과 관리 체계를 구축하여 평가의 신뢰성을 높임
          </p>,
        ],
      },
      {
        title: "데이터 기반의 의사결정 지원 시스템",
        items: [
          <p key="0">
            실시간 현황 분석을 통해 잠재적 리스크를 조기에 발견하고, 주요 성과
            지표를 모니터링하여 개선점을 도출함. 프로젝트 진행 상황에 따른
            즉각적인 대응 체계를 구축하여, 효율적인 프로젝트 관리를 지원함
          </p>,
        ],
      },
    ],
    team: ["프론트엔드 1명,", "디자이너 1명,", "마케터 1명"],
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://clovine.co.kr/kr" className="underline">
          Clovine
        </a>,
      ],
    },
  },
  project_summary: {
    title: "Project Summary",
    date: "22.04 ~ 22.06",
    mainDescription: (
      <p>
        기업용 프로젝트 관리 솔루션의 핵심 기능으로서, 프로젝트의 초기 설정부터
        진행 과정에서 발생하는 모든 사용자 활동을 체계적으로 추적하고 관리할 수
        있는 종합적인 시스템을 설계 및 구현, 프론트엔드 개발을 주도적으로
        진행하면서 동시에 백엔드 아키텍처 설계 과정에도 적극적으로 참여하여
        전체적인 시스템의 효율성을 향상시킴
      </p>
    ),
    image: {
      type: "narrow",
      images: [
        "/images/summary/summary_2.gif",
        "/images/summary/summary_1.png",
        "/images/summary/summary_3.png",
        "/images/summary/summary_4.png",
      ],
    },
    description: [
      {
        title: "디자인과 배포를 제외한 전반적인 기획 및 개발, 구현 작업 수행",
        description: [
          <p key="0">
            프로젝트의 핵심 기능인 워크스페이스의 목표 설정 및 로그 관리 기능을
            직접 설계하고 구현하여 전체적인 개발 프로세스를 주도함.
          </p>,
        ],
      },
      {
        title: "프로젝트 초기 설정 시스템 구축",
        description: [
          <p key="0">
            <span className="underline">
              프로젝트의 기본 규칙, 목표 설정, 핵심 성과 지표(KPI) 설정 등
              다양한 형태의 입력 폼을 체계적으로 구현
            </span>
            하여, 프로젝트 매니저들이 효율적으로 프로젝트를 설정할 수 있도록
            지원함
          </p>,
        ],
      },
      {
        title: "활동 로그 시스템 개발",
        description: [
          <p key="0">
            프로젝트 내에서 발생하는 모든 사용자 활동을 실시간으로 추적하고
            기록하는{" "}
            <span className="underline">
              포괄적인 로깅 시스템을 구축하여 프로젝트의 투명성과 추적성을 확보
            </span>
          </p>,
          "수집된 로그 데이터를 효율적으로 정규화하고 필터링하는 로직을 개발하여 의미 있는 정보만을 선별적으로 제공할 수 있도록 구현",
        ],
      },
      {
        title: "성능 최적화 및 코드 품질 개선",
        description: [
          <p key="0">
            중복되는 로그 데이터를 효과적으로 제거하는 알고리즘을 구현하여{" "}
            <span className="underline">
              데이터 처리 과정에서의 지연 시간을 30% 이상 단축함
            </span>
            이 알고리즘은 특정 조건에 맞는 중복 데이터를 필터링하는 방식으로
            작동하여, 전체 로그의 품질과 효용성을 크게 향상시킴
          </p>,
          "복잡한 로그 처리 로직을 모듈화하여 시스템의 전체적인 복잡도를 감소시키고 코드의 가독성을 향상시킴. 각 모듈은 독립적으로 테스트 가능하도록 설계되어 유지보수 효율성을 높임",
          "복잡한 폼 상태를 효과적으로 관리하기 위해 상태 관리 기능을 독립적인 함수로 개발함. 이를 통해 코드의 재사용성을 높이고 상태 관리의 일관성을 확보하여 프로젝트의 전반적인 품질을 개선함",
        ],
      },
      {
        title: "프로젝트 성과",
        description: [
          <p key="0">
            기초 초안 및 프로젝트에 필요한 다양한 내용에 대한 예제와 형식을
            제공함으로써, PPM(Project Portfolio Management)에서 가장 중요한 기능
            중 하나인 목표 설정 및 요약 페이지의 커스터마이징을 지원함
          </p>,
          <p key="1">
            기존 PPM 모델에서 필요한 프로젝트 초기 설정 기능을 제공함으로써, 이
            기능을 사용하여 초기 설정을 완료하는 비율이{" "}
            <span className="underline">
              전체 프로젝트의 50% 이상에 달하는 높은 사용률을 기록함
            </span>
          </p>,
        ],
      },
      {
        title: "협업 및 커뮤니케이션",
        description: [
          <p key="0">
            {" "}
            마케팅 및 TE 팀과 협업하여 사용자 피드백을 기반으로 활동 로그를
            설계함. 중간중간 스프린트를 통해 대표님 및 각 팀장님에게 기획안과
            기능 설명을 진행하며, 개발팀, 디자인팀과 마케팅팀 간의 원활한 소통을
            주도함{" "}
          </p>,
          <p key="1">
            {" "}
            다양한 팀원들과 협력하여 효율적인 프로젝트 기획 및 협업 기술을
            향상시킴. 팀 간의 소통을 통해 프로젝트 목표를 명확히 하고, 각 팀의
            요구 사항을 충족시키기 위해 노력함{" "}
          </p>,
        ],
      },
    ],
    techStack: [
      "JavaScript",
      "Jquery",
      "NodeJs",
      "Express",
      "SCSS",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "Zeplin",
      "SourceTree",
    ],
    feature: [
      {
        title: "프로젝트 개요 페이지 개발",
        items: [
          "프로젝트 초기 설정(규칙, 목표 등)을 입력할 수 있는 기능을 기획하고 성공적으로 구현함.",
          "수십 개의 입력 필드에서 발생하는 이벤트를 효율적으로 처리하기 위해 이벤트 관리 구조를 설계함.",
          "사용자 경험(UX)을 최적화하기 위해 반응형 웹 디자인을 적용하여 태블릿 및 모바일 환경에서도 원활한 사용성을 보장함.",
          "드래그 앤 드롭 기능을 구현하여 사용자가 인터페이스에서 요소를 직관적으로 이동할 수 있도록 함. 이를 통해 사용자 입력 처리의 편의성을 높이고, 데이터 조직화 및 관리의 효율성을 개선함.",
        ],
      },
      {
        title: "활동 로그 페이지 개발",
        items: [
          "사용자 활동 로그를 보여주는 인터페이스를 구현하여 사용자들이 필요한 정보를 효율적으로 확인할 수 있도록 구성함.",
          "마케팅 및 TE 팀과 협력하여 사용자 피드백을 반영하고, 필요 없는 로그를 제거하여 유용한 정보만을 선별하여 제공함.",
          "수십 개의 로그 유형에서 발생한 중복 코드를 모듈화하여 재사용성과 유지보수성을 높임. 이를 통해 코드의 가독성을 향상시킴.",
          "프로젝트 및 태스크 뷰 등 각 사용 목적에 맞춘 사용자 인터페이스를 설계하고, 사용자 간의 원활한 이동을 위한 링크 이동 기능을 제공함.",
        ],
      },
      {
        title: "코드 품질 개선 및 문서화",
        items: [
          "함수화 및 모듈화를 통해 코드의 복잡성을 감소시키고 가독성을 향상시킴. 이를 통해 유지보수 효율성을 높임.",
          "DB 테이블 설계와 함수 명세서를 작성하여 프로젝트 관리 및 확장성을 강화함. 명확한 문서화로 팀원 간의 이해도를 높임.",
        ],
      },
    ],
    team: ["프론트엔드 1명,", "디자이너 1명,", "마케터 1명"],
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://clovine.co.kr/kr" className="underline">
          Clovine
        </a>,
      ],
    },
  },
  deats: {
    title: "Deats",
    date: "22.04 ~ 22.06",
    mainDescription: (
      <p>
        사회 취약계층 아동들의 급식 복지 서비스 접근성 향상을 위해,
        아동급식드림카드 가맹점 정보를 종합적으로 제공하는 웹 서비스를 기획하고
        개발하고 있습니다. 전반적인 개발 프로세스를 주도하며, 특히 프론트엔드
        아키텍처 설계에 중점을 두고 있습니다.
      </p>
    ),
    image: {
      type: "narrow",
      images: [
        "/images/deats/deats_3.png",
        "/images/deats/deats_4.png",
        "/images/deats/deats_1.png",
        "/images/deats/deats_5.png",
        "/images/deats/deats_6.png",
      ],
    },
    description: [
      {
        title:
          "프로젝트 전체 일정, 리소스, 인원 관리 등을 통한 PM(Project Manager) 역할 수행",
        description: [
          <p key="0">
            애자일 방법론을 적용한{" "}
            <span className="underline">스프린트 계획 수립 및 일정 관리</span>{" "}
            진행
          </p>,
          <p key="1">
            기술 스택 선정 및 아키텍처 설계 (React, TypeScript 기반)
          </p>,
          <p key="2">
            팀원 간 효율적인 협업을 위한{" "}
            <span className="underline">
              Git 브랜치 전략 및 코드 리뷰 프로세스
            </span>{" "}
            구축
          </p>,
        ],
      },
      {
        title:
          "위치 기반 길찾기 맵 서비스 및 대구시 급식카드 사용처 API 확보 및 사용",
        description: [
          <p key="0">
            Kakao Maps API를 활용한 가맹점 위치 정보 시각화 구현 중
          </p>,
          <p key="1">
            대구시 공공 API와 연동하여 실시간 가맹점 정보 업데이트 로직 개발
          </p>,
          <p key="2">사용자 현재 위치 기반 최적 경로 안내 기능 구현 예정</p>,
        ],
      },
      {
        title:
          "모듈화 및 컴포넌트별 개발을 위한 SPA 및 Router를 사용한 MPA 페이지 설계",
        description: [
          <p key="0">재사용 가능한 UI 컴포넌트 라이브러리 구축 진행 중</p>,
          <p key="1">React Query를 활용한 서버 상태 관리 전략 수립</p>,
        ],
      },
    ],
    techStack: [
      "TypeScript",
      "React",
      "React Query",
      "Redux",
      "Kakao Maps API",
      "NodeJs",
      "Express",
      "SCSS",
      "Spring",
      "MariaDB",
      "Git",
      "GitHub",
      "Figma",
    ],
    feature: [],
    team: ["프론트엔드 1명,", "백엔드 2명,", "디자이너 2명"],
    link: {
      title: "Related",
      related: [],
    },
  },
  qdrop: {
    title: "Qdrop",
    date: "23.03 ~ 23.05",
    mainDescription: (
      <p>
        IT 분야 취업 준비생들을 위한 종합적인 면접 준비 플랫폼을 기획하고
        개발했습니다. 실제 면접 경험자들의 질문과 전문가의 답변을 체계적으로
        제공하는 웹/앱 서비스를 성공적으로 구축하였으며, PM으로서 프로젝트
        전반을 주도했습니다.
      </p>
    ),
    image: {
      type: "wide",
      images: [
        "/images/qdrop/qdrop_1.png",
        "/images/qdrop/qdrop_2.png",
        "/images/qdrop/qdrop_3.png",
        "/images/qdrop/qdrop_4.png",
        "/images/qdrop/qdrop_5.png",
        "/images/qdrop/qdrop_6.png",
        "/images/qdrop/qdrop_7.png",
        "/images/qdrop/qdrop_8.png",
      ],
    },
    description: [
      {
        title: "프로젝트 관리 및 설계",
        description: [
          <p key="0">
            전체 개발 일정 수립 및 리소스 분배를 통한 효율적인 프로젝트 관리
            수행
          </p>,
          <p key="1">웹과 앱 개발의 통합적인 개발 프로세스 구축</p>,
          <p key="2">
            기술 스택 선정 및 아키텍처 설계에 대한 의사결정 주도 팀원 간
            의사결정 주도
          </p>,
        ],
      },
      {
        title: "상태 관리 시스템 구축",
        description: [
          <p key="0">
            Redux와 Redux Toolkit을 활용한 효율적인 전역 상태 관리 구현
          </p>,
          <p key="1">
            사용자 데이터, 면접 질문, 답변 등 복잡한 상태를 체계적으로 관리
          </p>,
          <p key="2">
            Redux Toolkit의 createSlice를 활용한 보일러플레이트 코드 최소화
          </p>,
        ],
      },
      {
        title: "크로스 플랫폼 개발",
        description: [
          <p key="0">
            React Native를 활용하여 웹 서비스의 모바일 앱 이식 성공
          </p>,
          <p key="1">
            웹과 앱 간의 일관된 사용자 경험 제공을 위한 UI/UX 최적화
          </p>,
          <p key="2">PlayStore 앱 등록 및 배포 프로세스 완료</p>,
        ],
      },
    ],
    techStack: [
      "React",
      "Redux",
      "Redux Toolkit",
      "React Native",
      "NodeJs",
      "Express",
      "CSS Module",
      "MySQL",
      "Spring",
      "Git",
      "GitHub",
      "Figma",
    ],
    feature: [
      {
        title: "사용자 인터페이스 및 기능 구현",
        items: [
          "카테고리별 CRUD 기능을 갖춘 게시판 시스템 구현",
          "인터랙티브한 카테고리 선택 UI 개발 (단일/다중 선택 등)",
          "스켈레톤 로딩을 활용한 사용자 경험 최적화",
          "검색 기능 구현 (실시간 인기 검색어, 최근 검색어 쿠키 기반 저장)",
        ],
      },
      {
        title: "상태 관리 및 성능 최적화",
        items: [
          "Redux와 Redux Toolkit을 활용한 전역 상태 관리 시스템 구축",
          "불필요한 리렌더링 최적화를 통한 성능 향상",
          "컴포넌트 구조 개선을 통한 렌더링 효율성 증대",
          "HTTPS 및 CORS 이슈 해결을 통한 안정적인 서버 통신 구현",
        ],
      },
      {
        title: "사용자 경험 개선",
        items: [
          "부드러운 페이지 전환 애니메이션 구현",
          "모바일 환경에 최적화된 터치 인터랙션 개발",
          "즐겨찾기 및 좋아요 기능을 통한 개인화 서비스 제공",
          "퀵 이동 기능을 통한 접근성 향상",
        ],
      },
      {
        title: "회원 관리 시스템",
        items: [
          "OAuth 기반 회원가입/로그인 구현",
          "프로필 관리 기능 개발 (닉네임 변경, 회원 탈퇴)",
          "개인화된 데이터 관리 (작성 글, 즐겨찾기 모아보기)",
        ],
      },
    ],
    team: ["프론트엔드 1명,", "백엔드 1명,", "디자이너 1명"],
    link: {
      title: "Related",
      related: [
        <a
          key="0"
          href="https://velog.io/@rl0425/Qdrop-%ED%9A%8C%EA%B3%A0%EB%A1%9D"
          className="underline"
        >
          Blog
        </a>,
      ],
    },
  },
  fotscore: {
    title: "FOTSCORE",
    date: "23.02 ~ 23.02",
    mainDescription: (
      <p>
        해외 축구 팬들을 위한 경기 결과, 하이라이트, 순위 정보를 원스톱으로
        제공하는 웹/앱 서비스를 기획하고 개발했습니다. ESPN API를 활용하여 4대
        메이저 리그의 실시간 데이터를 제공하는 서비스를 성공적으로 구축했습니다.
      </p>
    ),
    image: {
      type: "wide",
      images: [
        "/images/fotscore/fotscore_1.png",
        "/images/fotscore/fotscore_4.gif",
        "/images/fotscore/fotscore_5.gif",
        "/images/fotscore/fotscore_3.png",
        "/images/fotscore/fotscore_6.png",
        "/images/fotscore/fotscore_7.png",
      ],
    },
    description: [
      {
        title: "실시간 경기 정보 시스템 구현",
        description: [
          <p key="0">ESPN API 연동을 통한 실시간 경기 데이터 수집 및 가공</p>,
          <p key="1">
            어제/오늘/내일 경기 일정 및 결과 자동 업데이트 시스템 구축
          </p>,
          <p key="2">경기별 하이라이트 영상 및 매치 스탯 연동 기능 개발</p>,
          <p key="3">
            4개 리그(프리미어리그, 라리가, 세리에A, 분데스리가) 데이터 통합 관리
          </p>,
        ],
      },
      {
        title: "데이터 시각화 및 통계 기능",
        description: [
          <p key="0">리그별 순위표 실시간 업데이트 시스템 구현</p>,
          <p key="1">팀/선수 통계 데이터 테이블 구현</p>,
          <p key="2">실시간 뉴스 및 이슈 피드 개발</p>,
          <p key="3">데이터 시각화를 통한 직관적인 정보 전달</p>,
        ],
      },
      {
        title: "사용자 경험 최적화",
        description: [
          <p key="0">SPA 구조를 활용한 부드러운 페이지 전환 구현</p>,
          <p key="1">모바일 환경에 최적화된 터치 인터랙션 개발</p>,
          <p key="2">스켈레톤 로딩을 통한 데이터 로딩 UX 개선</p>,
          <p key="2">반응형 레이아웃으로 다양한 디바이스 지원</p>,
        ],
      },
      {
        title: "1인 프로젝트로서 기획, 디자인, 개발 전 과정 담당",
        description: [],
      },
      {
        title: "UX/UI 디자인부터 프론트엔드 개발까지 전체 프로세스 경험",
        description: [],
      },
    ],
    techStack: [
      "JavaScript",
      "ES6+",
      "React",
      "Redux",
      "Redux Toolkit",
      "React Native",
      "CSS-in-JS",
      "Git",
      "GitHub",
      "Figma",
    ],
    feature: [
      {
        title: "프론트엔드 아키텍처",
        items: [
          "React 컴포넌트 기반 모듈화 설계",
          "Redux와 Redux Toolkit을 활용한 전역 상태 관리",
          "코드 스플리팅을 통한 초기 로딩 성능 최적화",
        ],
      },
      {
        title: "API 통합 및 데이터 처리",
        items: [
          "ESPN API 데이터 캐싱 전략 구현",
          "실시간 데이터 업데이트 로직 최적화",
          "데이터 정규화를 통한 효율적인 상태 관리",
        ],
      },
      {
        title: "크로스 플랫폼 대응",
        items: [
          "React Native를 활용한 웹앱 구현",
          "네이티브 앱 수준의 사용자 경험 제공",
          "웹과 앱의 코드 베이스 통합 관리",
        ],
      },
    ],
    team: ["프론트엔드 1명"],
    link: {
      title: "Related",
      related: [
        <a
          key="0"
          href="https://velog.io/@rl0425/FOTSCORE-%ED%9A%8C%EA%B3%A0%EB%A1%9D"
          className="underline"
        >
          Blog
        </a>,
      ],
    },
  },
  pawwise: {
    title: "PawWise",
    date: "24.12 ~ ing",
    mainDescription: (
      <p>
        PawWise 강아지 입양을 고려하는 예비 반려인들이 실제 반려 생활에서 직면할
        수 있는 다양한 상황을 간접적으로 체험하고, 유기동물 입양 절차에 대한
        구체적인 정보를 제공하는 반려견 입양 전후를 위한 체험형 가이드 앱.
      </p>
    ),
    image: {
      type: "wide",
      images: [
        "/images/pawwise/pawwise_1.png",
        "/images/pawwise/pawwise_2.png",
        "/images/pawwise/pawwise_3.png",
        "/images/pawwise/pawwise_4.png",
        "/images/pawwise/pawwise_5.png",
        "/images/pawwise/pawwise_6.png",
        "/images/pawwise/pawwise_7.png",
        "/images/pawwise/pawwise_8.png",
        "/images/pawwise/pawwise_9.png",
        "/images/pawwise/pawwise_10.png",
        "/images/pawwise/pawwise_11.png",
        "/images/pawwise/pawwise_12.png",
        "/images/pawwise/pawwise_13.png",
      ],
    },
    description: [
      {
        title: "맞춤형 검색 시스템",
        description: [
          <p key="0">
            OpenAI API를 사용해 단순한 필터링을 넘어 사용자의 생활 환경과
            선호도를 고려한{" "}
            <span className="underline">맞춤형 추천 시스템</span>을 개발
          </p>,
          <p key="1">
            주거 환경, 라이프스타일, 경제적 상황 등을 종합적으로 고려하여{" "}
            <span className="underline">최적의 반려동물을 추천</span>하는 기능
          </p>,
        ],
      },
      {
        title: "가상 케어 시스템",
        description: [
          <p key="0">
            실제 반려 생활을 시뮬레이션하는 이 시스템은 Zustand의 상태 관리와
            React Query의 실시간 데이터 동기화를 활용하여 구현 예정
            <br />
            i. 심야 시간대 산책 필요성 알림
            <br />
            ii. 갑작스러운 수의사 방문 상황
            <br />
            iii. 분리불안 증상 대처 시뮬레이션
            <br />
            iv. 예상 지출 관리 및 경고
            <br />
            v. 일상적인 케어 루틴 체험
          </p>,
        ],
      },
      {
        title: "실제적인 반려 생활 체험",
        description: [
          <p key="0">
            단순한 정보 제공을 넘어, 실시간 알림과 시뮬레이션을 통해{" "}
            <span className="underline">실제 반려 생활의 리듬을 체험</span> -
            사용자들이 자신의 생활 패턴과 반려동물 돌봄이 실생활에서 얼마나
            조화를 이룰 수 있는지 실질적으로 파악
          </p>,
        ],
      },
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "React Query",
      "TailwindCSS",
      "Zustand",
      "Supabase",
      "GraphQL",
      "Jest",
      "React Testing Library",
      "Vercel",
      "Storybook",
      "pnpm",
      "OpenAI",
      "Git",
      "GitHub",
      "Figma",
    ],
    feature: [
      {
        title: "기술적 구현 전략",
        items: [
          "Vercel Analytics를 통한 성능 모니터링",
          "Sentry를 통한 에러 추적",
          "Google Analytics를 통한 사용자 행동 분석",
        ],
      },
      {
        title: "국제화 지원",
        items: [
          "i18n을 통한 다국어 지원 준비",
          "해외 보호소 연동 가능성",
          "글로벌 반려동물 입양 문화 기여",
        ],
      },
      {
        title: "AI 통합",
        items: [
          "동물 행동 패턴 분석",
          "최적 매칭 알고리즘",
          "예측 기반 케어 가이드",
        ],
      },
    ],
    team: ["프론트엔드 1명,", "디자이너 1명,", "마케터 1명"],
    link: {
      title: "Related",
      related: [],
    },
  },
};
