import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddorderpickComponent } from './addorderpick/addorderpick.component';
import { VieworderpickComponent } from './vieworderpick/vieworderpick.component'; 
import { OrderpickComponent } from './orderpick.component';   

const routes: Routes = [ 
  {
    path : 'add',
    component : AddorderpickComponent
  },
  {
    path : 'view',
    component : VieworderpickComponent
  },
  {
    path : 'list',
    component : OrderpickComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickRoutingModule { }
