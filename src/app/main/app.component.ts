import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomePage} from '../home/home-page.component';
import {ItemsPage} from '../items/items-page.component';

@Component({
    selector: 'app',
    templateUrl: './app/main/app.html',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, ItemsPage, HomePage]
})

@RouteConfig([
    { 
        path: '/', 
        name: 'Home', 
        component: HomePage
    },
    { 
        path: '/items', 
        name: 'Items', 
        component: ItemsPage
    },
])

export class AppComponent { }    