import SectionLayout from "../layouts/SectionLayout";

function Skill(heading: string, subHeading: string | JSX.Element | JSX.Element[]) {
    return (
        <p className={"p-2 text-center"}>
            <h1 className={"font-extrabold mb-3 text-5xl"}>{heading}</h1>
            <span className={"text-2xl font-normal"}>{subHeading}</span>
        </p>
    )
}

export default function SkillsSection() {
    return (
        <SectionLayout id={"technical-skills"} heading={"Technical Skills"}>
            <div
                className={
                    "flex flex-col items-start justify-center gap-12 md:flex-row"
                }
            >
                <div className={"flex md:flex-row flex-col items-center md:items-start justify-center gap-16 w-full"}>

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

            </div>
        </SectionLayout>
    );
}
