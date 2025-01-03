import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitcancelRoutingModule } from './importpermitcancel-routing.module';
import { ImportpermitcancelComponent } from './importpermitcancel.component';
import { AddimportpermitcancelComponent } from './addimportpermitcancel/addimportpermitcancel.component';
import { ViewimportpermitcancelComponent } from './viewimportpermitcancel/viewimportpermitcancel.component';

@NgModule({
  declarations: [ImportpermitcancelComponent, AddimportpermitcancelComponent, ViewimportpermitcancelComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitcancelRoutingModule
  ]
})
export class IndentrequestModule { }
