import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodetypeComponent } from './codetype.component';
import { AddcodetypeComponent } from './addcodetype/addcodetype.component';
import { ViewcodetypeComponent } from './viewcodetype/viewcodetype.component';

const routes: Routes = [
  { path: 'list', component: CodetypeComponent },
  { path: 'add', component: AddcodetypeComponent },
  { path: 'view', component: ViewcodetypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodetypeRoutingModule { }
