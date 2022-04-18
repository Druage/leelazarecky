import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import SectionLayout from "../layouts/SectionLayout";

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

    function ProjectDescription(project: Project) {
        return (
            <div className={"w-[20rem] flex flex-col gap-2"}>
                <h1 className={"text-2xl md:text-3xl font-bold"}>{project.name}</h1>
                <div className={"text-xl md:text-xl font-bold text-gray-600"}>{project.longName}</div>
                <div>{project.description}</div>
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
        <SectionLayout id={"open-source-projects"} heading={"Passion Projects"}>

            <div className={"mt-2 md:mt-8"}>
                {projects.map((it) => (
                    <div key={it.name} className={"flex flex-row justify-center gap-4 h-[700px] relative"}>
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
        </SectionLayout>
    );
}
