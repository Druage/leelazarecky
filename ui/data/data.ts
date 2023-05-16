import {Project} from "../types/Project";

export const PROJECTS: Project[] = [
    {
        name: "Phoenix",
        slug: "phoenix",
        longName: "A Multi-System Emulator",
        description:
            "A Multi-System Emulation frontend that allows users to play all their favorite retro games on" +
            " emulated consoles on their computer.",
        image: {
            src: "/phoenix-v2.png",
            height: 700,
            width: 800,
        },
        altImages: ["/phoenix-with-games.png"],
        githubLink: "https://github.com/team-phoenix/Phoenix",
        tags: ["C++", "SQLite", "Emulation", "Qt", "QML", "CMake"],
    },
    {
        name: "RetroQuest",
        slug: "retroquest",
        longName: "A Remote Retrospective Tool",
        description:
            "A real-time web application that allows users to facilitate weekly team retrospectives, discussing what went well during the week and what needs improvement.",
        image: {
            src: "/retroquest/retroquest-team-screen.png",
            height: 500,
            width: 300,
        },
        altImages: [
            "/retroquest/retroquest-login-screen.png",
            "/retroquest/retroquest-team-screen-dark.png",
            "/retroquest/retroquest-team-screen-mobile.png",
        ],
        githubLink: "https://github.com/fordlabs/retroquest",
        tags: ["React.js", "MySQL", "Angular", "Java", "Spring Boot", "Design"],
    },
    {
        name: "Smash ELO Tracker",
        slug: "smash-elo-tracker",
        longName: "Super Smash Bros. Tourney Ranking",
        description:
            "Playing Smash Bros. Ultimate during a work break can be fun and a good way to de-stress from the work day.",
        image: {
            src: "/smash-bros/elo-tracker-main.png",
            height: 500,
            width: 300,
        },
        altImages: [
            "/smash-bros/elo-tracker-add-player-screen.png",
            "/smash-bros/elo-tracker-record-screen.png",
            "/smash-bros/elo-tracker-match-history-screen.png",
            "/smash-bros/elo-tracker-rules-screen.png",
        ],
        githubLink: "",
        tags: ["Java", "Spring Boot", "React.js", "Design"],
    },
    {
        name: "AuthQuest",
        slug: "authquest",
        longName: "An OAuth2 and OpenID Server",
        description:
            "An authorization and authentication server for users to use as a replacement for paid services such as Auth0 or Okta that follows" +
            "the OAuth2 and OpenID specifications. ",
        image: {
            src: "/authquest/authquest-dashboard.png",
            height: 500,
            width: 300,
        },

        altImages: [
            "/authquest/authquest-signup-screen.png",
            "/authquest/authquest-verify-account.png",
        ],
        githubLink: "",
        tags: ["Vue.js", "Kotlin", "MySql", "Java", "Spring Boot", "Design"],
    },
];
