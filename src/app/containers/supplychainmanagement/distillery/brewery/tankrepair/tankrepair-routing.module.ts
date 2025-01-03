import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TankrepairComponent } from './tankrepair.component';
import { AddtankrepairComponent } from './addtankrepair/addtankrepair.component';
import { ViewtankrepairComponent } from './viewtankrepair/viewtankrepair.component';

const routes: Routes = [
  { path: 'list', component: TankrepairComponent },
{
  path : 'add',
  component : AddtankrepairComponent
},
{
  path : 'view',
  component : ViewtankrepairComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankrepairRoutingModule { }
