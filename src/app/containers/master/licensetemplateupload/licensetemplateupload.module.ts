import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { LicensetemplateuploadRoutingModule } from './licensetemplateupload-routing.module';
import { LicensetemplateuploadComponent } from './licensetemplateupload.component';
import { DataTablesModule } from 'angular-datatables';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    LicensetemplateuploadComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    LicensetemplateuploadRoutingModule,
    SharedModule,
    DataTablesModule,
  ]
})
export class LicensetemplateuploadModule { }
