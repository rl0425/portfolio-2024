import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Live Service",
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
      "/images/projects/live-service/1.png",
      "/images/projects/live-service/2.png",
    ],
    description: [
      {
        title: (
          <span>
            Agora Video SDK와 Agora SD-RTN을 활용하여 실시간 화상 회의...
          </span>
        ),
        description: [
          "실시간 강의 및 화면 공유 기능 구현으로 강사와 학생 간 원활한 소통과 협업 지원",
          "실시간 화상 회의 환경 제공을 통해 효율적인 온라인 학습 경험 제공",
        ],
      },
      {
        title: "Agora Video SDK와 Agora SD-RTN을 활용하여 실시간 화상 회의...",
        description: [
          "실시간 강의 및 화면 공유 기능 구현으로 강사와 학생 간 원활한 소통과 협업 지원",
          "실시간 화상 회의 환경 제공을 통해 효율적인 온라인 학습 경험 제공",
        ],
      },
      {
        title: "Agora Video SDK와 Agora SD-RTN을 활용하여 실시간 화상 회의...",
        description: [
          "실시간 강의 및 화면 공유 기능 구현으로 강사와 학생 간 원활한 소통과 협업 지원",
          "실시간 화상 회의 환경 제공을 통해 효율적인 온라인 학습 경험 제공",
        ],
      },
      {
        title: "Agora Video SDK와 Agora SD-RTN을 활용하여 실시간 화상 회의...",
        description: [
          "실시간 강의 및 화면 공유 기능 구현으로 강사와 학생 간 원활한 소통과 협업 지원",
          "실시간 화상 회의 환경 제공을 통해 효율적인 온라인 학습 경험 제공",
        ],
      },
      {
        title: "Agora Video SDK와 Agora SD-RTN을 활용하여 실시간 화상 회의...",
        description: [
          "실시간 강의 및 화면 공유 기능 구현으로 강사와 학생 간 원활한 소통과 협업 지원",
          "실시간 화상 회의 환경 제공을 통해 효율적인 온라인 학습 경험 제공",
        ],
      },
    ],
    techStack: ["React", "Tailwind CSS", "Next.js"],
    link: {
      detail: "",
      related: "",
    },
  },
];
