import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { RenewalRoutingModule } from './renewal-routing.module';
import { RenewalComponent } from './renewal.component';
import { ViewrenewalComponent } from './viewrenewal/viewrenewal.component';



@NgModule({
  declarations: [RenewalComponent, ViewrenewalComponent,],
  imports: [
    CommonModule,
    SharedModule,
    RenewalRoutingModule
  ]
})
export class RenewalModule { }
