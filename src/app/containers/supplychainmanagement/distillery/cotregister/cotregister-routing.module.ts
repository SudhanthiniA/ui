import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotregisterComponent } from './cotregister.component';
import { AddcotregisterComponent } from './addcotregister/addcotregister.component';
import { ViewcotregisterComponent } from './viewcotregister/viewcotregister.component';

const routes: Routes = [
  { path: 'list', component: CotregisterComponent },
  { path: 'add', component: AddcotregisterComponent },
   { path: 'view', component: ViewcotregisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotregisterRoutingModule { }
