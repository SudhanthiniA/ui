import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedutyregisterComponent } from './advancedutyregister.component';
import { AddadvancedutyregisterComponent } from './addadvancedutyregister/addadvancedutyregister.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : AdvancedutyregisterComponent
  },
  {
    path : 'add',
    component : AddadvancedutyregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedutyregisterRoutingModule { }
