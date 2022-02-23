import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { OpenSourceProjects } from "./components/OpenSourceProjects";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lee Lazarecky Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={"py-12"}>
        <div
          className={"mx-auto mb-12 flex w-1/2 items-center justify-between"}
        >
          <Link href={"#about"}>About</Link>
          <Link href={"#blog"}>Blog</Link>
          <Link href={"#open-source-projects"}>Open Source Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>

        <div className="flex justify-center gap-12 align-middle">
          <Image
            src={"/profile_image.jpeg"}
            height="200"
            width="200"
            alt="portfolio-profile-image"
            className="rounded-3xl border-2 bg-gray-800"
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
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800"
                >
                  Github
                </a>
              </Link>

              <Link
                href={"https://www.linkedin.com/in/lee-lazarecky-2a588310b/"}
              >
                <a
                  target={"_blank"}
                  className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800"
                >
                  LinkedIn
                </a>
              </Link>

              <Link href={"https://www.instagram.com/leelazarecky/?hl=en"}>
                <a
                  target={"_blank"}
                  className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800"
                >
                  Instagram
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div id={"about"} className={"mx-auto w-1/2 py-8"}>
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

      <main className={"mx-auto w-1/2 border-t-2 border-gray-200 py-8"}>
        <OpenSourceProjects />
      </main>
    </div>
  );
};

export default Home;
