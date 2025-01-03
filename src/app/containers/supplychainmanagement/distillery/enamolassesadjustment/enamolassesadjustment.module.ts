import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { EnamolassesadjustmentRoutingModule } from './enamolassesadjustment-routing.module';
import { EnamolassesadjustmentComponent } from './enamolassesadjustment.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [EnamolassesadjustmentComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    EnamolassesadjustmentRoutingModule,
    SharedModule
  ]
})
export class EnamolassesadjustmentModule { }
