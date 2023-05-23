import SectionLayout from "../layouts/SectionLayout";
import imageRetroquest from "../../public/retroquest/retroquest.png";
import imagePhoenix from "../../public/phoenix_256x256_v2.png";
import imageEloTracker from "../../public/smash-bros/elo-tracker.png";
import imageAuthquest from "../../public/authquest/authquest.png";
import imageFCS from "../../public/fcs_256.png";
import imagePeoplemover from "../../public/peoplemover_256.png";

import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Link from "next/link";

const projects = [
  {
    title: "Ford Commercial Solutions",
    slug: "",
    description:
      "A commercial product that manages data about fleet vehicles and helps make that data actionable by the customer.",
    imageUrl: imageFCS,
    category: {
      title: "Vue.js, Typescript, MySQL",
      href: "https://www.commercialsolutions.ford.com/",
    },
  },
  {
    title: "PEOPLEMOVER",
    slug: "",
    description:
        "Focuses on the people, helping you create and fluidly maintain balanced teams well suited for the product at hand – because we understand that a great team sets the stage for incredible results.",
    imageUrl: imagePeoplemover,
    category: {
      title: "React, Typescript, Kotlin, Spring Boot, PostgreSQL",
      href: "https://www.peoplemover.ford.com/",
    },
    project: {
      href: "https://github.com/FordLabs/peoplemover"
    }
  },
  {
    title: "Phoenix, A Multi-System Video Game Emulator",
    slug: "phoenix",
    description:
      "Phoenix is a Multi-System Emulation frontend that allows users to play all their favorite retro games on emulated consoles on their computer.",
    imageUrl: imagePhoenix,
    category: { title: "C++, Qt, QML, Emulation", href: "http://phoenix.vg/" },
    project: {
      href: "https://github.com/team-phoenix/Phoenix",
    },
  },
  {
    title: "RetroQuest",
    slug: "retroquest",
    description:
      "A real-time web application that allows users to facilitate weekly team retrospectives, discussing what went well during the week and what needs improvement.",
    imageUrl: imageRetroquest,
    category: {
      title: "Java, Spring Boot, Angular",
      href: "https://github.com/fordlabs/retroquest",
    },
    project: {
      href: "https://github.com/fordlabs/retroquest",
    },
  },
  {
    title: "Smash ELO Tracker",
    slug: "smash-elo-tracker",
    description:
      "Playing Smash Bros. Ultimate during a work break can be fun and a good way to de-stress from the work day. This application helps keep track of custom rule-sets.",
    imageUrl: imageEloTracker,
    category: { title: "Java, Spring Boot, React", href: "#" },
    project: {
      href: "",
    },
  },
  {
    title: "AuthQuest",
    slug: "authquest",
    description:
      "An authorization and authentication server for users to use as a replacement for paid services such as Auth0 or Okta that follows the OAuth2 and OpenID specifications.",
    imageUrl: imageAuthquest,
    category: { title: "Kotlin, Vue.js", href: "#" },
    project: {
      href: "",
    },
  },
  // More posts...
];

export default function OpenSourceProjectsSection() {
  const router = useRouter();

  return (
    <SectionLayout id={"project-highlights"} heading={""} mode={"light"}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project Highlights
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              A few prominent projects that I am proud to have been apart of.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div
                    className="relative aspect-square w-56 cursor-pointer lg:w-64 lg:shrink-0"
                    onClick={() => {
                      if (project.slug) {
                        router.push(`/project/${project.slug}`).then();
                      } else {
                        router.push(project.category.href).then();
                      }
                    }}
                  >
                    <Image
                      layout={"fill"}
                      src={project.imageUrl}
                      alt={`${project.slug}-project-image`}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <a
                        href={project.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {project.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link
                          href={
                            project.slug
                              ? `/project/${project.slug}`
                              : project.category.href
                          }
                          legacyBehavior>
                          <span className={"cursor-pointer"}>
                            {project.title}
                          </span>
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            {project.project && project.project.href && (
                              <a
                                href={project.project.href}
                                target={"_blank"}
                                rel={"noreferrer"}
                              >
                                <span className="absolute inset-0" />
                                View the code
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
