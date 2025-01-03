import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranspassgenerationComponent } from './transpassgeneration.component';
import { AddtranspassgenerationComponent } from './addtranspassgeneration/addtranspassgeneration.component';
import { ViewtranspassgenerationComponent } from './viewtranspassgeneration/viewtranspassgeneration.component';
import { CancelmodifyComponent } from './cancelmodify/cancelmodify.component';

const routes: Routes = [
  { path: 'list', component: TranspassgenerationComponent},
  { path: 'add', component: AddtranspassgenerationComponent},
  { path: 'view', component: ViewtranspassgenerationComponent},
  { path: 'cancelmodify', component: CancelmodifyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspassgenerationRoutingModule { }
