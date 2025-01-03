import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NonMovementproductRoutingModule } from './non-movementproduct-routing.module';
import { NonMovementproductComponent } from './non-movementproduct.component';


@NgModule({
  declarations: [NonMovementproductComponent],
  imports: [
    CommonModule,
    SharedModule,
    NonMovementproductRoutingModule
  ]
})
export class NonMovementproductModule { }
