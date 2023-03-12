import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { MisskeyFile } from 'src/app/services/interfaces/misskey-gallery.interface';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    images: MisskeyFile[] = [];
    startAt: number = 0;

    constructor(private galleryService: GalleryService) {}

    ngOnInit(): void {
        this.galleryService.getImages('9byeky1ban').subscribe((images) => {
            if (images !== undefined) this.images = images;
            this.images.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return -1;
                } else {
                    return 1;
                }
            });
        });
    }

    onPageChange(event: any): void {
        //this is utter garbage but PrimeNG has forced my hand
        this.startAt = event.first;
    }
}
