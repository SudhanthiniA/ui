import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AdvsearchlicregRoutingModule } from './advsearchlicreg-routing.module';
import { AdvsearchlicregComponent } from './advsearchlicreg.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AdvsearchlicregComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvsearchlicregRoutingModule
  ]
})
export class AdvsearchlicregModule { }
