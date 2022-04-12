import type { NextPage } from "next";
import AboutSection from "./components/sections/AboutSection";
import OpenSourceProjectsSection from "./components/sections/OpenSourceProjectsSection";
import FooterSection from "./components/sections/FooterSection";
import PageHead from "./components/sections/PageHead";

const Home: NextPage = () => {
  return (
    <div id={"about"} className={"pt-8"}>
      <PageHead />

      <AboutSection />

      <main
        className={"mt-8 w-full border-t-2 border-gray-200 bg-black text-white"}
      >
        <OpenSourceProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Home;
