import {PROJECTS} from "../../data/data";
import {ProjectItem} from "./ProjectItem";

export default function ProjectGrid() {
    return (<div className={"mt-2 md:mt-8 flex md:flex-row flex-col justify-center m-auto flex-wrap w-full md:w-auto md:shadow"}>
        {PROJECTS.map(project =>
            <ProjectItem project={project} key={project.name}/>
        )}
    </div>)
}