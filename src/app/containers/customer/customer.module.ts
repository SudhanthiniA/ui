import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProfLabValComponent } from '@app/_shared/components/prof-lab-val/prof-lab-val.component';

import { CustomerRoutingModule, customerRoutingComponents } from './customer-routing.module';

@NgModule({
  declarations: [
    ProfLabValComponent,
    customerRoutingComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
