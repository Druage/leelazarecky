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
                <link rel="icon" href="/public/favicon.png"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin={"true"}
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap"
                    rel="stylesheet"
                />
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
