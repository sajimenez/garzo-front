import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item'

const ITEMS = [
  { id: 1, name: 'BigMac', description: 'Hamburguesa doble', price: '1990', category: 'Hamburguesas'},
  { id: 2, name: 'McNifica', description: 'Hamburguesa simple', price: '2990', category: 'Hamburguesas'},
];


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  } 
}
