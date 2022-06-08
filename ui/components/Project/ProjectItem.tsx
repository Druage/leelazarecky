import Image from "next/image";
import {Project} from "../../types/Project";
import {ProjectDescription} from "./ProjectDescription";

interface Props {
    project: Project;
}

export function ProjectItem({project}: Props) {
    return (
        <div
            key={project.name}
            className={
                "relative mb-8 flex h-auto flex-col justify-between md:mb-0 md:h-[700px] w-full md:w-[300px] border-0 md:border md:border-r-0 last:border-r"
            }
        >

            <div
                className={
                    "relative w-full overflow-hidden pl-6 md:w-full md:p-0 h-1/2"
                }
            >
                <div
                    className={"relative m-auto h-[500px] w-[1000px]"}
                >
                    <Image
                        src={project.image.src}
                        alt="project-image"
                        objectFit="cover"
                        className={"object-left-top"}
                        layout={"fill"}
                    />
                </div>
            </div>

            <ProjectDescription project={project}/>

        </div>
    )
}