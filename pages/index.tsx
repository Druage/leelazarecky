import type {NextPage} from "next";
import AboutSection from "../ui/sections/AboutSection";
import OpenSourceProjectsSection from "../ui/sections/OpenSourceProjectsSection";
import FooterSection from "../ui/sections/FooterSection";
import SkillsSection from "../ui/sections/SkillsSection";
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

            <main className={"w-full border-gray-100"}>
                <SkillsSection/>

                <OpenSourceProjectsSection/>
            </main>

            <FooterSection/>
        </div>
    );
};

export default Home;
