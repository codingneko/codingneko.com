import { SafeUrl } from '@angular/platform-browser';

export interface Service {
    name: string;
    description: string;
    image?: string;
    running: boolean;
    url?: string | SafeUrl;
    ip?: string;
}
