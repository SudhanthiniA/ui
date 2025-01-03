import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptconsuptionComponent } from './receiptconsuption.component';

const routes: Routes = [{ path: 'list', component: ReceiptconsuptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptconsuptionRoutingModule { }
