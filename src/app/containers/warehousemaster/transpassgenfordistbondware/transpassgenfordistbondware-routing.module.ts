import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranspassgenfordistbondwareComponent } from './transpassgenfordistbondware.component';
import { AddtranspassgenfordistbondwareComponent } from './addtranspassgenfordistbondware/addtranspassgenfordistbondware.component';
import { ViewtranspassgenfordistbondwareComponent } from './viewtranspassgenfordistbondware/viewtranspassgenfordistbondware.component';
import { SubindenttranspassComponent } from './subindenttranspass/subindenttranspass.component';
import { CancelmodifyComponent } from './cancelmodify/cancelmodify.component';

const routes: Routes = [
  { path: 'list', component: TranspassgenfordistbondwareComponent },
  { path: 'add', component: AddtranspassgenfordistbondwareComponent },
  { path: 'view', component: ViewtranspassgenfordistbondwareComponent },
  { path: 'subindent', component: SubindenttranspassComponent },
  { path: 'cancelmodify', component: CancelmodifyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspassgenfordistbondwareRoutingModule { }
