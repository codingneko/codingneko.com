import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from 'src/constants';
import { map, Observable } from 'rxjs';

import {
    MisskeyFile,
    MisskeyGallery,
    MisskeyUser,
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

    getMyAvatar(): Observable<MisskeyUser[]> {
        return this.http.post<MisskeyUser[]>(constants.misskeyApiUrl + '/users/search', {
            i: constants.misskeyAuthToken,
            query: 'cody',
            offset: 0,
            limit: 1,
            origin: 'local',
            detail: false,
        }).pipe();
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

    getEmptyMisskeyUser(): MisskeyUser {
        return {
            id: '',
            name: '',
            username: '',
            host: '',
            avatarUrl: '',
            avatarBlurhash: '',
            isBot: false,
            isCat: false,
            onlineStatus: false,
            description: '',
            createdAt: new Date(),
            emojis: '',
        }
    }
}
