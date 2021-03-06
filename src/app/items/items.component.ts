import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item'
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  categories: SelectItem[];
  selectedCategory: SelectItem;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.categories = [
      {label: 'Hamburguesas', value: 'h'},
      {label: 'Combos', value: 'c'},
    ];
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
