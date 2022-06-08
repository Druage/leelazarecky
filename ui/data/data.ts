import {Project} from "../types/Project";

export const PROJECTS: Project[] = [
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
            "A real-time web application that allows users to facilitate weekly team retrospectives, discussing what went well during the week and what needs improvement.",
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
            "Playing Smash Bros. Ultimate during a work break can be fun and a good way to de-stress from the work day.",
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
            "the OAuth2 and OpenID specifications. ",
        image: {
            src: "/authquest.png",
            height: 500,
            width: 300,
        },
        githubLink: "",
        tags: ["Vue.js", "Kotlin", "MySql", "Java", "Spring Boot", "Design"],
    },
];
