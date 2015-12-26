import '../assets/css/bootstrap.css';
import '../assets/scss/app.scss';

import 'rxjs';
import 'angular2/bundles/angular2-polyfills';

import {bootstrap} from 'angular2/platform/browser'
// import {enableProdMode} from 'angular2/core';

import {AppComponent} from './main/app.component';

// enableProdMode();

document.addEventListener('DOMContentLoaded', () => {
    bootstrap(AppComponent);
});
