import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ManufactureplanestimationofbasewineapplicationRoutingModule } from './manufactureplanestimationofbasewineapplication-routing.module';
import { ManufactureplanestimationofbasewineapplicationComponent } from './manufactureplanestimationofbasewineapplication.component';
import { AddplanestimationapplicationComponent } from './addplanestimationapplication/addplanestimationapplication.component';
import { ViewplanestimationapplicationComponent } from './viewplanestimationapplication/viewplanestimationapplication.component';


@NgModule({
  declarations: [ManufactureplanestimationofbasewineapplicationComponent,   AddplanestimationapplicationComponent,
    ViewplanestimationapplicationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManufactureplanestimationofbasewineapplicationRoutingModule
  ]
})
export class ManufactureplanestimationofbasewineapplicationModule { }
