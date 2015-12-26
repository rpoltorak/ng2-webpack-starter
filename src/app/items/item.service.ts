import {Injectable} from 'angular2/core';
import {IItem} from './item';
import {items} from './items.mock';

export interface IItemService {
	getItems(): IItem[];
}

@Injectable()
export class ItemService implements IItemService {
	getItems(): IItem[] {
		return items;
	}
}