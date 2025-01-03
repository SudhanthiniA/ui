import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DispatchdistrictComponent } from './dispatchdistrict.component';
import { DispatchdistrictRoutingModule } from './dispatchdistrict-routing.module';
import { ViewdispatchdistrictComponent } from './viewdispatchdistrict/viewdispatchdistrict.component';
import { AdddispatchdistrictComponent } from './adddispatchdistrict/adddispatchdistrict.component';


@NgModule({
  declarations: [DispatchdistrictComponent, ViewdispatchdistrictComponent, AdddispatchdistrictComponent],
  imports: [
    CommonModule,
    DispatchdistrictRoutingModule,
    SharedModule
  ]
})
export class DispatchdistrictModule { }
