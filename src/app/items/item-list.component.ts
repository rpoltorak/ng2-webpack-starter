import {Component, Input} from 'angular2/core';
import {IItem, Item} from './item';

@Component({
    selector: 'item-list',
    templateUrl: './app/items/item-list.html'
})

export class ItemList {
    @Input() items: IItem[];
}