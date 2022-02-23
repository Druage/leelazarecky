import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import OpenSourceProjects from "./components/OpenSourceProjects";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar";

const Home: NextPage = () => {
  return (
    <div id={"about"} className={"pt-8"}>
      <Head>
        <title>Lee Lazarecky</title>
        <meta name="description" content="A portfolio for Lee Lazarecky" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={"px-4 py-12"}>
        <NavBar />

        <div className="flex justify-center gap-12 align-middle">
          <Image
            src={"/profile_image.jpeg"}
            height="200"
            width="200"
            alt="portfolio-profile-image"
            className="w-[400px] rounded-3xl border-2 bg-gray-800"
            objectFit="cover"
          />
          <div>
            <h1 className={"mb-4 block text-6xl font-bold"}>Lee Lazarecky</h1>
            <h2 className={"block text-2xl"}>Daytime Software Developer</h2>
            <h2 className={"block text-2xl"}>Moonlight Designer</h2>

            <div
              className={"badgeContainer mt-4 flex justify-items-start gap-4"}
            >
              <Link href={"https://github.com/druage"}>
                <a
                  target={"_blank"}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:underline"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    height={16}
                    width={16}
                    className={"mr-1"}
                  />
                  Github
                </a>
              </Link>

              <Link
                href={"https://www.linkedin.com/in/lee-lazarecky-2a588310b/"}
              >
                <a
                  target={"_blank"}
                  className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800 hover:underline"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    height={16}
                    width={16}
                    className={"mr-1"}
                  />
                  LinkedIn
                </a>
              </Link>

              <Link href={"https://www.instagram.com/leelazarecky/?hl=en"}>
                <a
                  target={"_blank"}
                  className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800 hover:underline"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height={16}
                    width={16}
                    className={"mr-1"}
                  />
                  Instagram
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={"mx-auto py-8 sm:w-full md:w-[40rem]"}>
          <p>
            I am a Full-Stack Software Developer based in Ann Arbor, MI. I love
            creating software and being able to make it useful to people. I just
            love learning everything new.
          </p>

          <br />

          <p>
            Besides programming I also dabble in UI design for my own projects
            and projects of others that need help, I think it stems from a
            passion of drawing.
          </p>

          <br />
          <p>
            My hobbies include drawing, music, travelling to all places new,
            history podcasts, and audiobooks!
          </p>
        </div>
      </header>

      <main className={"mx-auto w-4/5 border-t-2 border-gray-200 px-4 py-8"}>
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
