import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Saletofl11Component } from './saletofl11.component';
import { Addsaletofl11Component } from './addsaletofl11/addsaletofl11.component';
import { Viewsaletofl11Component } from './viewsaletofl11/viewsaletofl11.component';

const routes: Routes = [
  { path: 'list', component: Saletofl11Component },
  { path: 'add', component: Addsaletofl11Component },
  { path: 'view', component: Viewsaletofl11Component }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Saletofl11RoutingModule { }
