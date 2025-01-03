import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitcancelRoutingModule } from './importpermitcancel-routing.module';
import { ImportpermitcancelComponent } from './importpermitcancel.component';
import { AddimportpermitcancelComponent } from './addimportpermitcancel/addimportpermitcancel.component';
import { ViewimportpermitcancelComponent } from './viewimportpermitcancel/viewimportpermitcancel.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';

@NgModule({
  declarations: [ImportpermitcancelComponent, AddimportpermitcancelComponent, ViewimportpermitcancelComponent, ViewapprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitcancelRoutingModule
  ]
})
export class ImportpermitcancelModule { }
