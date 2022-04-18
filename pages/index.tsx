import type { NextPage } from "next";
import AboutSection from "./components/sections/AboutSection";
import OpenSourceProjectsSection from "./components/sections/OpenSourceProjectsSection";
import FooterSection from "./components/sections/FooterSection";
import SkillsSection from "./components/sections/SkillsSection";

const Home: NextPage = () => {
  return (
    <div id={"about"}>

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
