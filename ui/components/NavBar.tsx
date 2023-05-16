import Link from "next/link";
import {Button} from "./Button";
import {ArrowDownIcon} from "./ArrowDownIcon";

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
            <Button href={"/LeeLazarecky_Resume.pdf"} variant="primary" className="group w-auto">
                Download Resume
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
            </Button>
        </header>
    );
}
