import type { NextPage } from "next";
import AboutSection from "./sections/AboutSection";
import OpenSourceProjectsSection from "./sections/OpenSourceProjectsSection";
import FooterSection from "./sections/FooterSection";
import PageHead from "./sections/PageHead";

const Home: NextPage = () => {
  return (
    <div id={"about"} className={"pt-8"}>
      <PageHead />

      <AboutSection />

      <main className={"mt-8 w-full border-t-2 border-gray-100"}>
        <OpenSourceProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Home;
