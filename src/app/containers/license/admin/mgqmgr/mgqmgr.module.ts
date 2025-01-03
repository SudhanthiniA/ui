import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { MgqmgrRoutingModule } from './mgqmgr-routing.module';
import { DataupdatedComponent } from './dataupdated/dataupdated.component';


import { MgqmgrComponent } from './mgqmgr.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [MgqmgrComponent, AddComponent,DataupdatedComponent],
  imports: [
    CommonModule,
    SharedModule,
    MgqmgrRoutingModule
  ]
})
export class MgqmgrModule { }
