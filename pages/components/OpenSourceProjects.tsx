import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type Project = {
  name: string;
  description: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
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
    githubLink: "",
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
  },
  {
    name: "Phoenix",
    description:
      "Phoenix is a Multi-System Emulation frontend that allows users to play all their favorite retro games on" +
      " emulated consoles on their computer.",
    image: {
      src: "/smash_elo_tracker.png",
      height: 500,
      width: 300,
    },
    githubLink: "",
  },
];

export default function OpenSourceProjects() {
  return (
    <div id={"open-source-projects"}>
      <div
        className={
          "bg-gray-900 py-3 text-center text-4xl font-bold text-white md:py-12 md:text-7xl"
        }
      >
        <div className={"m-auto flex w-fit flex-col items-start"}>
          <h1>Passion Projects</h1>
          <Link href={"https://github.com/druage"}>
            <a target={"_blank"}>
              <button
                type="button"
                className="mt-3 inline-flex items-center rounded-md border border-transparent bg-zinc-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 hover:underline focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 md:text-lg"
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

      <div className={"mt-2 grid grid-cols-1 gap-1 md:mt-8"}>
        {projects.map((it) => (
          <div key={it.name} className={"p-4"}>
            <h1 className={"py-8 text-4xl font-normal md:text-5xl"}>
              {it.name}
            </h1>
            <div>{it.githubLink}</div>
            <div className={"text-1xl md:text-2xl"}>{it.description}</div>
            {/*<Image*/}
            {/*  src={it.image.src}*/}
            {/*  height={it.image.height}*/}
            {/*  width={it.image.width}*/}
            {/*  alt="project-image"*/}
            {/*  objectFit="cover"*/}
            {/*/>*/}
          </div>
        ))}
      </div>
    </div>
  );
}
