
interface Props {
    id?: string;
    children: JSX.Element | JSX.Element[]
}

export default function SectionLayout({id, children}: Props) {
    return (
        <div id={id} className={"flex flex-col pb-24 justify-center border-b-2 border-gray-100 bg-white"}>
            {children}
        </div>
    )
}