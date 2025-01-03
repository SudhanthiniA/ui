import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LmfeeRoutingModule } from './lmfee-routing.module';
import { DataupdatedComponent } from './dataupdated/dataupdated.component';


import { LmfeeComponent } from './lmfee.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [LmfeeComponent, AddComponent,DataupdatedComponent],
  imports: [
    CommonModule,
    SharedModule,
    LmfeeRoutingModule
  ]
})
export class LmfeeModule { }
