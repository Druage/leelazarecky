import Link from "next/link";

export default function NavBar() {
    return (
        <header
            className={
                "flex flex-col items-center justify-center gap-x-12 gap-y-3 py-12 font-medium md:flex-row"
            }
        >
            <Link href={"/"}>
                <a className={"hover:text-blue-500 hover:underline"}>About</a>
            </Link>
            <Link href={"#experience"}>
                <a className={"hover:text-blue-500 hover:underline"}>Experience</a>
            </Link>
            <Link href={"#project-highlights"}>
                <a className={"hover:text-blue-500 hover:underline"}>Project Highlights</a>
            </Link>
            <a download href={"/LeeLazarecky_Resume.pdf"} className={"hover:text-blue-500 hover:underline"}>Resume</a>
        </header>
    );
}
