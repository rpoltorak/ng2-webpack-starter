import {Component} from 'angular2/core';
import {IItem} from './item';
import {ItemService} from './item.service';
import {ItemList} from './item-list.component';

@Component({
    selector: 'items-page',
    templateUrl: './app/items/items-page.html',
    directives: [ItemList],
    providers: [ItemService]
})

export class ItemsPage {
    public items: IItem[];
    
    constructor(private _itemService: ItemService) {
        this.items = _itemService.getItems();
    }
    
}