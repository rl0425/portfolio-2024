/**
 * 스킬 섹션 스타일 상수
 */
const STYLES = {
  CONTAINER: "bg-white px-5",
  TITLE: "mb-6 text-[24px] font-bold",
  SECTION: "mb-6",
  CATEGORY_TITLE: "mb-4 text-[18px] font-semibold text-[#222222]",
  SKILLS_CONTAINER: "flex flex-wrap gap-2",
  SKILL_ITEM:
    "rounded-[4px] cursor-default bg-[#f5f5f5] px-4 py-2 text-[14px] font-medium text-[#444444] transition-all hover:bg-[#e0e0e0]",
} as const;

/**
 * 스킬 카테고리 및 항목
 */
const SKILLS_DATA = {
  frontend: {
    title: "Frontend",
    skills: [
      "JavaScript",
      "jQuery",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Recoil",
      "React Query",
      "Zustand",
      "TailwindCSS",
      "SCSS",
      "CSS Module",
      "Styled-Components",
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "GraphQL",
      "Supabase",
    ],
  },
  testing: {
    title: "Testing & Documentation",
    skills: ["Jest", "React Testing Library", "Storybook"],
  },
  deployment: {
    title: "Deployment & Monitoring",
    skills: ["Vercel", "Sentry", "Google Analytics"],
  },
  tools: {
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "SourceTree",
      "Zeplin",
      "Figma",
      "npm",
      "yarn",
      "pnpm",
    ],
  },
  additional: {
    title: "Additional Technologies",
    skills: ["OpenAI", "DHTMLX", "Chart.js", "Agora RTC"],
  },
} as const;

/**
 * 스킬 컴포넌트
 */
export default function Skills() {
  return (
    <div className={STYLES.CONTAINER}>
      <h2 className={STYLES.TITLE}>SKILLS.</h2>

      {Object.entries(SKILLS_DATA).map(([key, { title, skills }]) => (
        <section key={key} className={STYLES.SECTION}>
          <h3 className={STYLES.CATEGORY_TITLE}>{title}</h3>
          <div className={STYLES.SKILLS_CONTAINER}>
            {skills.map((skill) => (
              <div
                key={skill}
                className={STYLES.SKILL_ITEM}
                role="listitem"
                aria-label={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
