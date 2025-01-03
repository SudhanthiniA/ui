import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinaltransportpassComponent } from './finaltransportpass.component';
import { ViewfinaltransportpassComponent } from './viewfinaltransportpass/viewfinaltransportpass.component';

const routes: Routes = [
  {
    path : 'list',
    component : FinaltransportpassComponent
  },
  {
    path: 'view',
    component : ViewfinaltransportpassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinaltransportpassRoutingModule { }
