import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { TankmaintainanceRoutingModule } from './tankmaintainance-routing.module';
import { TankmaintainanceComponent } from './tankmaintainance.component';
import { TankmaintainanceviewComponent } from './tankmaintainanceview/tankmaintainanceview.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [TankmaintainanceComponent, TankmaintainanceviewComponent, AddComponent],
  imports: [
    CommonModule,
    TankmaintainanceRoutingModule,
    SharedModule
  ]
})
export class TankmaintainanceModule { }
