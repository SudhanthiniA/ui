import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnfromcustomerComponent } from './returnfromcustomer.component';
import { AddreturnfromcustomerComponent } from './addreturnfromcustomer/addreturnfromcustomer.component';
import { ViewreturnfromcustomerComponent } from './viewreturnfromcustomer/viewreturnfromcustomer.component';
import { ReturnconfirmationComponent } from './returnconfirmation/returnconfirmation.component';

const routes: Routes = [
  { path: '', component: ReturnfromcustomerComponent },
  { path: 'add', component: AddreturnfromcustomerComponent },
  { path: 'view', component: ViewreturnfromcustomerComponent },
  { path: 'returnconfirmation', component: ReturnconfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnfromcustomerRoutingModule { }
