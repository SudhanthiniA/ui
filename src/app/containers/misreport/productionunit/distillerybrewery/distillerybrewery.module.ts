import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DistillerybreweryRoutingModule } from './distillerybrewery-routing.module';
import { DistillerybreweryComponent } from './distillerybrewery.component';



@NgModule({
  declarations: [DistillerybreweryComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistillerybreweryRoutingModule
  ]
})
export class DistillerybreweryModule { }
