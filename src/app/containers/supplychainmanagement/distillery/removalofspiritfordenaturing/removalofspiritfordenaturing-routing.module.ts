import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddremovalofspiritfordenaturingComponent } from './addremovalofspiritfordenaturing/addremovalofspiritfordenaturing.component';
import { ViewremovalofspiritfordenaturingComponent } from './viewremovalofspiritfordenaturing/viewremovalofspiritfordenaturing.component';
import { RemovalofspiritfordenaturingComponent } from './removalofspiritfordenaturing.component';

const routes: Routes = [
  { path: 'list', component: RemovalofspiritfordenaturingComponent},
  {path: 'add', component: AddremovalofspiritfordenaturingComponent},
  {path: 'view', component: ViewremovalofspiritfordenaturingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemovalofspiritfordenaturingRoutingModule { }
