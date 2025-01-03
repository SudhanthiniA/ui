import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwdamagedproductsRoutingModule } from './mwdamagedproducts-routing.module';
import { MwdamagedproductsComponent } from './mwdamagedproducts.component';
import { ViewmwdamagedproductsComponent } from './viewmwdamagedproducts/viewmwdamagedproducts.component';

@NgModule({
  declarations: [MwdamagedproductsComponent, ViewmwdamagedproductsComponent],
  imports: [
    CommonModule,
    MwdamagedproductsRoutingModule,
    SharedModule
  ]
})
export class MwdamagedproductsModule { }
