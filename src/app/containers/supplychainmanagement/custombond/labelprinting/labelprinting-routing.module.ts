import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelprintingComponent } from './labelprinting.component';
import { AddlabelprintingComponent } from './addlabelprinting/addlabelprinting.component';
import { ViewlabelprintingComponent } from './viewlabelprinting/viewlabelprinting.component';

const routes: Routes = [
  { path: 'list', component: LabelprintingComponent },
  { path: 'add', component: AddlabelprintingComponent },
  { path: 'view', component: ViewlabelprintingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LabelprintingRoutingModule { }
