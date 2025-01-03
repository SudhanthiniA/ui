import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { FermentationNewComponent } from './fermentation-new.component';
import {FermentationNewRoutingModule} from './fermentation-new-routing.module';



@NgModule({
  declarations: [AddComponent, ViewComponent, FermentationNewComponent],
  imports: [
    CommonModule,
    FermentationNewRoutingModule,
    SharedModule
  ]
})
export class FermentationNewModule { }
