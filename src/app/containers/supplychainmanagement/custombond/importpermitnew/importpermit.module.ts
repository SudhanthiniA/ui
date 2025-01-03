import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ImportpermitRoutingModule } from './importpermit-routing.module';
import { ImportpermitComponent } from './importpermit.component';
import { AddimportpermitComponent } from './addimportpermit/addimportpermit.component';
import { ViewimportpermitComponent } from './viewimportpermit/viewimportpermit.component';
import { ImportpermitsuccessComponent } from './importpermitsuccess/importpermitsuccess.component';
import { EditimportpermitComponent } from './editimportpermit/editimportpermit.component';
import { ListapproverComponent } from './listapprover/listapprover.component';

@NgModule({
  declarations: [ImportpermitComponent, AddimportpermitComponent, ViewimportpermitComponent, ImportpermitsuccessComponent, EditimportpermitComponent, ListapproverComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitRoutingModule,
    NgMultiSelectDropDownModule
  ]
})
export class ImportpermitModule { }
