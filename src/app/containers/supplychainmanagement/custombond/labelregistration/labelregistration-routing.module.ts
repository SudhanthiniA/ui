import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelregistrationComponent } from './labelregistration.component';
import { AddlabelregistrationComponent } from './addlabelregistration/addlabelregistration.component';
import { ViewlabelregistrationComponent } from './viewlabelregistration/viewlabelregistration.component';

const routes: Routes = [
  { path: 'list', component: LabelregistrationComponent },
  { path: 'add', component: AddlabelregistrationComponent },
  { path: 'view', component: ViewlabelregistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LabelregistrationRoutingModule { }
