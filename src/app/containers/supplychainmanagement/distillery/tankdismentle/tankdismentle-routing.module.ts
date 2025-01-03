import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankdismentleComponent } from './tankdismentle.component';
import { AddtankdismentleComponent } from './addtankdismentle/addtankdismentle.component';
import { ViewtankdismentleComponent } from './viewtankdismentle/viewtankdismentle.component';

const routes: Routes = [
  {
    path : 'list',
    component : TankdismentleComponent
  },
{
  path : 'add',
  component : AddtankdismentleComponent
},
{
  path : 'view',
  component : ViewtankdismentleComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankdismentleRoutingModule { }
