import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearComponent } from './year.component';
import { ViewyearComponent } from './viewyear/viewyear.component';
import { AddedityearComponent } from './addedityear/addedityear.component';

const routes: Routes = [
  { path: 'list', component: YearComponent },
  { path: 'add', component: AddedityearComponent },
  { path: 'edit/:id', component: AddedityearComponent },
  { path: 'view/:id', component: ViewyearComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearRoutingModule { }
