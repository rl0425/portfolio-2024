export default function WorkExperience() {
  return (
    <div className="bg-white px-5">
      <div className="mx-auto max-w-[430px] bg-white">
        <main className="h-full w-full pt-6">
          <section className="mb-6">
            <h2 className="mb-4 text-[24px] font-bold">WORK EXPERIENCE.</h2>

            <div className="font-450 flex flex-col gap-4 text-[14px] leading-relaxed">
              <div>
                <p className="flex items-center gap-2">
                  <span className="font-650">(주)헤븐트리</span>
                  <span className="text-[12px] font-normal text-[#777676]">
                    2021년 7월 ~ 2022년 12월
                  </span>
                </p>
                <p className="font-medium">
                  프로젝트 관리 솔루션에서 포트폴리오까지 통합적인 관리를 할 수
                  있는 프로그램 클로바인(Clovine)을 개발하는 IT 솔루션 기업
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <span className="font-650">(주)클래스유</span>
                  <span className="text-[12px] font-normal text-[#777676]">
                    2023년 8월 ~ 2024년 11월
                  </span>
                </p>
                <p className="font-medium">
                  강의별 커뮤니티 서비스가 있는 커뮤니티형 온라인 강의 플랫폼을
                  개발 및 지원하는 IT 솔루션 기업
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
