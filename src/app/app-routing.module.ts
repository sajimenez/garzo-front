import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurantes/mcdonalds', pathMatch: 'full' },
  { path: 'restaurantes/:slug/items', redirectTo: '/restaurantes/:slug', pathMatch: 'full' },
  { path: 'restaurantes/:slug', component: OrganizationDetailComponent },
  { path: 'restaurantes/:slug/items/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
