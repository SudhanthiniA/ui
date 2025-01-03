import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportpermitOutsideUpRoutingModule } from './importpermit-outside-up-routing.module';
import { ImportpermitOutsideUpComponent } from './importpermit-outside-up.component';
import { AddImportpermitComponent } from './add-importpermit/add-importpermit.component';
import { ViewImportpermitComponent } from './view-importpermit/view-importpermit.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ImportpermitOutsideUpComponent, AddImportpermitComponent, ViewImportpermitComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    ImportpermitOutsideUpRoutingModule
  ]
})
export class ImportpermitOutsideUpModule { }
