import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item'
import { Category } from '../category';
import cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  categories: Category[];
  sortField: string;
  sortOrder: number;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems('mcdonalds').subscribe(data => {
      let organization = cloneDeep(data.data.organization);
      this.categories = organization.categories;
      this.items = organization.items;
      this.sortOrder = 1;
      this.sortField = 'category.id';
    });
  }
}
