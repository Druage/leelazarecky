import {Project} from "../../../types/Project";
import {Description} from "./Description";
import {DisplayImage} from "./DisplayImage";

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

            <DisplayImage src={project.image.src}/>

            <Description project={project}/>

        </div>
    )
}