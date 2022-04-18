import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

type Project = {
  name: string;
  longName: string;
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
    name: "Phoenix",
    longName: "A Multi-System Emulator",
    description:
      "Phoenix is a Multi-System Emulation frontend that allows users to play all their favorite retro games on" +
      " emulated consoles on their computer.",
    image: {
      src: "/phoenix-v2.png",
      height: 700,
      width: 800,
    },
    githubLink: "https://github.com/team-phoenix/Phoenix",
    tags: ["C++", "SQLite", "Emulation", "Qt", "QML", "CMake"],
  },
  {
    name: "RetroQuest",
    longName: "A Remote Retrospective Tool",
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
    longName: "Super Smash Bros. Tourney Ranking",
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
    name: "AuthQuest",
    longName: "An OAuth2 and OpenID Server",
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
];

export default function OpenSourceProjectsSection() {
  function Heading() {
    return (
      <div className={"text-center text-6xl md:text-7xl bg-[url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e)]"}>
        <div className={"flex flex-col"}>
          <p className="pt-12 text-center text-base font-extrabold uppercase tracking-wider text-gray-600 text-2xl">
            <span>Passion Projects</span>
          </p>
        </div>

        {/*<Link href={"https://github.com/druage"}>*/}
        {/*  <a target={"_blank"} className={"mt-6 block"}>*/}
        {/*    <button*/}
        {/*      type="button"*/}
        {/*      className="inline-flex items-center border border-transparent bg-zinc-800 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2 md:text-lg"*/}
        {/*    >*/}
        {/*      <FontAwesomeIcon*/}
        {/*        icon={faGithub}*/}
        {/*        height={24}*/}
        {/*        width={24}*/}
        {/*        className={"mr-2"}*/}
        {/*      />*/}
        {/*      View GitHub Account*/}
        {/*    </button>*/}
        {/*  </a>*/}
        {/*</Link>*/}
      </div>
    );
  }

  function ProjectDescription(project: Project) {
    return (
      <div className={"w-[20rem] flex flex-col gap-2"}>
        <h1 className={"text-2xl md:text-3xl font-bold"}>{project.name}</h1>
        <div className={"text-xl md:text-xl font-bold text-gray-600"}>{project.longName}</div>
        <div >{project.description}</div>
        {project.githubLink && project.githubLink !== "" && (
            <Link href={"https://github.com/druage"}>
              <a
                  target={"_blank"}
                  className="inline-flex items-center text-sm font-medium underline"
              >
                <FontAwesomeIcon
                    icon={faGithub}
                    height={16}
                    width={16}
                    className={"mr-1"}
                />
                View Code
              </a>
            </Link>
        )}
      </div>
    );
  }

  return (
    <div id={"open-source-projects"} className={"m-auto max-w-7xl pb-64"}>
      <Heading />

      <div className={"mt-2 md:mt-8"}>
        {projects.map((it) => (
          <div key={it.name} className={"flex flex-row justify-center gap-4"}>
            {ProjectDescription(it)}

            <div className={"relative w-5/12 h-screen"}>
              <div className={"absolute m-auto h-[500px] w-[1000px] shadow"}>
                <Image
                  src={it.image.src}
                  alt="project-image"
                  objectFit="contain"
                  className={"object-left-top"}
                  layout={"fill"}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
