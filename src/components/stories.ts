import { autoinject } from 'aurelia-framework';
import { HackerNewsApi } from './services/hacker-news-api';

@autoinject()
export class Stories {
    private _hackerNewsAPIService: HackerNewsApi;

    sub: any;
    items;
    indexFrom: number;
    storiesType: string;
    pageNum: number;

    constructor(private _hackerNewsAPIService: HackerNewsApi) {
        this._hackerNewsAPIService = _hackerNewsAPIService;
    }

    activate(params, navigationInstruction) {
        this.pageNum = params.page ? params.page : 1;
        this.indexFrom = ((this.pageNum - 1) * 30);

        if (navigationInstruction.route.includes('newest')) {
            this.storiesType = 'newest';

            this._hackerNewsAPIService.fetchStories('newstories')
                .then(items => this.items = items)
                .catch(error => console.log('Error fetching new stories'));
        } else if (navigationInstruction.route.includes('show')) {
            this.storiesType = 'show';

            this._hackerNewsAPIService.fetchStories('showstories')
                .then(items => this.items = items)
                .catch(error => console.log('Error fetching show stories'));
        } else if (navigationInstruction.route.includes('ask')) {
            this.storiesType = 'ask';

            this._hackerNewsAPIService.fetchStories('askstories')
                .then(items => this.items = items)
                .catch(error => console.log('Error fetching ask stories'));
        } else if (navigationInstruction.route.includes('jobs')) {
            this.storiesType = 'jobs';

            this._hackerNewsAPIService.fetchStories('jobstories')
                .then(items => this.items = items)
                .catch(error => console.log('Error fetching job stories'));
        } else {
            this.storiesType = 'news';

            this._hackerNewsAPIService.fetchStories('topstories')
                .then(items => this.items = items)
                .catch(error => console.log('Error fetching top stories'));
        }
    }   
}
