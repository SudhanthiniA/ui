import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { EntitywiseanprdetailsComponent } from './entitywiseanprdetails.component';

const routes: Routes = [
  {
    path : 'list',
    component : EntitywiseanprdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitywiseanprdetailsRoutingModule { }
