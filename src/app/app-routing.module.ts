import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurantes/mcdonalds', pathMatch: 'full' },
  { path: 'restaurantes/:slug/items', redirectTo: '/restaurantes/:slug', pathMatch: 'full' },
  { path: 'restaurantes/:slug', component: OrganizationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
