import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonregisterbrandforoverseasRoutingModule } from './nonregisterbrandforoverseas-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { NonregisterbrandforoverseasComponent } from './nonregisterbrandforoverseas.Component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [NonregisterbrandforoverseasComponent,AddComponent],
  imports: [
    CommonModule,
    SharedModule,
    NonregisterbrandforoverseasRoutingModule,
   
  ]
})
export class NonregisterbrandforoverseasModule { }
