import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SaledistrictwiseRoutingModule } from './saledistrictwise-routing.module';
import { SaledistrictwiseComponent } from './saledistrictwise.component';



@NgModule({
  declarations: [SaledistrictwiseComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaledistrictwiseRoutingModule
  ]
})
export class SaledistrictwiseModule { }
