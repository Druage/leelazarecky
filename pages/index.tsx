import type {NextPage} from "next";
import AboutSection from "./components/sections/AboutSection";
import OpenSourceProjectsSection from "./components/sections/OpenSourceProjectsSection";
import FooterSection from "./components/sections/FooterSection";
import SkillsSection from "./components/sections/SkillsSection";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div id={"about"}>

            <Head>
                <title>Lee Lazarecky</title>
                <meta name="description" content="A portfolio for Lee Lazarecky"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>

            <AboutSection/>

            <main className={"w-full border-t-2 border-gray-100"}>
                <SkillsSection/>

                <OpenSourceProjectsSection/>
            </main>

            <FooterSection/>
        </div>
    );
};

export default Home;
