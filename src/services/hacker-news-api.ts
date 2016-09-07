import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject()
export class HackerNewsApi {
    private http: HttpClient;

    constructor(private http: HttpClient) {
        this.http = http.configure(config => {
            .withBaseUrl('https://hacker-news.firebaseio.com/v0/')
        });
    }

    fetchStories(storyType: string): Promise<any> {
        return this.http.fetch(`${storyType}.json`).then(response => response.json());
    }

    fetchItem(id: number): Promise<any> {
        return this.http.fetch(`item/${id}.json`).then(response => response.json());
    }

    fetchUser(id: number): Promise<any> {
        return this.http.fetch(`user/${id}.json`).then(response => response.json());
    }
}
