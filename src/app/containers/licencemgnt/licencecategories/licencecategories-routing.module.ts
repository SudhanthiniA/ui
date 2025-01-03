import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicencecategoriesComponent } from './licencecategories.component';


const routes: Routes = [
  {
    path : '',
    component : LicencecategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicencecategoriesRoutingModule { }
