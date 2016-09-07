import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia HN';

        config.map([
            { route: [''], name: 'home', moduleId: './components/stories', nav: true, title: 'News' },
            { route: 'news/:page', name: 'news', moduleId: './components/stories', nav: true, title: 'News' },
            { route: 'newest/:page', name: 'newest', moduleId: './components/stories', nav: true, title: 'Newest' },
            { route: 'show/:page', name: 'show', moduleId: './components/stories', nav: true, title: 'Show' },
            { route: 'ask/:page', name: 'ask', moduleId: './components/stories', nav: true, title: 'Ask' },
            { route: 'jobs/:page', name: 'jobs', moduleId: './components/stories', nav: true, title: 'Jobs' },
            { route: 'item/:id', name: 'item', moduleId: './components/item-comments', nav: true, title: 'Item' },
            { route: 'user/:id', name: 'user', moduleId: './components/user', nav: true, title: 'User' }
        ]);
  }
}
