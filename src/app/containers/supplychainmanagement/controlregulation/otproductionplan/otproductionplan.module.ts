import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtproductionplanComponent } from './otproductionplan.component';
import { AddotproductionplanComponent } from './addotproductionplan/addotproductionplan.component';
import { ViewotproductionplanComponent } from './viewotproductionplan/viewotproductionplan.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { OtproductionplanRoutingModule } from './otproductionplan-routing.module';


@NgModule({
  declarations: [OtproductionplanComponent, AddotproductionplanComponent, ViewotproductionplanComponent],
  imports: [
    CommonModule,
    SharedModule,
    OtproductionplanRoutingModule
  ]
})
export class OtproductionplanModule { }
