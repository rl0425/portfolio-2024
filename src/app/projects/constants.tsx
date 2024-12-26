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
      "/images/live/live_1.png",
      "/images/live/live_2.png",
      "/images/live/live_4.png",
      "/images/live/live_5.png",
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
};
