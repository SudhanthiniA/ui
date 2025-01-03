import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupmasterComponent } from './groupmaster.component';
import { AddgroupmasterComponent } from './addgroupmaster/addgroupmaster.component';
import { ViewgroupmasterComponent } from './viewgroupmaster/viewgroupmaster.component';

const routes: Routes = [
  { path: 'list', component: GroupmasterComponent },
  { path: 'add', component: AddgroupmasterComponent },
  { path: 'view', component: ViewgroupmasterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupmasterRoutingModule { }
