import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MstistofspiritComponent } from './mstistofspirit.component';
import { AddmstistofspiritComponent } from './addmstistofspirit/addmstistofspirit.component';
import { ViewmstistofspiritComponent } from './viewmstistofspirit/viewmstistofspirit.component';
import { VerificationmstistofspiritComponent } from './verificationmstistofspirit/verificationmstistofspirit.component';

const routes: Routes = [
  {
    path : 'list',
    component : MstistofspiritComponent
  },
  {
    path: 'add',
    component : AddmstistofspiritComponent
  },
  {
    path: 'view/:Id',
    component : ViewmstistofspiritComponent
  },
  {
    path: 'preview',
    component : ViewmstistofspiritComponent
  },
  {
    path: 'edit/:Id',
    component : AddmstistofspiritComponent
  },
  {
    path: 'view',
    component : VerificationmstistofspiritComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstistofspiritRoutingModule { }
