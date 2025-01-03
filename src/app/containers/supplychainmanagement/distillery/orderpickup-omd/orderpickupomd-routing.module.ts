import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderpickupomdComponent } from './orderpickupomd.component';
import { AddorderpickupomdComponent } from './addorderpickupomd/addorderpickupomd.component';
import { VieworderpickupomdComponent } from './vieworderpickupomd/vieworderpickupomd.component';

const routes: Routes = [
  { path: 'list', component: OrderpickupomdComponent },
{
  path : 'view',
  component : VieworderpickupomdComponent
},
{
  path : 'add',
  component : AddorderpickupomdComponent
},
// {
//   path : 'edit/:id',
//   component : AddPd18IdComponent
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderpickupomdRoutingModule { }
