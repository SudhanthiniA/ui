import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from './district.component';
import { AddDistrictComponent } from './add-district/add-district.component';
import { ViewDistrictComponent } from './view-district/view-district.component';
const routes: Routes = [
  {
    path: 'list',
    component: DistrictComponent
  },
  {
    path: 'add',
    component: AddDistrictComponent
  },
  {
    path: 'edit/:id',
    component: AddDistrictComponent
  },
  {
    path: 'view',
    component: ViewDistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
