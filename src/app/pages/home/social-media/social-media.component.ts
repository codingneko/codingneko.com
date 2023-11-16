import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MisskeyUser } from 'src/app/services/interfaces/misskey.interface';

import Social from 'src/app/services/interfaces/social.interface';
import { MisskeyService } from 'src/app/services/misskey.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {

    socials: Social[] = [];
    miUser: MisskeyUser = this.misskeyService.getEmptyMisskeyUser();

    constructor(
        private misskeyService: MisskeyService,
    ) {}

    ngOnInit(): void {
        this.socials = [
            {
                username: '@cody@catboy.baby',
                website: 'Sharkey',
                link: 'https://catboy.baby/@cody',
                logo: 'assets/sm-logos/catboy-baby.png'
            },
            {
                displayName: 'CodingNeko',
                username: '@codingneko',
                website: 'Twitter',
                link: 'https://twitter.com/codingneko',
                image: 'https://pbs.twimg.com/profile_images/1666454402465505285/Gb549q1h_400x400.png',
                logo: 'assets/sm-logos/twitter.webp'
            },
            {
                username: 'CodingNeko',
                website: 'Steam',
                link: 'https://steamcommunity.com/id/codingneko',
                description: `My main gaming platform, I mostly play CS2 these days.`,
                logo: 'assets/sm-logos/steam.png',
                image: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1299120/2c4de42beffc202446ee0cf19d9546e0b36b856f.gif'
            },
            {
                username: 'codingneko',
                displayName: 'Cody Aguilar',
                website: 'Telegram',
                description: 'This has nice stickers. Whatsapp is cringe, and Signal is just as crap but without stickers.',
                link: 'https://t.me/codingneko',
                image: 'assets/tg-avatar.gif',
                logo: 'assets/sm-logos/telegram.webp'
            },
            {
                username: '@CodingNeko',
                website: 'Pronouns.page',
                description: 'This is just a neat website that has info about the pronouns and terms I like being addressed by.',
                link: 'https://en.pronouns.page/@CodingNeko',
                image: 'https://dclu0bpcdglik.cloudfront.net/images/01GW1MG6YBPKS8CSJX8XWPSRMT-avatar.png',
                logo: 'assets/sm-logos/pronouns-page.png'
            }
        ];



        this.misskeyService.getEmojis().subscribe({
            next: emojis => {
                this.misskeyService.getMyAvatar().subscribe({
                    next: users => {
                        this.miUser = users[0];
                        this.socials[0].image = this.miUser.avatarUrl;
                        this.socials[0].displayName = this.misskeyService.doMisskeyEmojis(this.miUser.name, emojis);
                        this.socials[0].description =  this.misskeyService.doMisskeyEmojis(
                            'My main fedi account on my own instance. Go follow me!! :nkoGun:',
                            emojis
                        );
                        this.socials[1].description = this.misskeyService.doMisskeyEmojis(
                            'This account is kind of dead. Preferably don\'t contact me there, use fedi. :ameowree:',
                            emojis
                        );
                    }
                });
            }
        })
    }
}
