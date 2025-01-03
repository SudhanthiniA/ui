import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddimportenaoutsidestateComponent } from './addimportenaoutsidestate/addimportenaoutsidestate.component';
import { ViewimportenaoutsidestateComponent } from './viewimportenaoutsidestate/viewimportenaoutsidestate.component';
import { ImportenaoutsidestateComponent } from './importenaoutsidestate.component';

const routes: Routes = [
  { path: 'add', component: AddimportenaoutsidestateComponent},
  {path: 'view', component: ViewimportenaoutsidestateComponent},
  {path: 'list', component: ImportenaoutsidestateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportenaoutsidestateRoutingModule { }
