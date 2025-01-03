import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchnewComponent } from './dispatchnew.component';
import { AdddispatchComponent } from './adddispatch/adddispatch.component';
import { ViewdispatchComponent } from './viewdispatch/viewdispatch.component';

const routes: Routes = [
  { path: 'list', component: DispatchnewComponent },
  { path: 'add', component: AdddispatchComponent },
   { path: 'view', component: ViewdispatchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchnewRoutingModule { }
