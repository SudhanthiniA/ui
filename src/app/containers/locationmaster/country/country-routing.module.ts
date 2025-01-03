import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ViewCountryComponent } from './view-country/view-country.component';
const routes: Routes = [
  { path: 'list', component: CountryComponent },
  { path: 'add', component: AddCountryComponent },
  { path: 'edit/:id', component: AddCountryComponent },
  { path: 'view', component: ViewCountryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
