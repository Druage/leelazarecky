import { Button } from "./Button";
import Image from "next/image";
import logoValeo from "../images/logos/valeo.png";
import logoAirforce from "../images/logos/airforce.png";
import logoRedHat from "../images/logos/redhat.png";
import logoFordLabs from "../images/logos/fordlabs.png";
import logoHighergrounds from "../images/logos/highgrounds.jpg";
import { ArrowDownIcon } from "./ArrowDownIcon";

function MailIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

export function CareerTimeline() {
    let resume: any[] = [
        {
            company: 'Red Hat',
            title: 'Senior Software Engineer',
            logo: logoRedHat,
            start: '2023',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'FordLabs',
            title: 'Full-Stack Software Engineer',
            logo: logoFordLabs,
            start: '2017',
            end: '2023',
        },
        {
            company: 'Higher Grounds, Non-Profit',
            title: 'Full-Stack Software Engineer',
            logo: logoHighergrounds,
            start: '2020',
            end: '2021',
        },
        {
            company: 'Valeo',
            title: 'Research and Hardware Engineer Co-Op',
            logo: logoValeo,
            start: '2016',
            end: '2017',
        },
        {
            company: 'United State Air Force',
            title: 'Aircraft Armament Systems Journeyman',
            logo: logoAirforce,
            start: '2009',
            end: '2016',
        },
    ]

    return (
        <div className="rounded-2xl border p-6 border-zinc-700/40 mx-4 md:mx-0">
            <h2 className="flex text-sm font-semibold text-zinc-700">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center">
                            <Image src={role.logo} alt="" className={"h-7 w-7"} unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href={"/LeeLazarecky_Resume.pdf"} variant="primary" className="group mt-6 w-full">
                Download Resume
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}