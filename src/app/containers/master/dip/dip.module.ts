import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DipRoutingModule } from './dip-routing.module';
import { DipComponent } from './dip.component';
import { AdddipComponent } from './adddip/adddip.component';
import { ViewdipComponent } from './viewdip/viewdip.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    DipComponent, 
    AdddipComponent, 
    ViewdipComponent
  ],
  imports: [
    CommonModule,
    DipRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DipModule { }
