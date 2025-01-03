import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExporttoComponent } from './exportto.component';
import { AddexporttoComponent } from './addexportto/addexportto.component';
import { ViewexporttoComponent } from './viewexportto/viewexportto.component';
import { ExporttoRoutingModule } from './exportto-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ExporttoComponent, AddexporttoComponent, ViewexporttoComponent],
  imports: [
    CommonModule,
    ExporttoRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ExporttoModule { }
