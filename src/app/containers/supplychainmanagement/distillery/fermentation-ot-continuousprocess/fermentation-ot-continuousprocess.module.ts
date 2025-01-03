import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import {FermentationOtContinuousprocessRoutingModule} from './fermentation-ot-continuousprocess-routing.module';
import { FermentationOtContinuousprocessComponent } from './fermentation-ot-continuousprocess.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [FermentationOtContinuousprocessComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FermentationOtContinuousprocessRoutingModule
  ]
})
export class FermentationOtContinuousprocessModule { }
