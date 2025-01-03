import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitnewupapprovalRoutingModule } from './importpermitnewup-routing.module';
import { ImportpermitnewupComponent } from './importpermitnewup.component';
import { AddimportpermitnewupComponent } from './addimportpermitnewup/addimportpermitnewup.component';
import { ViewimportpermitnewupComponent } from './viewimportpermitnewup/viewimportpermitnewup.component';
import { ImportpermitnewupsuccComponent } from './importpermitnewupsucc/importpermitnewupsucc.component';


@NgModule({
  declarations: [ImportpermitnewupComponent, AddimportpermitnewupComponent, ViewimportpermitnewupComponent, ImportpermitnewupsuccComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitnewupapprovalRoutingModule
  ]
})
export class ImportpermitnewupapprovalModule { }
