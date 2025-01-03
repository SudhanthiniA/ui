import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ShiftconRoutingModule } from './shiftcon-routing.module';
import { ShiftconComponent } from './shiftcon.component';
import { ViewshiftconComponent } from './viewshiftcon/viewshiftcon.component';
import { AddshiftconComponent } from './addshiftcon/addshiftcon.component';


@NgModule({
  declarations: [ShiftconComponent,ViewshiftconComponent, AddshiftconComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShiftconRoutingModule
  ]
})
export class ShiftconModule { }
