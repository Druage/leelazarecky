import type {NextPage} from "next";
import AboutSection from "../ui/sections/AboutSection";
import OpenSourceProjectsSection from "../ui/sections/OpenSourceProjectsSection";
import FooterSection from "../ui/sections/FooterSection";
import SkillsSection from "../ui/sections/SkillsSection";
import Head from "next/head";
import OverviewSection from "../ui/sections/OverviewSection";

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
                {/*<SkillsSection/>*/}

                <OverviewSection/>

                <OpenSourceProjectsSection/>

            </main>

            <FooterSection/>
        </div>
    );
};

export default Home;
