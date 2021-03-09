import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  organization: Organization;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getOrganization();
  }

  getOrganization() {
    this.itemService.getOrganization('mcdonalds').subscribe(data => {
      this.organization = data.data.organization;
    });
  }
}
