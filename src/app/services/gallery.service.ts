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
export class GalleryService {
    constructor(private http: HttpClient) {}

    getImages(): Observable<MisskeyFile[]> {
        return this.http
            .post<MisskeyGallery>(
                'https://misskey.codingneko.com/api/gallery/posts',
                {
                    i: environment.misskeyAuthToken,
                }
            )
            .pipe(map((mg) => mg.files));
    }
}
