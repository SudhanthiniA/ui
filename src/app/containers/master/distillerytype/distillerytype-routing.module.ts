import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistillerytypeComponent } from './distillerytype.component';
import { AdddistillerytypeComponent } from './adddistillerytype/adddistillerytype.component';
import { ViewdistillerytypeComponent } from './viewdistillerytype/viewdistillerytype.component';

const routes: Routes = [
  {
    path: 'list',
    component: DistillerytypeComponent
  },
  {
    path: 'add',
    component: AdddistillerytypeComponent
  },
  {
    path : 'view',
    component: ViewdistillerytypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistillerytypeRoutingModule { }
