import { Component, OnInit } from '@angular/core';
import { MisskeyUser } from 'src/app/services/interfaces/misskey-gallery.interface';

import Social from 'src/app/services/interfaces/social.interface';
import { MisskeyService } from 'src/app/services/misskey.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

    socials: Social[] = [];
    miUser: MisskeyUser = this.misskeyService.getEmptyMisskeyUser();

    constructor(private misskeyService: MisskeyService) {}

    ngOnInit(): void {
        this.socials = [
            {
                username: '@cody@catboy.baby',
                website: 'Sharkey',
                link: 'https://catboy.baby/@cody',
                logo: 'assets/sm-logos/catboy-baby.png'
            },
            {
                username: '@codingneko',
                website: 'Twitter',
                link: 'https://twitter.com/codingneko',
                description: 'Hibiki is waifu ✩ CEO of Hot takes Ltd. ✩ codingneko.eth (I guess) ✩ I\'m a cat, avoid calling me a dog please ♡ ',
                image: 'https://pbs.twimg.com/profile_images/1666454402465505285/Gb549q1h_400x400.png',
                logo: 'assets/sm-logos/twitter.webp'
            },
            {
                username: 'CodingNeko',
                website: 'Steam',
                link: 'https://steamcommunity.com/id/codingneko',
                description: `Please do not add me to trade, if you want to trade send an offer to this
                            tradelink https://steamcommunity.com/tradeoffer/new/?partner=105946216&token=l_xTby5i`,
                logo: 'assets/sm-logos/steam.png'
            },
            {
                username: 'codingneko',
                website: 'Telegram',
                link: 'https://t.me/codingneko',
                image: 'assets/tg-avatar.gif',
                logo: 'assets/sm-logos/telegram.webp'
            }
        ];

        this.misskeyService.getMyAvatar().subscribe({
            next: users => {
                this.miUser = users[0];
                this.socials[0].image = this.miUser.avatarUrl;
                this.socials[0].displayName = this.miUser.name;
                this.socials[0].description = this.miUser.description;
            }
        })
    }
}
