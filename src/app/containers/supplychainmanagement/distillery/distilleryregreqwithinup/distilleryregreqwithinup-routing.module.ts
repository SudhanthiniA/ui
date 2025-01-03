import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistilleryregreqwithinupComponent } from './distilleryregreqwithinup.component';
import { AdddistilleryregreqwithinupComponent } from './adddistilleryregreqwithinup/adddistilleryregreqwithinup.component';
import { ViewdistilleryregreqwithinupComponent } from './viewdistilleryregreqwithinup/viewdistilleryregreqwithinup.component';


const routes: Routes = [
  {
    path: 'list',
    component: DistilleryregreqwithinupComponent
  },
  {
  path: 'add',
  component: AdddistilleryregreqwithinupComponent
},
{
path: 'view',
component: ViewdistilleryregreqwithinupComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistilleryregreqwithinupRoutingModule { }
