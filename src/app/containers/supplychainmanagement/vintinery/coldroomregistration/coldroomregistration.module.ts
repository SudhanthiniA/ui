import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import {ColdroomregistrationRoutingModule} from './coldroomregistration-routing.module';
import { ColdroomregistrationComponent } from './coldroomregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ColdroomregistrationComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ColdroomregistrationRoutingModule
  ]
})
export class ColdroomregistrationModule { }
