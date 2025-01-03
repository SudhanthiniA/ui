import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MwadvancedutyregisterComponent } from './mwadvancedutyregister.component';
import { ViewmwadvancedutyregisterComponent } from './viewmwadvancedutyregister/viewmwadvancedutyregister.component';
import { AddmwadvancedutyregisterComponent } from './addmwadvancedutyregister/addmwadvancedutyregister.component';

const routes: Routes = [
  { path: 'list', component: MwadvancedutyregisterComponent },
  { path: 'view', component: ViewmwadvancedutyregisterComponent },
  { path: 'add', component: AddmwadvancedutyregisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MwadvancedutyregisterRoutingModule { }
