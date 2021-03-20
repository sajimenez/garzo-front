import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  organization: Organization;
  slug: string;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.getOrganization();
  }

  getOrganization() {
    this.itemService.getOrganization(this.slug).subscribe(data => {
      this.organization = data.data.organization;
    });
  }
}
