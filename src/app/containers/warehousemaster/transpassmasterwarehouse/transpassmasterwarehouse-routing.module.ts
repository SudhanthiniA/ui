import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranspassmasterwarehouseComponent } from './transpassmasterwarehouse.component';
import { AddtranspassmasterwarehouseComponent } from './addtranspassmasterwarehouse/addtranspassmasterwarehouse.component';
import { ViewtranspassmasterwarehouseComponent } from './viewtranspassmasterwarehouse/viewtranspassmasterwarehouse.component';
import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';

const routes: Routes = [
  { path: 'list', component: TranspassmasterwarehouseComponent },
  { path: 'add', component: AddtranspassmasterwarehouseComponent },
  { path: 'view', component: ViewtranspassmasterwarehouseComponent },
  { path: 'cancelmodify', component: CancelmodifypassComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspassmasterwarehouseRoutingModule { }
 