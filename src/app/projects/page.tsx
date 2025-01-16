"use client";

import React, { useCallback, useState, useEffect, Suspense } from "react";
import { projects } from "./constants";
import { useSearchParams, useRouter } from "next/navigation";
import { Icon } from "@/components/icon/Icon";
import Image from "next/image";
import { motion } from "framer-motion";

const MORE_BUTTON_STYLE =
  "text-[12px] md:text-[14px] font-medium text-blue-500 mt-2 cursor-pointer hover:text-blue-600";

const MAX_VISIBLE_ITEMS = 3;

const STYLES = {
  imageContainer: "relative my-4 mb-1 md:px-5 md:h-[340px] w-full",
  imageWrapper: "flex gap-4 relative",
  imageItem:
    "border-[#rgb(34 34 34 / 17%)] relative flex-none border-solid first:ml-0",
  rightArrowButton:
    "hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 bg-[#000000a3] pr-3 rounded-full cursor-pointer hover:bg-black/50 transition-colors",
  leftArrowButton:
    "hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 bg-[#000000a3] pl-3 rounded-full cursor-pointer hover:bg-black/50 transition-colors",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsExpanded(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handlePrevClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.image.images.length - 1 : prev - 1,
    );
  }, [project.image.images.length]);

  const handleNextSlide = useCallback(() => {
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

  const handleImageClick = useCallback(() => {
    if (!isMobile) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, [isMobile]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  }, []);

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
    <div className="mb-10 flex flex-col gap-3">
      {/* 상단 고정 헤더 */}
      <div className="fixed left-0 top-0 z-40 flex w-full justify-center bg-white/80 backdrop-blur-sm">
        <div className="w-full md:max-w-[600px]">
          <div
            className="cursor-pointer px-5 py-4 transition-colors hover:bg-gray-100/50"
            onClick={handlePrevClick}
            role="button"
            aria-label="이전 페이지로 이동"
          >
            <Icon name="prev" className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-full md:max-w-[600px]">
          <div className="mt-[60px]">
            <h3 className="px-5 text-[16px] font-bold md:text-[18px]">
              {project.title}
            </h3>
            <p className="px-5 text-[14px] font-medium text-gray-500 md:text-[16px]">
              {project.date}
            </p>
            <div className="px-5 pt-2 text-[12px] leading-5 md:text-[14px]">
              {project.mainDescription}
            </div>
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
              <div className="relative hidden h-[340px] overflow-hidden md:block md:h-[340px]">
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
                  className={`${STYLES.leftArrowButton} left-4`}
                  onClick={handlePrevSlide}
                  aria-label="이전 이미지"
                >
                  <Icon name="imgPrev" className="h-6 w-6 text-white" />
                </button>
                <button
                  className={`${STYLES.rightArrowButton} right-4`}
                  onClick={handleNextSlide}
                  aria-label="다음 이미지"
                >
                  <Icon name="imgNext" className="h-6 w-6 text-white" />
                </button>

                <div className={STYLES.pageIndicator}>
                  {currentIndex + 1} / {project.image.images.length}
                </div>

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

            {!isMobile && (
              <h3 className="ml-5 mt-5 text-[16px] font-bold text-[#222222] underline md:text-[18px]">
                Description
              </h3>
            )}

            {project.description.map((desc, index) => (
              <div key={index} className="px-5 pt-3">
                <h4 className="w-fit px-[2px] text-[12px] font-extrabold text-[#2229] md:text-[14px]">
                  {desc.title}
                </h4>
                <div className="ml-3 mt-2 md:flex md:flex-col md:gap-2">
                  {(isExpanded
                    ? desc.description
                    : desc.description.slice(0, MAX_VISIBLE_ITEMS)
                  ).map((item, idx) => (
                    <div
                      key={idx}
                      className="align-center flex items-start gap-2"
                    >
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#2229]" />
                      <div className="text-[12px] font-normal leading-6 md:text-[14px] md:leading-6">
                        {item}
                      </div>
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
              <h3 className="mb-4 text-[16px] font-bold text-[#222222] underline md:text-[18px]">
                Tech Stack
              </h3>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="cursor-default rounded-[4px] bg-[#f5f5f5] px-4 py-2 text-[14px] font-medium text-[#444444] transition-all hover:bg-[#e0e0e0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project?.feature?.length > 0 && (
              <div className="mt-10 px-5">
                <h3 className="mb-4 text-[16px] font-bold text-[#222222] underline md:text-[18px]">
                  Features And Page{" "}
                </h3>
                {project.feature.map((feature, index) => (
                  <div key={index} className="mb-2 mt-1 flex flex-col">
                    <h4 className="w-fit px-[2px] text-[12px] font-extrabold text-[#2229] md:text-[14px]">
                      {feature.title}
                    </h4>
                    <div className="mb-2 ml-3 mt-1">
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
            )}

            <div className="mt-5 px-5">
              <h3 className="text-[16px] font-bold text-[#222222] underline md:text-[18px]">
                Team
              </h3>
              <div className="mt-1 flex flex-wrap gap-1">
                {project.team.map((item, index) => (
                  <span className="text-[12px] md:text-[14px]" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project?.link?.related.length > 0 && (
              <div className="mt-6 px-5">
                <h3 className="text-[16px] font-bold text-[#222222] underline md:text-[18px]">
                  Related
                </h3>
                <div className="mt-1 flex flex-wrap gap-1">
                  {project.link.related.map((item, index) => (
                    <span className="text-[12px] md:text-[14px]" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
              className={`${STYLES.leftArrowButton} left-4`}
              onClick={handlePrevSlide}
              aria-label="이전 이미지"
            >
              <Icon name="prev" className="h-6 w-6 text-white" />
            </button>
            <button
              className={`${STYLES.rightArrowButton} right-4`}
              onClick={handleNextSlide}
              aria-label="다음 이미지"
            >
              <Icon name="imgNext" className="h-6 w-6 text-white" />
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

const ProjectContent = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("projectName");

  return (
    <div className="flex max-w-full items-center justify-center">
      <ProjectCard projectName={projectName} />
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectContent />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
