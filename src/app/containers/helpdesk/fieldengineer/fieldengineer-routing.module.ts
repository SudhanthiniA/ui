import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldengineerComponent } from './fieldengineer.component';
import { ViewfieldengineerComponent } from './viewfieldengineer/viewfieldengineer.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: 'list', component: FieldengineerComponent },
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewfieldengineerComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldengineerRoutingModule { }
