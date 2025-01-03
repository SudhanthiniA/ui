import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrangemasterComponent } from './addrangemaster/addrangemaster.component';
import { ViewrangemasterComponent } from './viewrangemaster/viewrangemaster.component';
import { RangemasterComponent } from './rangemaster.component';
import { RangemasterRoutingModule } from './rangemaster-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [RangemasterComponent, AddrangemasterComponent, ViewrangemasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    RangemasterRoutingModule
  ]
})
export class RangemasterModule { }
