import type { NextPage } from "next";
import AboutSection from "./sections/AboutSection";
import OpenSourceProjectsSection from "./sections/OpenSourceProjectsSection";
import FooterSection from "./sections/FooterSection";
import PageHead from "./sections/PageHead";
import SkillsSection from "./sections/SkillsSection";

const Home: NextPage = () => {
  return (
    <div id={"about"}>
      <PageHead />

      <AboutSection />

      <main className={"w-full border-t-2 border-gray-100"}>
        <SkillsSection />

        <OpenSourceProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Home;
