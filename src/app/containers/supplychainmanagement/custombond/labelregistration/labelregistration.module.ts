import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { LabelregistrationComponent } from './labelregistration.component';
import { AddlabelregistrationComponent } from './addlabelregistration/addlabelregistration.component';
import { ViewlabelregistrationComponent } from './viewlabelregistration/viewlabelregistration.component';
import { LabelregistrationRoutingModule } from './labelregistration-routing.module';

@NgModule({
  declarations: [LabelregistrationComponent, AddlabelregistrationComponent, ViewlabelregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    LabelregistrationRoutingModule
  ]
})
export class LabelregistrationModule { }
