import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditConsuptionComponent } from './addedit-consuption/addedit-consuption.component';

import { ConsuptionTypeComponent } from './consuption-type.component';
import { ViewConsuptionComponent } from './view-consuption/view-consuption.component';

const routes: Routes = [
  { path: 'list', component: ConsuptionTypeComponent },
  { path: 'add', component: AddeditConsuptionComponent },
  { path: 'edit/:Id', component: AddeditConsuptionComponent },
  { path: 'view', component: ViewConsuptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsuptionTypeRoutingModule { }
