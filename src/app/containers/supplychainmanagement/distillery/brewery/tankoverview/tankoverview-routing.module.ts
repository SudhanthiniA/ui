import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankoverviewComponent } from './tankoverview.component';
import { TankoverviewlistComponent } from './tankoverviewlist/tankoverviewlist.component';
import { ViewtankoverviewComponent } from './viewtankoverview/viewtankoverview.component';
const routes: Routes = [
  {
    path : '',
    component : TankoverviewComponent
  },
  {
    path : 'list',
    component : TankoverviewlistComponent
  },
  {
    path : 'view',
    component : ViewtankoverviewComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankoverviewRoutingModule { }
