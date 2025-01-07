export default function Contact() {
  return (
    <div className="bg-white px-5">
      <div className="mx-auto bg-white">
        <main className="h-full w-full pt-8">
          <section className="mb-1">
            <h2 className="mb-1 text-[24px] font-semibold">CONTACT.</h2>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-3 text-[14px] leading-relaxed md:justify-normal">
                <p className="w-[140px] text-[14px] font-semibold md:text-[16px]">
                  EMAIL.
                </p>
                <a
                  href="mailto:qkrrlcks45@daum.net"
                  className="font-normal text-[#222222ba] underline md:text-[16px]"
                >
                  qkrrlcks45@daum.net
                </a>
              </div>
              <div className="flex items-center justify-between gap-3 text-[14px] leading-relaxed md:justify-normal">
                <p className="w-[140px] text-[14px] font-semibold md:text-[16px]">
                  PHONE.
                </p>
                <p className="md:text-[16px]">010-3099-4181</p>
              </div>
              <div className="flex items-center justify-between gap-3 text-[14px] leading-relaxed md:justify-normal">
                <p className="w-[140px] text-[14px] font-semibold md:text-[16px]">
                  EDUCATION.
                </p>
                <p className="text-right text-[#222222ba] md:text-[16px]">
                  Yeungnam university - Computer Science
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
