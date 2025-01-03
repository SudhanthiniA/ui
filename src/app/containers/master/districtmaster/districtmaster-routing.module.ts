import { ViewdistrictComponent } from './viewdistrict/viewdistrict.component';
import { AddeditdistrictComponent } from './addeditdistrict/addeditdistrict.component';
import { DistrictmasterComponent } from './districtmaster.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'list',
    component : DistrictmasterComponent
  },
  {
    path : 'add',
    component : AddeditdistrictComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditdistrictComponent
  },
  {
    path : 'view/:Id',
    component : ViewdistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictmasterRoutingModule { }
