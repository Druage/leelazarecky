import Link from "next/link";

export default function NavBar() {
  return (
    <div className={"mb-12 flex items-center justify-center gap-12"}>
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
