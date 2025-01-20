import Introduce from "./_components/_introduce/page";
import WorkExperience from "./_components/_work-experience/page";
import MainProject from "./_components/_main-project/page";
import SideProject from "./_components/_side-project/page";
import Contact from "./_components/_contact/page";
import Channel from "./_components/_channel/page";
import Skills from "./_components/_skills/page";
import Title from "./_components/_title/title";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto min-h-screen max-w-[430px] bg-white md:max-w-[710px]">
        <main className="h-full w-full">
          <Title />
          <Introduce />
          <WorkExperience />
          <Skills />
          <MainProject />
          <SideProject />
          <Contact />
          <Channel />
        </main>
      </div>
    </div>
  );
}
