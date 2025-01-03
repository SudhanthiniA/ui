import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakepaymentComponent } from './makepayment.component';
import { ViewmakepaymentComponent } from './viewmakepayment/viewmakepayment.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';


const routes: Routes = [
  { path: 'list', component: MakepaymentComponent },
  { path: 'view', component: ViewmakepaymentComponent },
  { path: 'add/:id', component: AddpaymentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakepaymentRoutingModule { }
