import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmdregistrationComponent } from './omdregistration.component';
import { ViewomdregistrationComponent } from './viewomdregistration/viewomdregistration.component';
import { AddomdregistrationComponent } from './addomdregistration/addomdregistration.component';


const routes: Routes = [
  {
    path : 'list',
    component : OmdregistrationComponent
  },
  {
    path : 'view',
    component : ViewomdregistrationComponent
  },
  {
    path : 'add',
    component : AddomdregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmdregistrationRoutingModule { }
