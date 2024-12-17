export default function MainProject() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[430px] bg-white">
        <div className="h-full w-full pt-6">
          <section className="mb-2 px-5">
            <h2 className="mb-4 text-[24px] font-bold">MAIN PROJECT.</h2>
          </section>
          <div className="flex overflow-x-auto bg-white pl-5">
            <div className="grid h-[360px] min-w-[590px] grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-[4px] bg-gray-300"
                >
                  <p className="text-lg font-semibold">Project {index + 1}</p>
                </div>
              ))}
            </div>
            <div className="min-w-[16px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
