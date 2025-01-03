import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { DamageproductRoutingModule } from './damageproduct-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DamageproductRoutingModule
  ]
})
export class DamageproductModule { }
