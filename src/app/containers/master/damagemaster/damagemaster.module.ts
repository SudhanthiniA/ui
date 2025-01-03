import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamagemasterComponent } from './damagemaster.component';
import { AdddamagemasterComponent } from './adddamagemaster/adddamagemaster.component';
import { ViewdamagemasterComponent } from './viewdamagemaster/viewdamagemaster.component';
import { DamagemasterRoutingModule } from './damagemaster-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [DamagemasterComponent, AdddamagemasterComponent, ViewdamagemasterComponent],
  imports: [
    CommonModule,
    DamagemasterRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class DamagemasterModule { }
