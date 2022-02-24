import Link from "next/link";

export default function NavBar() {
  return (
    <div
      className={
        "mb-12 flex flex-col items-center justify-center gap-y-3 gap-x-12 md:flex-row"
      }
    >
      <Link href={"#about"}>
        <a className={"hover:underline"}>About</a>
      </Link>
      <Link href={"#blog"}>
        <a className={"hover:underline"}>Blog</a>
      </Link>
      <Link href={"#open-source-projects"}>
        <a className={"hover:underline"}>Open Source Projects</a>
      </Link>
      <Link href={"#contact"}>
        <a className={"hover:underline"}>Contact</a>
      </Link>
    </div>
  );
}
