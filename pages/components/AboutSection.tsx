import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutSection() {
  return (
    <header className={"py-12 px-4"}>
      <NavBar />

      <div className="flex flex-col items-center justify-center gap-12 align-middle md:flex-row">
        <div className={"relative h-[500px] w-[400px] bg-gray-800"}>
          <Image
            src={"/profile_image.jpeg"}
            alt="portfolio-profile-image"
            objectFit="cover"
            className={"rounded-3xl"}
            layout={"fill"}
          />
        </div>

        <div>
          <h1 className={"mb-4 block text-7xl font-bold"}>Lee Lazarecky</h1>
          <h2 className={"block w-fit bg-black px-3 py-1 text-2xl text-white"}>
            Daytime Software Developer
          </h2>
          <h2 className={"block w-fit bg-gray-100 px-3 py-1 text-2xl"}>
            Moonlight Designer
          </h2>

          <div className={"badgeContainer mt-4 flex justify-items-start gap-4"}>
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

            <Link href={"https://www.linkedin.com/in/lee-lazarecky-2a588310b/"}>
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

          <div className={"mx-auto py-8 sm:w-full md:w-[40rem]"}>
            <p>
              I am a{" "}
              <span
                className={
                  "decoration- underline decoration-black decoration-1"
                }
              >
                Full-Stack Software Developer
              </span>{" "}
              based in Ann Arbor, MI. I love creating software and being able to
              make it useful to people; I just love learning everything new!
            </p>

            <br />

            <p>
              Besides programming I also dabble in UI design for my own projects
              and projects of others that need help.
            </p>

            <br />
            <p>
              My hobbies include drawing, music, travelling to all places new,
              history podcasts, and audiobooks! ᕕ( ᐛ )ᕗ
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
