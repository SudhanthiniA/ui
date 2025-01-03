import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitytypeComponent } from './entitytype.component';
import { ViewentitytypeComponent } from './viewentitytype/viewentitytype.component';

const routes: Routes = [
  {
    path : 'list',
    component : EntitytypeComponent
  },
  {
    path : 'view',
    component : ViewentitytypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitytypeRoutingModule { }
