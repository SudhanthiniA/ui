import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { BrandwisemanufacturesetupComponent } from './brandwisemanufacturesetup.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import {BrandwisemanufacturesetupRoutingModule} from './brandwisemanufacturesetup-routing.module';

@NgModule({
  declarations: [BrandwisemanufacturesetupComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrandwisemanufacturesetupRoutingModule
  ]
})
export class BrandwisemanufacturesetupModule { }
