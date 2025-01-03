import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ShiftconfigRoutingModule } from './shiftconfig-routing.module';
import { ShiftconfigComponent } from './shiftconfig.component';
import { AddshiftconfigComponent } from './addshiftconfig/addshiftconfig.component';
import { ViewshiftconfigComponent } from './viewshiftconfig/viewshiftconfig.component';

@NgModule({
  declarations: [ShiftconfigComponent,AddshiftconfigComponent,ViewshiftconfigComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShiftconfigRoutingModule
  ]
})
export class ShiftconfigModule { }
