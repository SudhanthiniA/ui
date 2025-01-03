import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { AddComponent } from './add.component';
import { ViewComponent } from './view/view.component';
import {HomebarlicenseRoutingModule} from './homebarlicense-routing.module';


@NgModule({
  declarations: [AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomebarlicenseRoutingModule
  ]
})
export class HomebarlicenseModule { }
