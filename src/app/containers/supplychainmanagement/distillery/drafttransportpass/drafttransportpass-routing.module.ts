import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrafttransportpassComponent } from './drafttransportpass.component';
import { AdddrafttransportpassComponent } from './adddrafttransportpass/adddrafttransportpass.component';
import { ViewdrafttransportpassComponent } from './viewdrafttransportpass/viewdrafttransportpass.component';

const routes: Routes = [
  {
    path : 'list',
    component : DrafttransportpassComponent
  },
  {
    path: 'add',
    component : AdddrafttransportpassComponent
  },
  {
    path: 'view',
    component : ViewdrafttransportpassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrafttransportpassRoutingModule { }
