import SectionLayout from "../layouts/SectionLayout";
import ProjectGrid from "../components/Project/ProjectGrid";

export default function OpenSourceProjectsSection() {

    return (
        <SectionLayout id={"open-source-projects"} heading={"Passion Projects"} mode={"dark"}>
            <ProjectGrid/>
        </SectionLayout>
    );
}