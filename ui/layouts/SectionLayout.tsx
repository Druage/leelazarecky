import clsx from "clsx";

interface Props {
    id?: string;
    children: JSX.Element | JSX.Element[];
    heading?: string;
    mode?: "light" | "dark";
}

function translateColor(color: "light" | "dark", lightColor: string, darkColor: string) {

    if (color === "light") {
        return lightColor
    } else if (color === "dark") {
        return darkColor
    }
    throw new Error("No Color Provided")
}

export default function SectionLayout({id, children, heading, mode = "light"}: Props) {

    const calcBgColor = translateColor(mode, "bg-white", "bg-gray-50")
    const calcColor = translateColor(mode, "text-gray-600", "text-gray-600")

    return (
        <div id={id}
             className={clsx("flex flex-col pb-24 justify-center border-b border-gray-100", calcBgColor, calcColor)}>

            {heading &&
                <p className="flex items-center justify-center py-12 text-center text-center text-base text-2xl font-extrabold uppercase tracking-wider">
                    {heading}
                </p>
            }

            {children}
        </div>
    )
}