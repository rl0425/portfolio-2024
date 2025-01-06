export default function Contact() {
  return (
    <div className="bg-white px-5">
      <div className="mx-auto bg-white">
        <main className="h-full w-full pt-12">
          <section className="mb-6">
            <h2 className="mb-4 text-[24px] font-bold">CONTACT.</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col text-[14px] leading-relaxed">
                <p className="text-[16px] font-650">EMAIL.</p>
                <a
                  href="mailto:qkrrlcks45@daum.net"
                  className="font-light underline"
                >
                  qkrrlcks45@daum.net
                </a>
              </div>
              <div className="flex flex-col text-[14px] leading-relaxed">
                <p className="text-[16px] font-650">PHONE.</p>
                <p className="font-medium">010-3099-4181</p>
              </div>
              <div className="flex flex-col text-[14px] leading-relaxed">
                <p className="text-[16px] font-650">EDUCATION.</p>
                <p className="font-medium">
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
