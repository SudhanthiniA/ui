import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@appThemeShared/shared.module';
import { QuotaComponent } from './quota.component';
import { QuotaRoutingModule } from './quota-routing.module';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [QuotaComponent, AddComponent],
  imports: [
    CommonModule,
    QuotaRoutingModule,
    SharedModule
  ]
})
export class QuotaModule { }
