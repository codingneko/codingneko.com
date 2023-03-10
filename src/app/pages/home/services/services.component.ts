import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Service } from 'src/app/services/interfaces/service.interface';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
    services: Service[] = [];

    constructor(private sanitiser: DomSanitizer) {}

    ngOnInit() {
        this.services = [
            {
                name: 'Misskey Instance',
                description: `A personal misskey instance meant to host myself on fedi,
                            it's not really open to sign-ups, but I may allow a friend or two to use it if really needed`,
                running: true,
                image: 'assets/service-images/misskey.png',
                url: 'https://misskey.codingneko.com',
            },
            {
                name: 'TeamSpeak server',
                description: `A teampseak server I host for me and my friends to play mostly CS:GO.
                            You might encounter random persons hanging about in the public rooms, which you might enter without authorisation.
                            You'll need a key to access the private area, so hit me up if you want one :)`,
                running: true,
                image: 'assets/service-images/ts3.png',
                url: this.sanitize('ts3server://codingneko.com'),
            },
        ];
    }

    sanitize(url: string) {
        return this.sanitiser.bypassSecurityTrustUrl(url);
    }
}
