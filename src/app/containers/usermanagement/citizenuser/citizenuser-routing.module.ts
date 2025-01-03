import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitizenuserComponent } from './citizenuser.component';
import { AddcitizenuserComponent } from './addcitizenuser/addcitizenuser.component';
import { ViewcitizenuserComponent } from './viewcitizenuser/viewcitizenuser.component';

const routes: Routes = [
  {
    path : 'list',
    component : CitizenuserComponent
  },
  {
    path : 'add',
    component : AddcitizenuserComponent
  },
  // {
  //   path : 'edit/:id',
  //   component : AddcitizenuserComponent
  // },
  {
    path : 'view',
    component : ViewcitizenuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenuserRoutingModule { }
