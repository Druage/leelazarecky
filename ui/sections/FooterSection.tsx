import NavBar from "../components/NavBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <footer className={"bg-zinc-900 px-4 pt-28 pb-28 text-gray-300"}>
      <NavBar />
      <div className={"flex justify-center gap-16"}>
        <Link
          href={"https://github.com/druage"}
          target={"_blank"}
          aria-label={"View Github Profile for Lee Lazarecky"}>

          <FontAwesomeIcon icon={faGithub} height={24} width={24} />

        </Link>
        <Link
          href={"https://www.instagram.com/leelazarecky/?hl=en"}
          target={"_blank"}
          aria-label={"View Instagram Profile for Lee Lazarecky"}>

          <FontAwesomeIcon icon={faInstagram} height={24} width={24} />

        </Link>
        <Link
          href={"https://www.linkedin.com/in/lee-lazarecky-2a588310b/"}
          target={"_blank"}
          aria-label={"View LinkedIn Profile for Lee Lazarecky"}>

          <FontAwesomeIcon icon={faLinkedin} height={24} width={24} />

        </Link>
      </div>
      <p className="mt-12 text-center text-base text-gray-400">
        &copy; {new Date().getFullYear()} Lee Lazarecky. All rights reserved.
      </p>
    </footer>
  );
}
