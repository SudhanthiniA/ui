import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeclarationofplanComponent } from './declarationofplan.component';
import { AddpdtDeclarationFlComponent } from './addpdt-declaration-fl/addpdt-declaration-fl.component';
import { ViewpdtDeclarationFlComponent } from './viewpdt-declaration-fl/viewpdt-declaration-fl.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  { path: 'list', component: DeclarationofplanComponent },
{
  path : 'view',
  component : ViewpdtDeclarationFlComponent
},
// {
//   path : 'edit/:id',
//   component : AddpdtDeclarationFlComponent
// },
{
  path : 'add',
  component : AddpdtDeclarationFlComponent
},
{
  path : 'payment',
  component : PaymentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclarationofplanRoutingModule { }
