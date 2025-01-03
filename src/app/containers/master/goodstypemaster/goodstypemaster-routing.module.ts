import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodstypemasterComponent } from './goodstypemaster.component';
import { AddgoodstypemasterComponent } from './addgoodstypemaster/addgoodstypemaster.component';
import { ViewgoodstypemasterComponent } from './viewgoodstypemaster/viewgoodstypemaster.component';

const routes: Routes = [
  { path: 'list', component: GoodstypemasterComponent },
  { path: 'add', component: AddgoodstypemasterComponent },
  { path: 'view', component: ViewgoodstypemasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodstypemasterRoutingModule { }
