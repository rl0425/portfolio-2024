export default function Channel() {
  return (
    <div className="bg-white px-5">
      <div className="mx-auto max-w-[430px] bg-white">
        <main className="h-full w-full pt-4">
          <section className="mb-6">
            <h2 className="mb-4 text-[24px] font-bold">CHANNEL.</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col text-[14px] leading-relaxed">
                <p className="text-[16px] font-650">BLOG.</p>
                <a
                  href="https://velog.io/@rl0425"
                  className="font-450 underline"
                >
                  https://velog.io/@rl0425
                </a>
              </div>
              <div className="flex flex-col text-[14px] leading-relaxed">
                <p className="text-[16px] font-650">GITHUB.</p>
                <a
                  href="https://github.com/rl0425"
                  className="font-450 underline"
                >
                  https://github.com/rl0425
                </a>
              </div>
              <div className="flex flex-col text-[14px] leading-relaxed">
                <p className="text-[16px] font-650">RESUME.</p>
                <a
                  href="http://portfolio-gichan.s3-website.ap-northeast-2.amazonaws.com/"
                  className="font-450 underline"
                >
                  http://portfolio-gichan.s3-website.ap-northeast-2.amazonaws.com/
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
