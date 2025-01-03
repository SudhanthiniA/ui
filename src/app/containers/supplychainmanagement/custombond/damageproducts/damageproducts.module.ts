import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DamageproductsRoutingModule } from './damageproducts-routing.module';
import { DamageproductsComponent } from './damageproducts.component';
import { AdddamageproductsComponent } from './adddamageproducts/adddamageproducts.component';
import { ViewdamageproductsComponent } from './viewdamageproducts/viewdamageproducts.component';


@NgModule({
  declarations: [DamageproductsComponent, AdddamageproductsComponent, ViewdamageproductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DamageproductsRoutingModule
  ]
})
export class DamageproductsModule { }
