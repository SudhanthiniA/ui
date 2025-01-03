import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { PlanestimationapplicationRoutingModule } from './planestimationapplication-routing.module';
import { PlanestimationapplicationComponent } from './planestimationapplication.component';
import { AddplanestimationapplicationComponent } from './addplanestimationapplication/addplanestimationapplication.component';
import { ViewplanestimationapplicationComponent } from './viewplanestimationapplication/viewplanestimationapplication.component';


@NgModule({
  declarations: [PlanestimationapplicationComponent,   AddplanestimationapplicationComponent,
    ViewplanestimationapplicationComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlanestimationapplicationRoutingModule
  ]
})
export class PlanestimationapplicationModule { }
