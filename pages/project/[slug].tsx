import Image from "next/legacy/image"
import {useRouter} from "next/router";
import {PROJECTS} from "../../ui/data/data";
import Head from "next/head";

interface Props {
    children?: JSX.Element | JSX.Element[];
    projectName?: string;
    description?: string;
    src?: string;
    altImagesSrc?: string[];
}

function Layout({children, projectName, description, src, altImagesSrc}: Props) {
    return (
        <div>
            <Head>
                <title>Lee Lazarecky - {projectName}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <section className={"p-12 max-w-[1300px] m-auto"}>

                <div className="relative py-16 bg-white overflow-hidden">
                    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                            <svg
                                className="absolute top-12 left-full transform translate-x-32"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                            </svg>
                            <svg
                                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                            </svg>
                            <svg
                                className="absolute bottom-12 left-full transform translate-x-32"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                            >
                                <defs>
                                    <pattern
                                        id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                              fill="currentColor"/>
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
                            </svg>
                        </div>
                    </div>
                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="text-lg max-w-prose mx-auto">
                            <h1>
            <span className="block text-base text-center text-gray-600 font-semibold tracking-wide uppercase">
              Project
            </span>
                                <span
                                    className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {projectName}
            </span>
                            </h1>
                            <p className="mt-8 text-xl text-gray-500 leading-8">
                                <b>{projectName}</b> {description}
                            </p>
                        </div>
                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            {src && <figure>
                                <Image
                                    className="w-full rounded-lg"
                                    src={src}
                                    alt=""
                                    width={1310}
                                    objectFit={"contain"}
                                    height={873}
                                    priority={true}
                                />
                                {/*<figcaption>Depicted is the main application screen when starting the application with no*/}
                                {/*    games imported*/}
                                {/*</figcaption>*/}
                            </figure>}

                            {altImagesSrc && altImagesSrc.map(it => <figure key={it}>
                                <Image
                                    className="w-full rounded-lg"
                                    src={it}
                                    alt=""
                                    width={1310}
                                    objectFit={"contain"}
                                    height={873}
                                />
                                {/*<figcaption>Depicted is the main application screen when starting the application with no*/}
                                {/*    games imported*/}
                                {/*</figcaption>*/}
                            </figure>)}


                        </div>
                    </div>
                </div>

                {children}
            </section>

        </div>
    )
}

export default function Project() {

    const router = useRouter()
    const {slug} = router.query

    const project = PROJECTS.find(project => project.slug === slug);

    return (
        <Layout projectName={project?.name}
                description={project?.description}
                src={project?.image.src}
                altImagesSrc={project?.altImages}
        >

        </Layout>
    )
}