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

    constructor(private galleryService: GalleryService) {}

    ngOnInit(): void {
        this.galleryService.getImages().subscribe((images) => {
            this.images = images;
            console.log(images);
        });
    }
}