
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferofbeerComponent } from './transferofbeer.component';
import { AddtransferofbeerComponent } from './addtransferofbeer/addtransferofbeer.component';
import { ViewtransferofbeerComponent } from './viewtransferofbeer/viewtransferofbeer.component';

const routes: Routes = [
  {
    path : 'add',
    component : AddtransferofbeerComponent
  },
  {
    path : 'view',
    component : ViewtransferofbeerComponent
  },
  {
    path : 'list',
    component : TransferofbeerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferofbeerRoutingModule { }
