import Link from "next/link";

export default function NavBar() {
  return (
    <header
      className={
        "flex flex-col items-center justify-center gap-x-12 gap-y-3 py-12 font-medium md:flex-row"
      }
    >
      <Link href={"/"}>
        <a className={"hover:text-blue-500"}>About</a>
      </Link>
      <Link href={"#technical-skills"}>
        <a className={"hover:text-blue-500"}>Technical Skills</a>
      </Link>
      <Link href={"#open-source-projects"}>
        <a className={"hover:text-blue-500"}>Passion Projects</a>
      </Link>
    </header>
  );
}
