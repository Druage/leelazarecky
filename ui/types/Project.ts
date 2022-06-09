export type Project = {
    name: string;
    longName: string;
    description: string;
    image: {
        src: string;
        height: number;
        width: number;
    };
    tags: string[];
    githubLink: string;
    slug: string;
};
