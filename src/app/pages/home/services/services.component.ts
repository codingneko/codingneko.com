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
            {
                name: 'Mumble server',
                description: `A mumble server I host for me and my friends to talk over a FOSS platform, we barely use it to be honest.`,
                running: true,
                image: 'assets/service-images/mumble.png',
                url: this.sanitize('mumble://codingneko.com'),
            },
            {
                name: 'Matrix server',
                description: `A Matrix IM server I host, just like with Misskey, this is meant to be a one user instance, so signing up is disallowed.`,
                running: true,
                image: 'assets/service-images/matrix.jpg',
                url: 'https://matrix.codingneko.com',
            },
            {
                name: 'Minecraft server',
                description: `A dumb minecraft server to play with your friends (and me, can I be your friend? >~<) the IP is mc.codingneko.com`,
                running: true,
                image: `assets/service-images/minecraft.jpg`,
            },
            {
                name: 'Agar.io server',
                description: `A custom Agar.io server, yes, unironically xd`,
                running: true,
                image: `assets/service-images/agario.png`,
                url: 'https://agar.codingneko.com',
            },
        ];
    }

    sanitize(url: string) {
        return this.sanitiser.bypassSecurityTrustUrl(url);
    }
}
