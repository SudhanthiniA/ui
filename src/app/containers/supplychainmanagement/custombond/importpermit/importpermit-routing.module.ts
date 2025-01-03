import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddimportpermitComponent } from './addimportpermit/addimportpermit.component';
import { ImportpermitComponent } from './importpermit.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { 
    path: 'list', 
  component: ImportpermitComponent
},
  {
    path: 'add', 
    component: AddimportpermitComponent
  },
  {
    path: 'payment', 
    component: PaymentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportpermitRoutingModule { }
