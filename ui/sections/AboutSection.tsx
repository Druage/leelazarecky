import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SectionLayout from "../layouts/SectionLayout";
import NavBar from "../components/NavBar";

export default function AboutSection() {
  return (
    <SectionLayout>
      <NavBar />

      <div className="flex flex-col items-center justify-center gap-12 align-middle md:flex-row md:gap-24">
        <Image
          src={"/profile_image.jpg"}
          alt="portfolio-profile-image"
          objectFit="contain"
          height={460}
          width={400}
          priority={true}
        />

        <div className={"w-full px-6 md:w-[500px] md:px-0"}>
          <h1 className={"mb-4 block text-5xl font-extrabold"}>
            Lee Lazarecky
          </h1>
          <div className={"block w-fit bg-black px-3 py-1 text-white"}>
            Daytime Software Developer
            <h2
              className={
                "w-fill -mx-3 mt-1 -mb-1 block bg-gray-100 px-3 py-1 text-black"
              }
            >
              Moonlight Designer
            </h2>
          </div>

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

          <div className={"w-full py-8"}>
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
              history podcasts, and audiobooks!{" "}
              <span className={"whitespace-pre"}> 🏖️✏️ᕕ( ᐛ )ᕗ🥾️️⛰</span>
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
