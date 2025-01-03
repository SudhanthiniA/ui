import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExciseofficerlistRoutingModule } from './exciseofficerlist-routing.module';
import { ExciseofficerlistComponent } from './exciseofficerlist.component';
import { ViewinspectionComponent } from './viewinspection/viewinspection.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    ExciseofficerlistComponent, 
    ViewinspectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExciseofficerlistRoutingModule
  ]
})
export class ExciseofficerlistModule { }
