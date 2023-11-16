import { Component, OnInit } from '@angular/core';
import { MisskeyService } from 'src/app/services/misskey.service';
import { MisskeyFile } from 'src/app/services/interfaces/misskey.interface';
import { constants } from 'src/constants';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    images: MisskeyFile[] = [];
    startAt: number = 0;

    constructor(private misskeyService: MisskeyService) {}

    ngOnInit(): void {
        this.misskeyService
            .getFilesFromFolder(constants.misskeyFolderId)
            .subscribe((images) => {
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
