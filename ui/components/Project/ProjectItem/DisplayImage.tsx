import Image from "next/image";

interface Props {
    src: string;
}

export function DisplayImage({src}: Props) {
    return (
        <div
            className={
                "relative w-full overflow-hidden pl-6 md:w-full md:p-0 h-1/2"
            }
        >
            <div
                className={"relative m-auto h-[500px] w-[1000px]"}
            >
                <Image
                    src={src}
                    alt="project-image"
                    objectFit="contain"
                    className={"object-left-top"}
                    layout={"fill"}
                    priority={true}
                />

            </div>

        </div>
    )
}