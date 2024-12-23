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
