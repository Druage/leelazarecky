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

      <div className="flex flex-col items-start justify-center gap-12 py-16 align-middle md:items-center md:gap-24 lg:flex-row">
        <div
          className={
            "relative mx-4 h-[120px] w-[120px] overflow-hidden rounded md:mx-0 md:h-[420px] md:w-[420px]"
          }
        >
          <Image
            src={"/profile_image_410.png"}
            alt="portfolio-profile-image"
            objectFit="fill"
            layout={"fill"}
            priority={true}
            className={"rounded-3xl"}
          />
        </div>

        <div className={"w-full px-4 md:w-[500px] md:px-0"}>
          <h1 className={"mb-4 block text-4xl font-extrabold"}>
            Software developer, moonlight designer, and open source advocate.
          </h1>

          <div className={"badgeContainer mt-4 flex justify-items-start gap-4"}>
            <Link href={"https://github.com/druage"}>
              <a
                target={"_blank"}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800 hover:underline"
                aria-label={"View Github Profile for Lee Lazarecky"}
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
                aria-label={"View LinkedIn Profile for Lee Lazarecky"}
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
                aria-label={"View Instagram Profile for Lee Lazarecky"}
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
