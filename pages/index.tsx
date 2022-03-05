import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import OpenSourceProjects from "./components/OpenSourceProjects";

const Home: NextPage = () => {
  return (
    <div id={"about"} className={"pt-8"}>
      <Head>
        <title>Lee Lazarecky</title>
        <meta name="description" content="A portfolio for Lee Lazarecky" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <AboutSection />

      <main
        className={
          "mx-auto w-full border-t-2 border-gray-200 py-8 px-4 md:w-4/5"
        }
      >
        <OpenSourceProjects />
      </main>

      <footer className={"mt-64 bg-gray-800 px-4 pt-28 pb-28 text-gray-300"}>
        <NavBar />
        <div className={"flex justify-center gap-16"}>
          <Link href={"https://github.com/druage"}>
            <a target={"_blank"} className="">
              <FontAwesomeIcon icon={faGithub} height={24} width={24} />
            </a>
          </Link>
          <Link href={"https://www.instagram.com/leelazarecky/?hl=en"}>
            <a target={"_blank"} className="">
              <FontAwesomeIcon icon={faInstagram} height={24} width={24} />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/lee-lazarecky-2a588310b/"}>
            <a target={"_blank"} className="">
              <FontAwesomeIcon icon={faLinkedin} height={24} width={24} />
            </a>
          </Link>
        </div>
        <p className="mt-12 text-center text-base text-gray-400">
          &copy; 2022 Lee Lazarecky. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
