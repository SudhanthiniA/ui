import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SampletestfeesRoutingModule } from './sampletestfees-routing.module';
import { SampletestfeesComponent } from './sampletestfees.component';
import { AddsampletestfeesComponent } from './addsampletestfees/addsampletestfees.component';
import { EditsampletestfeesComponent } from './editsampletestfees/editsampletestfees.component';
import { ViewsampletestfeesComponent } from './viewsampletestfees/viewsampletestfees.component';



@NgModule({
  declarations: [SampletestfeesComponent, AddsampletestfeesComponent, EditsampletestfeesComponent, ViewsampletestfeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    SampletestfeesRoutingModule
  ]
})
export class SampletestfeesModule { }
