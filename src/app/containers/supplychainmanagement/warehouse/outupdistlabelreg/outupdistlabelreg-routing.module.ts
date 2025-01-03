import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutupdistlabelregComponent } from './outupdistlabelreg.component';
import { AddoutupdistlabelregComponent } from './addoutupdistlabelreg/addoutupdistlabelreg.component';
import { ViewoutupdistlabelregComponent } from './viewoutupdistlabelreg/viewoutupdistlabelreg.component';

const routes: Routes = [
  { path: 'list', component: OutupdistlabelregComponent },
  { path: 'add', component: AddoutupdistlabelregComponent },
  { path: 'edit/:id', component: AddoutupdistlabelregComponent },
  { path: 'view/:id', component: ViewoutupdistlabelregComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutupdistlabelregRoutingModule { }
