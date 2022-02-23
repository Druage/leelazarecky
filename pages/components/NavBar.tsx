import Link from "next/link";

export default function NavBar() {
  return (
    <div className={"mx-auto mb-12 flex w-1/2 items-center justify-between"}>
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
