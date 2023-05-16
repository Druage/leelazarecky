import SectionLayout from "../layouts/SectionLayout";
import imageRetroquest from "../../public/retroquest/retroquest.png"
import imagePhoenix from "../../public/phoenix_256x256_v2.png"
import imageEloTracker from "../../public/smash-bros/elo-tracker.png"
import imageAuthquest from "../../public/authquest/authquest.png"

import Image from "next/image";

const posts = [


    {
        id: 1,
        title: 'Phoenix, A Multi-System Video Game Emulator',
        href: '#',
        description:
            'Phoenix is a Multi-System Emulation frontend that allows users to play all their favorite retro games on emulated consoles on their computer.',
        imageUrl: imagePhoenix,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'C++, Qt, QML, Emulation', href: 'http://phoenix.vg/'},
        project: {
            href: 'https://github.com/team-phoenix/Phoenix',
        },
    },
    {
        id: 2,
        title: 'RetroQuest',
        href: '#',
        description:
            'A real-time web application that allows users to facilitate weekly team retrospectives, discussing what went well during the week and what needs improvement.',
        imageUrl: imageRetroquest,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Java, Spring Boot, Angular', href: 'https://github.com/fordlabs/retroquest'},
        project: {
            href: 'https://github.com/fordlabs/retroquest',
        },
    },
    {
        id: 3,
        title: 'Smash ELO Tracker',
        href: '#',
        description:
            'Playing Smash Bros. Ultimate during a work break can be fun and a good way to de-stress from the work day. This application helps keep track of custom rule-sets.',
        imageUrl: imageEloTracker,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Java, Spring Boot, React', href: '#'},
        project: {
            href: '',
        },
    },
    {
        id: 4,
        title: 'AuthQuest',
        href: '#',
        description:
            'An authorization and authentication server for users to use as a replacement for paid services such as Auth0 or Okta that follows the OAuth2 and OpenID specifications.',
        imageUrl: imageAuthquest,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Kotlin, Vue.js', href: '#'},
        project: {
            href: '',
        },
    },
    // More posts...
]

export default function OpenSourceProjectsSection() {

    return (
        <SectionLayout id={"open-source-projects"} heading={""} mode={"light"}>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project
                            Highlights</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert advice.
                        </p>
                        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                            {posts.map((post) => (
                                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                    <div
                                        className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                        <Image
                                            layout={"fill"}
                                            src={post.imageUrl}
                                            alt=""
                                            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={post.datetime} className="text-gray-500">
                                                {post.date}
                                            </time>
                                            <a
                                                href={post.category.href}
                                                target={"_blank"}
                                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                            >
                                                {post.category.title}
                                            </a>
                                        </div>
                                        <div className="group relative max-w-xl">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0"/>
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                                        </div>
                                        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                            <div className="relative flex items-center gap-x-4">
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-gray-900">
                                                        {post.project.href &&
                                                            <a href={post.project.href} target={"_blank"} rel={"noreferrer"}>
                                                                <span className="absolute inset-0"/>
                                                                View the code
                                                            </a>}

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