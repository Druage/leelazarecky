import Link from "next/link";

export default function NavBar() {
  return (
    <header
      className={
        "my-16 flex flex-col items-center justify-center gap-x-12 gap-y-3 font-medium md:flex-row"
      }
    >
      <Link href={"#about"}>
        <a className={"hover:text-blue-500"}>About</a>
      </Link>
      <Link href={"#open-source-projects"}>
        <a className={"hover:text-blue-500"}>Passion Projects</a>
      </Link>
    </header>
  );
}
