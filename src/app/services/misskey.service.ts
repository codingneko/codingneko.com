import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from 'src/environments/constants';
import { map, Observable } from 'rxjs';

import {
    MisskeyFile,
    MisskeyGallery,
} from './interfaces/misskey-gallery.interface';

@Injectable({
    providedIn: 'root',
})
export class MisskeyService {
    constructor(private http: HttpClient) {}

    getImagesFromGallery(
        galleryId: string
    ): Observable<MisskeyFile[] | undefined> {
        return this.http
            .post<MisskeyGallery[]>(
                constants.misskeyApiUrl + '/gallery/posts',
                {
                    i: constants.misskeyAuthToken,
                }
            )
            .pipe(
                map(
                    (mg) => mg.find((gallery) => gallery.id == galleryId)?.files
                )
            );
    }

    getFilesFromFolder(
        folderId: string
    ): Observable<MisskeyFile[] | undefined> {
        return this.http.post<MisskeyFile[]>(
            constants.misskeyApiUrl + '/drive/files',
            {
                i: constants.misskeyAuthToken,
                folderId: folderId,
                limit: 100,
            }
        );
    }
}
