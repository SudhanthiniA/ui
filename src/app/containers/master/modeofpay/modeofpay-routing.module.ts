import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeofpayComponent } from './modeofpay.component';
import { AddeditmodeofpayComponent } from './addeditmodeofpay/addeditmodeofpay.component';
import { ViewmodeofpayComponent } from './viewmodeofpay/viewmodeofpay.component';

const routes: Routes = [
  { path: 'list', component: ModeofpayComponent },
  { path: 'add', component: AddeditmodeofpayComponent },
  { path: 'edit/:id', component: AddeditmodeofpayComponent },
  { path: 'view', component: ViewmodeofpayComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeofpayRoutingModule { }
