import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ImpunitregistrationRoutingModule } from './impunitregistration-routing.module';
import { ImpunitregistrationComponent } from './impunitregistration.component';

@NgModule({
  declarations: [ImpunitregistrationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ImpunitregistrationRoutingModule
  ]
})
export class ImpunitregistrationModule { }
