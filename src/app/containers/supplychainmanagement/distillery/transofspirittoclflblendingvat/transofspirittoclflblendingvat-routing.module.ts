import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransofspirittoclflblendingvatComponent } from './transofspirittoclflblendingvat.component';
import { AddtransofspirittoclflblendingvatComponent } from './addtransofspirittoclflblendingvat/addtransofspirittoclflblendingvat.component';
import { ViewtransofspirittoclflblendingvatComponent } from './viewtransofspirittoclflblendingvat/viewtransofspirittoclflblendingvat.component';

const routes: Routes = [
  {
    path : 'list',
    component : TransofspirittoclflblendingvatComponent
  },
  {
    path: 'add',
    component : AddtransofspirittoclflblendingvatComponent
  },
  {
    path : 'view',
    component : ViewtransofspirittoclflblendingvatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransofspirittoclflblendingvatRoutingModule { }
