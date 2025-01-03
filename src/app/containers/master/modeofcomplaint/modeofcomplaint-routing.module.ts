import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeofcomplaintComponent } from './modeofcomplaint.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: ModeofcomplaintComponent },
  { path: 'add', component: AddComponent },
  // { path: 'edit/:id', component: AddeditModeofcomplaintComponent },
  { path: 'view', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeofcomplaintRoutingModule { }
