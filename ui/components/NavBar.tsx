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
            <Link href={"/"} className={"hover:text-blue-500 hover:underline"}>
                About
            </Link>
            <Link href={"#experience"} className={"hover:text-blue-500 hover:underline"}>
                Experience
            </Link>
            <Link
                href={"#project-highlights"}
                className={"hover:text-blue-500 hover:underline"}>
                Project Highlights
            </Link>
            <Button href={"/LeeLazarecky_Resume.pdf"} variant="primary" className="group w-auto">
                Download Resume
                <ArrowDownIcon
                    className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"/>
            </Button>
        </header>
    );
}
