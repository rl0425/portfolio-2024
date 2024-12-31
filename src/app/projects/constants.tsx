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
        와 Agora SD-RTN을 활용하여 실시간 화상 회의와 미디어 파일 재생 기능을
        통합한 시스템을 구축. 이를 통해 사용자의 원활한 강의 콘텐츠, 실시간 화면
        공유 및 화상 소통 서비스 개발
      </p>
    ),
    image: [
      "/images/live/live_1.png",
      "/images/live/live_2.png",
      "/images/live/live_4.png",
      "/images/live/live_5.png",
    ],
    description: [
      {
        title: "Agora Video Calling SDK",
        description: [
          <p key="0">
            <span className="underline">
              실시간 강의 및 화면 공유 기능 구현
            </span>
            으로 강사와 학생 간 원활한 소통과 협업 지원
          </p>,
          <p key="1">
            실시간 화상 회의 환경 제공을 통해 효율적인 온라인 학습 경험 제공
          </p>,
        ],
      },
      {
        title: "화면 분할 및 렌더링 성능 최적화",
        description: [
          <p key="0">
            <span className="underline">사용자 인원 별 페이지네이션</span> 기술
            도입으로 다중 화면 환경에서 렌더링 부하 최소화.
          </p>,
          <p key="1">
            사용자 가시 영역 내 화면만 렌더링하고, 비활성 화면은{" "}
            <span className="underline">
              데이터 전송을 지연 처리하여 네트워크 효율성 극대화
            </span>
          </p>,
        ],
      },
      {
        title: "다양한 시각적 UI/UX 기능 개발",
        description: [
          "그리드 및 핀 모드 지원, 모바일 친화적 UI/UX 설계로 다양한 플랫폼에서 최적의 사용자 경험 제공",
          "Tailwind CSS와 Styled-Components를 활용해 일관성 있는 디자인 시스템 구축",
        ],
      },
      {
        title: "강의 서비스와의 완벽한 연동",
        description: [
          <p key="0">
            <span className="underline">
              강의 플랫폼과 실시간 연동으로 강의 영상 및 사용자 화면 공유
            </span>{" "}
            를 통한 학습 효과 증대
          </p>,
          <p key="1">
            <span className="underline">
              영상 녹화, 라이브 채팅, 소그룹 라운지
            </span>{" "}
            등 부가 기능 구현으로 사용자 만족도 및 편의성 향상
          </p>,
        ],
      },
      {
        title: "새로운 LLM 플랫폼을 위한 로그인 시스템 구현",
        description: [
          "프론트엔드 영역을 담당하여 Next.js의 Auth 시스템을 활용한 기본 로그인 기능 구현",
          "카카오, 구글, 네이버 등 주요 소셜 로그인 기능 통합 개발",
          "백엔드 팀과 협업하여 로그인 인증 로직 설계 및 구현",
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
          "기존 강의 플랫폼 내에 라이브 기능을 단순 추가하는 방식을 넘어, 라이브를 중심으로 기존 서비스(강의)와 자연스럽게 통합된 독립적인 페이지 및 기능을 구축.",
        ],
      },
      {
        title: "라이브 예약 서비스",
        items: [
          "특정 시간대를 예약하면 라이브 채널이 자동으로 생성되는 시스템 구현. 사용자들이 간편하게 라이브 일정을 관리할 수 있도록 지원.",
        ],
      },
      {
        title: "반응형 웹 디자인 및 크로스 플랫폼 호환성",
        items: [
          "다양한 디바이스(PC, 모바일, 태블릿) 환경에 최적화된 반응형 UI/UX 설계.",
          "iOS 및 Android 플랫폼과 자연스럽게 연결되는 안정적인 웹뷰 및 브릿지 개념을 도입하여 협업성과 접근성 향상.",
        ],
      },
      {
        title: "최대 30명 사용자 지원",
        items: [
          "동시 접속자 30명까지 원활한 라이브 환경 제공. 대규모 사용자 참여 시에도 안정적인 성능 보장.",
        ],
      },
      {
        title: "라이브 세부 설정",
        items: [
          "라이브 타이틀, 설명, 공지사항 설정 기능 제공.",
          "각 사용자별 정보 확인 및 메시지 송신 기능 지원.",
          "관리자(admin)가 마이크 및 비디오 설정을 통제하여 라이브 운영 효율성 강화.",
        ],
      },
      {
        title: "화면 공유 및 비디오 공유",
        items: [
          "창 전환 및 영상 공유자의 카메라 동시 공유 가능.",
          "URL, 강의 자료(주차별 영상 포함) 및 서버에 저장된 다양한 영상 콘텐츠 공유.",
          "모든 사용자에게 동일 구간의 영상 동기화 재생 기능 제공으로 학습 몰입도 향상.",
        ],
      },
      {
        title: "그리드 및 핀 뷰 기능",
        items: [
          "사용자가 화면에 표시할 인원을 직접 조정 가능.",
          "특정 사용자를 하이라이트 뷰로 설정하여 발표자 또는 주요 참여자의 가시성을 높임.",
        ],
      },
      {
        title: "소그룹 기능 (멀티 라이브)",
        items: [
          "메인 라이브에서 소규모 그룹으로 나뉘어 별도의 라이브 세션을 생성할 수 있는 기능 지원.",
          "사용자를 자동 분배하거나 커스텀 분배로 새로운 소그룹 라이브로 이동 가능.",
          "관리자가 각 소그룹의 세션을 종료하거나 메시지를 전송하고, 멤버를 이동 및 제거할 수 있는 제어 기능 제공.",
        ],
      },
      {
        title: "설문조사 기능",
        items: [
          "주관식, 객관식, 체크리스트 형식의 설문조사 생성 및 배포.",
          "실시간 통계 및 결과 시각화를 통해 사용자 참여도와 피드백 분석 가능.",
        ],
      },
      {
        title: "실시간 채팅 시스템",
        items: [
          "기존 강의 플랫폼의 채팅 기능을 통합하여 참여자 간 소통과 협업을 실시간으로 지원.",
        ],
      },
      {
        title: "고객센터 및 Q&A 기능",
        items: [
          "라이브 중 발생할 수 있는 사용자 문의나 기술 지원을 빠르게 처리할 수 있는 고객센터 연동.",
        ],
      },
      {
        title: "관리자 조용히 입장 기능",
        items: [
          "관리자 계정으로 카메라, 마이크를 비활성화한 상태에서 은밀히 라이브에 참여할 수 있는 기능 제공.",
        ],
      },
      {
        title: "후기 작성 기능",
        items: [
          "사용자별로 후기를 작성할 수 있는 시스템 구축. 이를 통해 수업 또는 라이브에 대한 투명한 피드백과 품질 개선 도모.",
        ],
      },
      {
        title: "매니저 호출 및 사용자 호출 기능",
        items: [
          "라이브 세션 중 필요한 매니저나 다른 강의 채널의 수강자를 호출할 수 있는 기능 지원.",
        ],
      },
    ],
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
        </a>
        사의 간트차트를 활용하여 PPM에 필요한 모든 태스크 일정, 이벤트,
        프로젝트와 사용자 간의 관계를 시각적으로 표현하는 페이지를 기획 및 개발
      </p>
    ),
    image: [
      "/images/gantt/gantt6.png",
      "/images/gantt/gantt7.png",
      "/images/gantt/gantt3.png",
      "/images/gantt/gantt8.png",
      "/images/gantt/gantt4.gif",
      "/images/gantt/gantt5.gif",
      "/images/gantt/gantt1.png",
    ],
    description: [
      {
        title: "프론트엔드 및 백엔드 개발",
        description: [
          <p key="0">
            디자인, 배포를 제외한 전반적인 기획, 개발, 구현을 단독으로 수행.
          </p>,
          <p key="1">
            DHTMLX 간트 라이브러리 커스터마이징을 통해{" "}
            <span className="underline">
              태스크, 마일스톤, 일정 그래픽 차트 및 실시간 수정 서비스
            </span>{" "}
            개발
          </p>,
        ],
      },
      {
        title: "성능 최적화 및 코드 개선",
        description: [
          <p key="0">
            기존 라이브러리 기초 데모 기반 코드를 개선하여{" "}
            <span className="underline">
              API 통신 속도 300% 향상, 기능 개수 200% 증가
            </span>{" "}
            등 성능 대폭 개선.
          </p>,
          <p key="1">
            함수 모듈화를 통해 재사용성을 높이고, 다른 페이지에서도 기능을
            손쉽게 연동 가능하도록 설계.
          </p>,
        ],
      },
      {
        title: "Chart Grid 커스터마이징 및 개인별 테마 기능 추가",
        description: [
          "사용자별 테마 설정 및 차트 인터페이스 개선으로 사용자 편의성 강화.",
        ],
      },
      {
        title: "문서화 및 설계",
        description: [
          <p key="0">
            함수 기능 명세서 및 데이터베이스 테이블 설계서를 작성하여
            유지보수성과 팀 협업 효율성 증대.
          </p>,
        ],
      },
      {
        title: "결과 및 성과",
        description: [
          <p key="0">
            프로젝트 내 모든 태스크와 마일스톤을 통합적으로 관리 및 제어할 수
            있는 기능 기획/개발.
          </p>,
          <p key="1">
            기존 간트차트 페이지 대비{" "}
            <span className="underline">
              웹페이지 방문자 수(PV) 300% 증가라는 실질적 비즈니스 성과
            </span>{" "}
            달성
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
          "모든 태스크, 마일스톤, 일정을 관리할 수 있는 페이지 구현",
          "워크스페이스 내 전체 간트 차트를 통합 관리할 수 있는 기능 설계(확장 가능성 고려)",
        ],
      },
      {
        title: "다양한 뷰 제공",
        items: [
          "태스크 및 마일스톤의 리스트 뷰와 그래프 뷰를 동시에 지원하여 사용자 편의성 극대화",
          "태스크 뷰, 멤버 뷰 등 각 사용 목적에 맞춘 다양한 사용자 인터페이스 제공",
        ],
      },
      {
        title: "데이터 커스터마이징 기능",
        items: [
          "그래프 데이터(타이틀, 시작/종료 시간, 태스크 기간, 참여자 등)를 사용자가 직접 설정 및 조정할 수 있는 유연한 커스터마이징 옵션 개발",
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
        title: "일정 단위별 관리 기능",
        items: [
          "일간, 월간, 연간 단위로 프로젝트 일정을 관리할 수 있는 상세 뷰 제공",
          "드래그 및 다중 선택을 통해 태스크 일정을 대량으로 조정하는 편의 기능 개발",
        ],
      },
      {
        title: "지연 일정 관리 및 뷰",
        items: ["각 태스크의 지연 일정을 확인하고 관리할 수 있는 전용 뷰 설계"],
      },
      {
        title: "태스크 상태의 시각적 표현",
        items: [
          "태스크의 준비, 진행, 완료, 이슈, 홀드, 마일스톤 등의 상태를 명확하게 시각화하여 진행 상황 파악 용이",
        ],
      },
      {
        title: "태스크 간 연결(링크) 기능",
        items: [
          "태스크 간의 관계를 시각적으로 연결하고, 순서도 및 종속성을 표시하는 기능 개발",
          "링크된 태스크 간의 기간 및 완료도를 자동 산정하여 태스크 기간을 자동 제한하는 오토 뷰 기능 제공",
        ],
      },
      {
        title: "크리티컬 패스 기능",
        items: [
          "태스크가 유기적으로 연결된 경우, 전체 작업 흐름을 한눈에 확인할 수 있는 순서도 뷰 제공",
        ],
      },
      {
        title: "파일 출력 및 다운로드",
        items: [
          "모든 태스크, 마일스톤, 일정이 포함된 그래프 뷰를 PDF, PNG, EXCEL 형식으로 다운로드 및 출력할 수 있는 기능 구현",
        ],
      },
    ],
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://work.clovine.com" className="underline">
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
    image: [
      "/images/enterprise/enterprise_7.png",
      "/images/enterprise/enterprise_3.png",
      "/images/enterprise/enterprise_1.png",
      "/images/enterprise/enterprise_2.png",
      "/images/enterprise/enterprise_4.png",
      "/images/enterprise/enterprise_5.png",
      "/images/enterprise/enterprise_6.png",
    ],
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
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://work.clovine.com" className="underline">
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
        완료된 프로젝트의 다양한 가치를 여러 지표를 통해 평가하는 기능을
        사용자들에게 제공하는 서비스 페이지 기획/개발
      </p>
    ),
    image: [
      "/images/evaluation/evaluation_1.png",
      "/images/evaluation/evaluation_2.gif",
      "/images/evaluation/evaluation_3.png",
      "/images/evaluation/evaluation_4.png",
    ],
    description: [
      {
        title: "디자인과 배포를 제외한 전반적인 기획 및 개발, 구현 작업 수행",
        description: [
          <p key="0">
            프로젝트의 핵심 기능을 직접 설계하고 구현하며 전체적인 개발 프로세스
            주도
          </p>,
        ],
      },
      {
        title:
          "Chart.js를 활용한 역상승 그래프 및 태스크·마일스톤 테이블 서비스 개발",
        description: [
          <p key="0">
            데이터를 시각적으로 표현해 사용자가 프로젝트 진행 상황과 결과를
            직관적으로 이해할 수 있도록 지원
          </p>,
        ],
      },
      {
        title: "다양한 산업군의 프로젝트 산출물 계산 및 평가 기능 제공",
        description: [
          "카테고리별 프로젝트 평가 지표를 제공함으로써 폭넓은 고객층 확보에 기여",
        ],
      },
      {
        title: "프로젝트 가치를 다각적으로 평가할 수 있는 지표 기반 기능 개발",
        description: [
          <p key="0">
            사용자들에게 프로젝트 성과를 수치화하고 다양한 시각적 데이터를
            제공하여 자사 PPM 시스템의 활용성과 기능성을 증대
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
            활용도를 높임
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
          "프로젝트의 성과와 진행 상황을 다각도로 평가할 수 있는 종합 평가 시스템 구축",
          "산업 표준 기반의 객관적 평가 지표를 제공하여 다양한 산업군의 고객층 확보 달성",
          "프로젝트 특성에 맞는 맞춤형 평가 기준 설정 및 관리 기능 구현",
        ],
      },
      {
        title: "성과 측정 및 시각화",
        items: [
          <p key="0">
            <ul>
              상태별 태스크 분석 및 대시보드
              <li>
                진행 상태별 태스크 현황을 실시간으로 모니터링하여 프로젝트
                건강도 추적
              </li>
              <li>
                지연 및 초과 일정 현황을 퍼센트 차트로 시각화하여 직관적인 진행
                상황 파악
              </li>
              <li>
                계획 대비 실제 완료 일정을 번다운 차트로 구현하여 효율적인 일정
                관리 지원
              </li>
            </ul>
          </p>,
          <p key="1">
            <ul>
              멤버 평가 시스템
              <li>
                프로젝트 성격에 따른 맞춤형 가중치 설정으로 공정한 평가 기준
                제공
              </li>
              <li>
                멤버별 태스크 할당 현황과 성과를 추적하여 업무 효율성 분석
              </li>
              <li>일정 준수 현황 분석을 통한 객관적인 성과 평가 시스템 구현</li>
            </ul>
          </p>,
        ],
      },
      {
        title: "상호작용 및 피드백",
        items: [
          <p key="0">
            <ul>
              카테고리별 특성을 고려한 댓글 시스템 구현으로 효율적인
              커뮤니케이션 지원
              <li>
                Goals: 프로젝트 목표 달성도에 대한 실시간 평가 및 피드백 제공
              </li>
              <li>Task: 개별 태스크 진행상황 공유 및 이슈 논의 가능</li>
              <li>Task Chart: 전체 진척도 분석을 통한 프로젝트 방향성 점검</li>
              <li>Member Evaluation: 팀원 간 객관적 평가 시스템 제공</li>
            </ul>
          </p>,
        ],
      },
      {
        title: "통합 대시보드",
        items: [
          <p key="0">
            <ul>
              프로젝트 포트폴리오 뷰 제공으로 전체 프로젝트 현황 통합 관리
              <li>참여 중인 모든 프로젝트의 실시간 진행 상황 모니터링</li>
              <li>프로젝트별 정량적 성과 점수 산출 및 추적</li>
              <li>종합 포인트 시스템을 통한 객관적 성과 관리 체계 구축</li>
            </ul>
          </p>,
          <p key="1">
            <ul>
              데이터 기반의 의사결정 지원 시스템
              <li>실시간 현황 분석으로 잠재적 리스크 조기 발견</li>
              <li>주요 성과 지표 모니터링 및 개선점 도출</li>
              <li>프로젝트 진행 상황에 따른 즉각적인 대응 체계 구축</li>
            </ul>
          </p>,
        ],
      },
    ],
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://work.clovine.com" className="underline">
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
    image: [
      "/images/summary/summary_2.gif",
      "/images/summary/summary_1.png",
      "/images/summary/summary_3.png",
      "/images/summary/summary_4.png",
    ],
    description: [
      {
        title: "디자인과 배포를 제외한 전반적인 기획 및 개발, 구현 작업 수행",
        description: [
          <p key="0">
            프로젝트의 핵심 기능을 직접 설계하고 구현하며 전체적인 개발 프로세스
            주도
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
            하여 프로젝트 매니저들이 효율적으로 프로젝트를 설정할 수 있도록 지원
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
          "실제 사용자들의 피드백을 반영한 로그 분류 알고리즘을 구현하여 사용자들이 필요로 하는 정보에 빠르게 접근할 수 있도록 지원",
        ],
      },
      {
        title: "성능 최적화 및 코드 품질 개선",
        description: [
          <p key="0">
            중복되는 로그 데이터를 효과적으로 제거하는 로직을 구현하여{" "}
            <span className="underline">
              전체적인 데이터 처리 효율성을 30% 이상 향상시킴
            </span>
          </p>,
          "복잡한 로그 처리 로직을 모듈화하여 시스템의 전체적인 복잡도를 감소시키고 코드의 가독성을 향상시킴",
          "복잡한 폼 상태를 효과적으로 관리하기 위한 커스텀 훅을 개발하여 코드의 재사용성을 높이고 상태 관리의 일관성을 확보",
        ],
      },
      {
        title: "프로젝트 성과",
        description: [
          <p key="0">
            새로운 프로젝트 생성 시{" "}
            <span className="underline">
              전체적인 데이터 처리 효율성을 30% 이상 향상시킴
            </span>{" "}
            달성
          </p>,
          <p key="1">
            전체 시스템에 대한{" "}
            <span className="underline">
              사용자 만족도 조사에서 4.2/5.0의 높은 점수
            </span>
            를 획득하여 프로젝트의 성공적인 안착을 입증
          </p>,
        ],
      },
      {
        title: "협업 및 커뮤니케이션",
        description: [
          <p key="0">
            마케팅, TE 팀과 협업하여 사용자 피드백 기반의 활동 로그 설계
          </p>,
          <p key="1">
            다양한 팀원들과의 협력을 통해 효율적인 프로젝트 기획 및 협업 기술을
            향상시킴
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
          "프로젝트 초기 설정(규칙, 목표 등)을 입력할 수 있는 기능 기획 및 구현",
          "입력 필드 수십 개에서 발생하는 이벤트를 효율적으로 처리하도록 이벤트 관리 구조 설계",
          "사용자 경험(UX)을 최적화하기 위해 반응형 웹 디자인을 적용하여 테블릿 및 모바일 환경에서도 원활한 사용성 보장",
          "드래그 앤 드롭 기능 구현 - 사용자 입력 처리 및 인터페이스 개발의 주요 기술적 과제 해결",
        ],
      },
      {
        title: "활동 로그 페이지 개발",
        items: [
          "사용자 활동 로그를 보여주는 인터페이스를 구현하여 사용자들이 필요한 정보를 효율적으로 확인할 수 있도록 구성",
          "마케팅 및 TE 팀과 협력하여 사용자 피드백을 반영, 필요 없는 로그를 제거하고 유용한 정보만 선별하여 제공",
          "수십 개의 로그 유형에서 발생한 중복 코드를 모듈화하여 재사용성과 유지보수성을 높임",
          "프로젝트 및 태스크 뷰 등 각 사용 목적에 맞춘 사용자 인터페이스 및 링크이동 기능 제공",
        ],
      },
      {
        title: "코드 품질 개선 및 문서화",
        items: [
          "함수화 및 모듈화를 통해 코드 복잡성 감소 및 가독성 향상",
          "DB 테이블 설계 및 함수 명세서 작성으로 프로젝트 관리와 확장성 강화",
        ],
      },
    ],
    link: {
      title: "Related",
      related: [
        <a key="0" href="https://work.clovine.com" className="underline">
          Clovine
        </a>,
      ],
    },
  },
};
