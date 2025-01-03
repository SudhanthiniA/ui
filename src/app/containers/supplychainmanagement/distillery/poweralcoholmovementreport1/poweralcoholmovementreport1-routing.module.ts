import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Poweralcoholmovementreport1Component } from './poweralcoholmovementreport1.component';
import { Addpoweralcoholmovementreport1Component } from './addpoweralcoholmovementreport1/addpoweralcoholmovementreport1.component';
import { Viewpoweralcoholmovementreport1Component } from './viewpoweralcoholmovementreport1/viewpoweralcoholmovementreport1.component';


const routes: Routes = [
  {
    path: 'list',
    component: Poweralcoholmovementreport1Component
 },
  {
  path: 'add',
  component: Addpoweralcoholmovementreport1Component
},
{
path: 'view',
component: Viewpoweralcoholmovementreport1Component
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Poweralcoholmovementreport1RoutingModule { }
