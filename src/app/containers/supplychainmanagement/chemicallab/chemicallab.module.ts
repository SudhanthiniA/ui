import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';
import { ChemicallabRoutingModule } from './chemicallab-routing.module';






@NgModule({
  imports: [
    SharedModule,
    ChemicallabRoutingModule
  ],
  providers: [DatePipe],
  declarations: []
})
export class ChemicallabModule { }
