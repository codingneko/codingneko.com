import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { GithubResponse } from './interfaces/GithubResponse.interface';
import { Project } from './interfaces/project.interface';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    getProjects(): Observable<Project[]> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set(
            'Authorization',
            'Bearer ' + environment.githubAuthToken
        );

        return this.http
            .post<GithubResponse>(
                'https://api.github.com/graphql',
                JSON.stringify({
                    query: `
                    {
                        user(login: "codingneko") {
                            pinnedItems(first: 6, types: REPOSITORY) {
                                nodes {
                                        ... on Repository {
                                            name,
                                            description,
                                            url
                                    }
                                }
                            }
                        }
                    }
                `,
                }),
                {
                    headers: headers,
                }
            )
            .pipe(map((gr) => gr.data.user.pinnedItems.nodes));
    }
}
