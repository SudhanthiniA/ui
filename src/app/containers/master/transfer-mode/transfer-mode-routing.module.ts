import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferModeComponent } from './transfer-mode.component';

import { AddEditTransferModeComponent } from './add-edit-transfer-mode/add-edit-transfer-mode.component';
import { ViewTransferModeComponent } from './view-transfer-mode/view-transfer-mode.component';

const routes: Routes = [
  { path: 'list', component: TransferModeComponent },
  { path: 'add', component: AddEditTransferModeComponent },
  { path: 'edit/:id', component: AddEditTransferModeComponent },
  { path: 'view', component: ViewTransferModeComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferModeRoutingModule { }
