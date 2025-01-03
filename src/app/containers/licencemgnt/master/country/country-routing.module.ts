import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { ViewcountryComponent } from './viewcountry/viewcountry.component';

const routes: Routes = [
  {
    path : 'list',
    component : CountryComponent
  },
  {
    path : 'view',
    component : ViewcountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
