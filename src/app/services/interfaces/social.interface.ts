import { SafeHtml } from "@angular/platform-browser";

export default interface Social {
    username: string;
    displayName?: string | SafeHtml;
    website: string;
    link: string;
    image?: string;
    description?: string | SafeHtml;
    logo?: string;
}
