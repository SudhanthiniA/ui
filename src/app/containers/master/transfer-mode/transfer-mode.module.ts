import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { TransferModeRoutingModule } from './transfer-mode-routing.module';
import { TransferModeComponent } from './transfer-mode.component';
import { AddEditTransferModeComponent } from './add-edit-transfer-mode/add-edit-transfer-mode.component';
import { ViewTransferModeComponent } from './view-transfer-mode/view-transfer-mode.component';

@NgModule({
  declarations: [TransferModeComponent, AddEditTransferModeComponent, ViewTransferModeComponent],
  imports: [
    CommonModule,
    TransferModeRoutingModule,
    SharedModule,
    DataTablesModule,
  ]
})
export class TransferModeModule { }
