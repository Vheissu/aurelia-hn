import { autoinject, bindable } from 'aurelia-framework';
import { HackerNewsApi } from './services/hacker-news-api';

@autoinject()
export class Item {
    private _hackerNewsAPIService: HackerNewsApi;
    private item;

    @bindable itemId;
    
    constructor(private _hackerNewsAPIService: HackerNewsApi) {
        this._hackerNewsAPIService = _hackerNewsAPIService;
    }

    attached() {
        this._hackerNewsAPIService.fetchItem(this.itemId).then(data => {
            this.item = data;
        });
    }

}
