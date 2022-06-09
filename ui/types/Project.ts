export type Project = {
    name: string;
    longName: string;
    description: string;
    image: {
        src: string;
        height: number;
        width: number;
    };
    altImages?: string[];
    tags: string[];
    githubLink: string;
    slug: string;
};
