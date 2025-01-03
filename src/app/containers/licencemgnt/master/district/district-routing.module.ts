import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from './district.component';
import { ViewdistrictComponent } from './viewdistrict/viewdistrict.component';

const routes: Routes = [
  {
    path : 'list',
    component : DistrictComponent
  },
  {
    path : 'view',
    component : ViewdistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
