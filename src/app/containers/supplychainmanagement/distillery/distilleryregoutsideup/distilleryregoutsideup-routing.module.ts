import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistilleryregoutsideupComponent } from './distilleryregoutsideup.component';
import { AdddistilleryregoutsideupComponent } from './adddistilleryregoutsideup/adddistilleryregoutsideup.component';
import { ViewdistilleryregoutsideupComponent } from './viewdistilleryregoutsideup/viewdistilleryregoutsideup.component';


const routes: Routes = [
  {
    path: 'list',
    component: DistilleryregoutsideupComponent
  },
  {
  path: 'add',
  component: AdddistilleryregoutsideupComponent
},
{
path: 'view',
component: ViewdistilleryregoutsideupComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistilleryregoutsideupRoutingModule { }
