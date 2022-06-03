interface Props {
    id?: string;
    children: JSX.Element | JSX.Element[];
    heading?: string;
}

export default function SectionLayout({id, children, heading}: Props) {
    return (
        <div id={id} className={"flex flex-col pb-24 justify-center border-b border-gray-100 bg-white"}>

            {heading &&
                <p className="flex items-center justify-center py-12 text-center text-center text-base text-2xl font-extrabold uppercase tracking-wider text-gray-600">
                    {heading}
                </p>
            }

            {children}
        </div>
    )
}