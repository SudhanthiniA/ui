import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutupdistbrandregComponent } from './outupdistbrandreg.component';
import { AddoutupdistbrandregComponent } from './addoutupdistbrandreg/addoutupdistbrandreg.component';
import { ViewoutupdistbrandregComponent } from './viewoutupdistbrandreg/viewoutupdistbrandreg.component';


const routes: Routes = [
  { path: 'list', component: OutupdistbrandregComponent },
  { path: 'add', component: AddoutupdistbrandregComponent },
  { path: 'edit/:id', component: AddoutupdistbrandregComponent },
  { path: 'view/:id', component: ViewoutupdistbrandregComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutupdistbrandregRoutingModule { }
