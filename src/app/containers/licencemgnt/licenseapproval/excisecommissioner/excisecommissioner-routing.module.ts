
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcisecommissionerComponent } from './excisecommissioner.component';

import { EditexcisecommissionerComponent } from './editexcisecommissioner/editexcisecommissioner.component';

const routes: Routes = [
 
  {
    path : 'view',
    component : EditexcisecommissionerComponent
  },
  {
    path : '',
    component : ExcisecommissionerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcisecommissionerRoutingModule { }
