
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DmComponent } from './dm.component';

import { EditdmComponent } from './editdm/editdm.component';

const routes: Routes = [
 
  {
    path : 'view',
    component : EditdmComponent
  },
  {
    path : '',
    component : DmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmRoutingModule { }
