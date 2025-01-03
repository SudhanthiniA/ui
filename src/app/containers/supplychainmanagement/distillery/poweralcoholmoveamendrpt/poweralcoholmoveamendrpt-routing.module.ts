import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoweralcoholmoveamendrptComponent } from './poweralcoholmoveamendrpt.component';
import { AddpoweralcoholmoveamendrptComponent } from './addpoweralcoholmoveamendrpt/addpoweralcoholmoveamendrpt.component';
import { ViewpoweralcoholmoveamendrptComponent } from './viewpoweralcoholmoveamendrpt/viewpoweralcoholmoveamendrpt.component';


const routes: Routes = [
  {
    path: 'list',
    component: PoweralcoholmoveamendrptComponent
 },
  {
  path: 'add',
  component: AddpoweralcoholmoveamendrptComponent
},
{
path: 'view',
component: ViewpoweralcoholmoveamendrptComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoweralcoholmoveamendrptRoutingModule { }
