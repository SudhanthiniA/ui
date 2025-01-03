import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DamagemissingproductsRoutingModule } from './damagemissingproducts-routing.module';
import { DamagemissingproductsComponent } from './damagemissingproducts.component';
import { ViewdamagemissingproductsComponent } from './viewdamagemissingproducts/viewdamagemissingproducts.component';

@NgModule({
  declarations: [DamagemissingproductsComponent, ViewdamagemissingproductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DamagemissingproductsRoutingModule
  ]
})
export class DamagemissingproductsModule { }
