import type { NextPage } from "next";
import AboutSection from "./sections/AboutSection";
import OpenSourceProjectsSection from "./sections/OpenSourceProjectsSection";
import FooterSection from "./sections/FooterSection";
import PageHead from "./sections/PageHead";

const Home: NextPage = () => {
  return (
    <div id={"about"}>
      <PageHead />

      <AboutSection />

      <main className={"w-full border-t-2 border-gray-100"}>
        <OpenSourceProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Home;
