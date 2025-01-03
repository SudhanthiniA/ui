import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ImportpermitRoutingModule } from './importpermit-routing.module';

import { ImportpermitComponent } from './importpermit.component';
import { AddImportpermitComponent } from './add-importpermit/add-importpermit.component';
import { ViewImportpermitComponent } from './view-importpermit/view-importpermit.component';


@NgModule({
  declarations: [ImportpermitComponent, AddImportpermitComponent, ViewImportpermitComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitRoutingModule
  ]
})
export class ImportpermitModule { }
