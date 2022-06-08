import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Project} from "../../types/Project";

interface Props {
    project: Project
}

export function ProjectDescription({project}: Props) {
    return (
        <div
            className={
                "flex h-1/2 justify-left p-6 overflow-hidden border-t bg-white"
            }
        >
            <div className={"flex w-full flex-col gap-2"}>
                <h1 className={"text-2xl font-bold md:text-3xl"}>{project.name}</h1>
                <div className={"text-xl font-bold text-gray-600 md:text-xl"}>
                    {project.longName}
                </div>
                <div>{project.description}</div>
                {project.githubLink && project.githubLink !== "" && (
                    <Link href={"https://github.com/druage"}>
                        <a
                            target={"_blank"}
                            className="inline-flex items-center text-sm font-medium underline w-fit"
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
        </div>
    );
}
