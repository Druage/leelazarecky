import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
  tags: string[];
  githubLink: string;
};

const projects: Project[] = [
  {
    name: "AuthQuest",
    description:
      "An authorization and authentication server for users to use as a replacement for paid services such as Auth0 or Okta that follows" +
      "the OAuth2 and OpenID specifications. " +
      "This project comes with a customizable login and signup page that servers as an alternative to a custom login and signup page." +
      "Also features an Administration dashboard that allows project owners to add in new authorization scopes to a user's OAuth2 token.",
    image: {
      src: "/authquest.png",
      height: 500,
      width: 300,
    },
    githubLink: "",
    tags: ["Vue.js", "Kotlin", "MySql", "Java", "Spring Boot", "Design"],
  },
  {
    name: "RetroQuest",
    description:
      "A real-time web application that allows users to facilitate weekly team retrospectives, discussing what went well during the week and what needs improvement." +
      " This tool is intended to be used as a remote retrospective tool but can also be used as a way to facilitate an anonymous in-person retrospective." +
      " Users can use the application with their desktop or mobile devices and get real-time websocket updates, keeping the retrospective board in sync with all participants.",
    image: {
      src: "/retroquest_login.png",
      height: 500,
      width: 300,
    },
    githubLink: "https://github.com/fordlabs/retroquest",
    tags: ["React.js", "MySQL", "Angular", "Java", "Spring Boot", "Design"],
  },
  {
    name: "Smash ELO Tracker",
    description:
      "Playing Smash Bros. Ultimate during a work break can be fun and a good way to de-stress from the work day. This React application allows users" +
      " to keep track of who is the best Smash player in the office. Users can keep track of the rules and submit their match wins and losses." +
      " Rules can be updated at any time, giving a fun way for people to stay engaged and know about any ruleset changes.",
    image: {
      src: "/smash_elo_tracker.png",
      height: 500,
      width: 300,
    },
    githubLink: "",
    tags: ["Java", "Spring Boot", "React.js", "Design"],
  },
  {
    name: "Phoenix",
    description:
      "Phoenix is a Multi-System Emulation frontend that allows users to play all their favorite retro games on" +
      " emulated consoles on their computer.",
    image: {
      src: "/phx.png",
      height: 500,
      width: 300,
    },
    githubLink: "https://github.com/team-phoenix/Phoenix",
    tags: ["C++", "SQLite", "Emulation", "Qt", "QML", "CMake"],
  },
];

export default function OpenSourceProjects() {
  return (
    <div id={"open-source-projects"} className={"m-auto max-w-7xl pb-64"}>
      <div
        className={"py-12 text-center text-6xl md:py-3 md:py-12 md:text-7xl"}
      >
        <div className={"flex w-fit flex-col items-start"}>
          <h1>Passion</h1>
          <h1
            className={"bg-white text-8xl font-bold text-black md:text-[10rem]"}
          >
            Projects
          </h1>
          <Link href={"https://github.com/druage"}>
            <a target={"_blank"}>
              <button
                type="button"
                className="mt-20 inline-flex items-center border border-transparent bg-white px-6 py-2 text-base font-medium text-black shadow-sm hover:bg-gray-200 hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 md:text-lg"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  height={24}
                  width={24}
                  className={"mr-2"}
                />
                View GitHub Account
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className={"mt-2 grid grid-cols-1 gap-24 md:mt-8"}>
        {projects.map((it) => (
          <div key={it.name}>
            <div
              className={
                "box-sh grid grid-cols-1 bg-white text-black md:grid-cols-2"
              }
            >
              <div className={"relative h-[800px] w-full"}>
                <Image
                  src={it.image.src}
                  alt="project-image"
                  objectFit="cover"
                  className={"object-left-top"}
                  layout={"fill"}
                />
              </div>

              <div className={"border-l border-gray-300 p-12"}>
                <h1 className={"py-4 text-2xl md:text-3xl"}>{it.name}</h1>
                <div className={"text-1xl md:text-1xl"}>{it.description}</div>

                <div className={"mt-6 flex flex-wrap gap-3"}>
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {it.githubLink && it.githubLink !== "" && (
                  <Link href={it.githubLink}>
                    <a
                      type="button"
                      target={"_blank"}
                      className="mt-6 inline-flex items-center border border-transparent bg-zinc-700 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 md:text-lg"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        height={24}
                        width={24}
                        className={"mr-2"}
                      />
                      View Project on Github
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
