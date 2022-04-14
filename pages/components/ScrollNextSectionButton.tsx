import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

interface Props {
    href: string;
}

export default function ScrollNextSectionButton({href}: Props) {
    return (
        <a href={href} className={"flex w-auto flex-1"}>
            <FontAwesomeIcon
                icon={faChevronDown}
                height={20}
                width={20}
                className={"m-auto opacity-70"}
            />
        </a>
    )
}
