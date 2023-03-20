import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
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
                'https://misskey.codingneko.com/api/gallery/posts',
                {
                    i: environment.misskeyAuthToken,
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
            'https://misskey.codingneko.com/api/drive/files',
            {
                i: environment.misskeyAuthToken,
                folderId: folderId,
            }
        );
    }
}