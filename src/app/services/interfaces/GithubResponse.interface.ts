import { Project } from './project.interface';

export interface GithubResponse {
    data: GithubData;
}

interface GithubData {
    user: GithubUser;
}

interface GithubUser {
    pinnedItems: GithubPinnedItem;
}

interface GithubPinnedItem {
    nodes: Project[];
}
