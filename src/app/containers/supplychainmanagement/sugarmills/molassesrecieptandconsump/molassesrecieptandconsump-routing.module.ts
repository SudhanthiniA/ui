import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MolassesrecieptandconsumpComponent } from './molassesrecieptandconsump.component';
import { ViewmolassesandconsumptionComponent } from './viewmolassesandconsumption/viewmolassesandconsumption.component';
import { AddeditmolassesandconsumptionComponent } from './addeditmolassesandconsumption/addeditmolassesandconsumption.component';


const routes: Routes = [

  {
    path : 'list',
    component : MolassesrecieptandconsumpComponent
  },
  {
    path : 'add',
    component : AddeditmolassesandconsumptionComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditmolassesandconsumptionComponent
  },
  {
    path : 'view/:Id',
    component : ViewmolassesandconsumptionComponent
  },
  {
    path : 'preview',
    component : ViewmolassesandconsumptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MolassesrecieptandconsumpRoutingModule { }
