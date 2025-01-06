"use client";

import React, { useCallback, useState, useEffect } from "react";
import { projects } from "./constants";
import { useSearchParams, useRouter } from "next/navigation";
import { Icon } from "@/components/icon/Icon";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * 더보기 버튼 스타일 상수
 */
const MORE_BUTTON_STYLE =
  "text-[12px] md:text-[14px] font-medium text-blue-500 mt-2 cursor-pointer hover:text-blue-600";

/**
 * 설명 텍스트 최대 표시 줄 수
 */
const MAX_VISIBLE_ITEMS = 3;

/**
 * 스타일 상수
 */
const STYLES = {
  imageContainer: "relative my-4 mb-1 w-full",
  imageWrapper: "flex gap-4 relative",
  imageItem:
    "border-[#rgb(34 34 34 / 17%)] relative flex-none border-solid first:ml-0",
  arrowButton:
    "hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 bg-black/30 rounded-full cursor-pointer hover:bg-black/50 transition-colors",
  mobileScroll: "scrollbar-hide overflow-x-auto md:overflow-x-hidden",
  pageIndicator:
    "absolute bottom-4 right-4 bg-black/30 px-3 py-1 rounded text-white text-sm",
  modal: "fixed inset-0 z-50 flex items-center justify-center bg-black/90",
  modalContent: "relative w-full h-full flex items-center justify-center",
  modalClose:
    "absolute top-4 right-4 text-white cursor-pointer z-10 p-2 hover:bg-white/10 rounded-full",
} as const;

const ProjectCard: React.FC<{ projectName: string | null }> = ({
  projectName,
}) => {
  const router = useRouter();
  const project = projects[projectName as string];
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // 초기 화면 크기 확인
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsExpanded(window.innerWidth >= 768);
    };

    // 초기 실행
    checkScreenSize();

    // 리사이즈 이벤트 리스너
    window.addEventListener("resize", checkScreenSize);

    // 클린업
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handlePrevClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setSlideDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? project.image.images.length - 1 : prev - 1,
    );
  }, [project.image.images.length]);

  const handleNextSlide = useCallback(() => {
    setSlideDirection("right");
    setCurrentIndex((prev) =>
      prev === project.image.images.length - 1 ? 0 : prev + 1,
    );
  }, [project.image.images.length]);

  // 키보드 네비게이션 추가
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevSlide();
      if (e.key === "ArrowRight") handleNextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevSlide, handleNextSlide, isMobile]);

  // 모달 열기
  const handleImageClick = useCallback(() => {
    if (!isMobile) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; // 배경 스크롤 방지
    }
  }, [isMobile]);

  // 모달 닫기
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // 배경 스크롤 복구
  }, []);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isModalOpen, handleCloseModal]);

  return (
    <div className="mb-10 flex flex-col gap-3 md:max-w-[1000px]">
      <div className="flex items-center justify-between">
        <div
          className="cursor-pointer px-5 pb-3 pt-5"
          onClick={handlePrevClick}
          role="button"
          aria-label="이전 페이지로 이동"
        >
          <Icon name="prev" />
        </div>
      </div>
      <div>
        <h3 className="px-5 text-[16px] font-bold">{project.title}</h3>
        <p className="px-5 text-[14px] font-medium text-gray-500">
          {project.date}
        </p>
        <p className="px-5 pt-2 text-[12px] leading-5 md:text-[14px]">
          {project.mainDescription}
        </p>
        <div></div>
        <div className={STYLES.imageContainer}>
          {/* 모바일 뷰 */}
          <div className={`${STYLES.mobileScroll} md:hidden`}>
            <div className="flex gap-4">
              {project.image.images.map((img, index) => (
                <div
                  key={index}
                  className={STYLES.imageItem}
                  style={{
                    aspectRatio:
                      project.image.type === "narrow" ? "16/9" : "9/20",
                    width: project.image.type === "narrow" ? "88%" : "50%",
                  }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* PC 뷰 */}
          <div className="relative hidden h-[500px] overflow-hidden md:block">
            <motion.div
              className="flex h-full cursor-pointer"
              animate={{ x: `${-100 * currentIndex}%` }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {project.image.images.map((img, index) => (
                <div
                  key={index}
                  className="h-full w-full flex-shrink-0"
                  onClick={handleImageClick}
                  role="button"
                  aria-label="이미지 전체화면으로 보기"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={img}
                      alt={`${project.title} Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="80vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* 네비게이션 화살표 */}
            <button
              className={`${STYLES.arrowButton} left-4`}
              onClick={handlePrevSlide}
              aria-label="이전 이미지"
            >
              <Icon name="prev" className="h-6 w-6 text-white" />
            </button>
            <button
              className={`${STYLES.arrowButton} right-4`}
              onClick={handleNextSlide}
              aria-label="다음 이미지"
            >
              <Icon name="next" className="h-6 w-6 text-white" />
            </button>

            {/* 페이지 인디케이터 */}
            <div className={STYLES.pageIndicator}>
              {currentIndex + 1} / {project.image.images.length}
            </div>

            {/* 페이지네이션 닷 */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {project.image.images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`${index + 1}번 이미지로 이동`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <h3 className="px-5 text-[20px] font-bold text-[#222222]">
          Description
        </h3> */}

        {project.description.map((desc, index) => (
          <div key={index} className="px-5 pt-3">
            <h4 className="w-fit px-[2px] text-[12px] font-extrabold text-[#2229] md:text-[14px]">
              {desc.title}
            </h4>
            <div className="ml-3 mt-2">
              {(isExpanded
                ? desc.description
                : desc.description.slice(0, MAX_VISIBLE_ITEMS)
              ).map((item, idx) => (
                <div key={idx} className="align-center flex items-start gap-2">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#2229]" />
                  <p className="text-[12px] font-normal leading-6 md:text-[14px]">
                    {item}
                  </p>
                </div>
              ))}
              {isMobile && desc.description.length > MAX_VISIBLE_ITEMS && (
                <button
                  onClick={handleToggleExpand}
                  className={MORE_BUTTON_STYLE}
                >
                  {isExpanded ? "CLOSE" : "MORE"}
                </button>
              )}
            </div>
          </div>
        ))}
        <div className="mt-8 px-5">
          <h3 className="text-[16px] font-bold text-[#222222]">Tech Stack</h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-[4px] border border-solid border-[#2222224f] bg-[#434040] px-[8px] py-1 text-[12px] font-semibold text-[#ffffff] md:text-[14px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 px-5">
          <h3 className="mb-4 text-[16px] font-bold text-[#222222]">
            Features And Page{" "}
          </h3>
          {project.feature.map((feature, index) => (
            <div key={index} className="mb-2 mt-1 flex flex-col">
              <h4 className="w-fit px-[2px] text-[12px] font-extrabold text-[#2229] md:text-[14px]">
                {feature.title}
              </h4>
              <div className="ml-3 mt-1">
                {feature.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="align-center flex items-start gap-2"
                  >
                    <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#2229]" />
                    <p className="text-[12px] font-normal leading-[25px] md:text-[14px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 px-5">
          <h3 className="text-[14px] font-bold text-[#222222]">Team</h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.team.map((item, index) => (
              <span className="text-[12px] md:text-[14px]" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 px-5">
          <h3 className="text-[14px] font-bold text-[#222222]">
            {project.link.title}
          </h3>
          <div className="mt-1 flex flex-wrap gap-1">
            {project.link.related.map((item, index) => (
              <span className="text-[12px] md:text-[14px]" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 전체화면 모달 */}
      {isModalOpen && (
        <div className={STYLES.modal} onClick={handleCloseModal}>
          <button
            className={STYLES.modalClose}
            onClick={handleCloseModal}
            aria-label="전체화면 닫기"
          >
            <Icon name="close" className="h-6 w-6 text-white" />
          </button>

          <div
            className={STYLES.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="flex h-full w-full"
              animate={{ x: `${-100 * currentIndex}%` }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {project.image.images.map((img, index) => (
                <div key={index} className="h-full w-full flex-shrink-0 p-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={img}
                      alt={`${project.title} Image ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* 모달 내 네비게이션 화살표 */}
            <button
              className={`${STYLES.arrowButton} left-4`}
              onClick={handlePrevSlide}
              aria-label="이전 이미지"
            >
              <Icon name="prev" className="h-6 w-6 text-white" />
            </button>
            <button
              className={`${STYLES.arrowButton} right-4`}
              onClick={handleNextSlide}
              aria-label="다음 이미지"
            >
              <Icon name="next" className="h-6 w-6 text-white" />
            </button>

            {/* 모달 내 페이지 인디케이터 */}
            <div className={STYLES.pageIndicator}>
              {currentIndex + 1} / {project.image.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("projectName");

  return (
    <div>
      <div className="flex max-w-full items-center justify-center">
        <ProjectCard projectName={projectName} />
      </div>
    </div>
  );
};

export default ProjectsPage;
