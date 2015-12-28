import {Component, Input} from 'angular2/core';
import {IItem, Item} from './item';

@Component({
    selector: 'item-list',
    inputs: ['items'],
    templateUrl: './app/items/item-list.html'
})

export class ItemList {
    public items: IItem[];
    
    public remove(id: number): IItem {
        let i: number = this.items.length;
        
        while(i--) {
            let item: IItem = this.items[i];
            
            if (item.id === id) {
                this.items.splice(i, 1);
                return item;    
            }
        }
    }
}