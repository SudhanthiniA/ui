import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImportpermitstatusRoutingModule } from './importpermitstatus-routing.module';
import { ImportpermitstatusComponent } from './importpermitstatus.component';
import { AddimportpermitstatusComponent } from './addimportpermitstatus/addimportpermitstatus.component';
import { ViewimportpermitstatusComponent } from './viewimportpermitstatus/viewimportpermitstatus.component';

@NgModule({
  declarations: [ImportpermitstatusComponent, AddimportpermitstatusComponent, ViewimportpermitstatusComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImportpermitstatusRoutingModule
  ]
})
export class ImportpermitstatusModule { }
