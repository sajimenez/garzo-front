import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item'
import {SelectItem} from 'primeng/api';

const CAT = [
  {label: 'Hamburguesas', value: 'h'},
  {label: 'Combos', value: 'c'},
]; 

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  categories: SelectItem[] = CAT;
  selectedCategory: string;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
