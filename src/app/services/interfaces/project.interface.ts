export interface Project {
    name: string;
    description: string;
    url: string;
    homepageUrl: string;
    customProjectInformation?: CustomProjectInformation;
}

interface CustomProjectInformation {
    image?: string;
    description?: string;
}
