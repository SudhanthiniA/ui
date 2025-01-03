import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottlingfeesregisterComponent } from './bottlingfeesregister.component';
import { AddbottlingfeesregisterComponent } from './addbottlingfeesregister/addbottlingfeesregister.component';
import { ViewbottlingfeesregisterComponent } from './viewbottlingfeesregister/viewbottlingfeesregister.component';

const routes: Routes = [
  {
    path : 'list',
    component : BottlingfeesregisterComponent
  },
  {
    path : 'add',
    component : AddbottlingfeesregisterComponent
  },
  {
    path : 'view',
    component : ViewbottlingfeesregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlingfeesregisterRoutingModule { }
