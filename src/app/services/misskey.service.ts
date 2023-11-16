import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from 'src/constants';
import { map, Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
    MisskeyEmoji,
    MisskeyEmojiResponse,
    MisskeyFile,
    MisskeyGallery,
    MisskeyUser,
} from './interfaces/misskey.interface';

@Injectable({
    providedIn: 'root',
})
export class MisskeyService {
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

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
        });
    }

    getEmojis(): Observable<MisskeyEmoji[]> {
        return this.http.post<MisskeyEmojiResponse>(constants.misskeyApiUrl + '/emojis', {
            i: constants.misskeyAuthToken
        }).pipe(
            map(response => response.emojis)
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

    doMisskeyEmojis(text: string, emojis: MisskeyEmoji[]): SafeHtml {

        var result = text;
        emojis.forEach(emoji => {
            result = result.replace(`:${emoji.name}:`, `
                <img
                    src="${emoji.url}" class="mi-emoji"
                    style="
                        width: 1.5rem;
                        height: 1.5rem;
                        background-color: transparent;
                        transform: translateY(0.2rem);
                    "
                >
            `);
        });

        return this.sanitizer.bypassSecurityTrustHtml(result);
    }
}
