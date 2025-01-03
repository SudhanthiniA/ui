import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistillerytypeComponent } from './distillerytype.component';
import { AdddistillerytypeComponent } from './adddistillerytype/adddistillerytype.component';
import { ViewdistillerytypeComponent } from './viewdistillerytype/viewdistillerytype.component';
import { DistillerytypeRoutingModule } from './distillerytype-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [DistillerytypeComponent, AdddistillerytypeComponent, ViewdistillerytypeComponent],
  imports: [
    CommonModule,
    DistillerytypeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DistillerytypeModule { }
