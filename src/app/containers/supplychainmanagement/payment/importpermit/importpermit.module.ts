import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ImportpermitRoutingModule } from './importpermit-routing.module';
import { ImportpermitComponent } from './importpermit.component';
import { AddimportpermitComponent } from './addimportpermit/addimportpermit.component';
import { EditimportpermitComponent } from './editimportpermit/editimportpermit.component';
import { ViewimportpermitComponent } from './viewimportpermit/viewimportpermit.component';



@NgModule({
  declarations: [ImportpermitComponent, AddimportpermitComponent, EditimportpermitComponent, ViewimportpermitComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitRoutingModule
  ]
})
export class ImportpermitModule { }
