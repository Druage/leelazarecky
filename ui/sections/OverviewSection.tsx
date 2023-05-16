import SectionLayout from "../layouts/SectionLayout";
import {CareerTimeline} from "../components/CareerTimeline";

function Skill(heading: string, subHeading: string | JSX.Element | JSX.Element[]) {
    return (
        <p className={"p-2 text-center"}>
            <h1 className={"font-extrabold mb-3 text-2xl"}>{heading}</h1>
            <span className={"text-lg font-normal"}>{subHeading}</span>
        </p>
    )
}

export default function OverviewSection() {

    return (
        <SectionLayout id={"experience"} mode={"light"}>

                <div className={"flex flex-col w-full justify-center items-center md:flex-row gap-24 pt-20"}>

                    <div className={"flex flex-col items-center justify-center gap-16"}>

                        {Skill("5+ Years", "Full-Stack Experience")}

                        {Skill("4+ Years",
                            <>
                                <span>C++ Emulation</span>
                                <pre><span>Programming Experience</span></pre>
                            </>
                        )}

                        {Skill("10+ Years",
                            <>
                                <span>Masters League</span>
                                <pre><span>Starcraft II Player</span></pre>
                            </>
                        )}

                    </div>

                    <CareerTimeline/>

                </div>



        </SectionLayout>
    );
}