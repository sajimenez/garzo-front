import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item'

const ITEMS = [
  { id: 1,
    name: 'BigMac',
    description: 'Hamburguesa doble aaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    price: '1990', category: 'Hamburguesas', image: 'https://www.eluniversal.com.mx/sites/default/files/2016/08/18/gastrohamburguesa.jpg'
  },
  { id: 2, name: 'McNifica', description: 'Hamburguesa simple',
    price: '2990', category: 'Hamburguesas', image: 'https://www.eluniversal.com.mx/sites/default/files/2016/08/18/gastrohamburguesa.jpg'
  },
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
