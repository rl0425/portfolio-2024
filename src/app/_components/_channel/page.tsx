export default function Channel() {
  return (
    <div className="bg-white px-5 pt-2 md:pt-6">
      <div className="mx-auto bg-white">
        <main className="h-full w-full">
          <section className="mb-6">
            <h2 className="mb-1 text-[24px] font-bold">CHANNEL.</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3 text-[14px] leading-relaxed md:justify-normal">
                <p className="w-[140px] text-[14px] font-semibold md:text-[16px]">
                  BLOG.
                </p>
                <a
                  href="https://velog.io/@rl0425"
                  className="font-normal text-[#222222ba] underline md:text-[16px]"
                >
                  https://velog.io/@rl0425
                </a>
              </div>
              <div className="flex items-center justify-between gap-3 text-[14px] leading-relaxed md:justify-normal">
                <p className="w-[140px] text-[14px] font-semibold md:text-[16px]">
                  GITHUB.
                </p>
                <a
                  href="https://github.com/rl0425"
                  className="font-normal text-[#222222ba] underline md:text-[16px]"
                >
                  https://github.com/rl0425
                </a>
              </div>
              <div className="flex items-center justify-between gap-3 text-[14px] leading-relaxed md:justify-normal">
                <p className="w-[140px] text-[14px] font-semibold md:text-[16px]">
                  RESUME.
                </p>
                <a
                  href="http://portfolio-gichan.s3-website.ap-northeast-2.amazonaws.com/"
                  className="font-normal text-[#222222ba] underline md:text-[16px]"
                >
                  이력서
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
