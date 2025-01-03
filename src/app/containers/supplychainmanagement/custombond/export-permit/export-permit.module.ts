import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ExportPermitComponent } from './export-permit.component';
import { AddExportPermitComponent } from './add-export-permit/add-export-permit.component';
import { ViewExportPermitComponent } from './view-export-permit/view-export-permit.component';
import { ExportPermitRoutingModule } from './export-permit-routing.module';

@NgModule({
  declarations: [ExportPermitComponent, AddExportPermitComponent, ViewExportPermitComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExportPermitRoutingModule
  ]
})

export class ExportPermitModule { }
