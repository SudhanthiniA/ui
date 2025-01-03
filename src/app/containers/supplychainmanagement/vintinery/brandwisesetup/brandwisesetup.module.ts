import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { brandwisesetupComponent } from './brandwisesetup.component';
import {BrandwisesetupRoutingModule} from './brandwisesetup-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [brandwisesetupComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandwisesetupRoutingModule
  ]
})
export class BrandwisesetupModule { }
