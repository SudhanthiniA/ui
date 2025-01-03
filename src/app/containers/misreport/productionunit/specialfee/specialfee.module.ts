import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SpecialfeeRoutingModule } from './specialfee-routing.module';
import { SpecialfeeComponent } from './specialfee.component';



@NgModule({
  declarations: [SpecialfeeComponent],
  imports: [
    CommonModule,
    SharedModule,
    SpecialfeeRoutingModule
  ]
})
export class SpecialfeeModule { }
