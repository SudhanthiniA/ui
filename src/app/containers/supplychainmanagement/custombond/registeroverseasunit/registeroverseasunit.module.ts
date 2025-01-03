import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RegisteroverseasunitRoutingModule } from './registeroverseasunit-routing.module';
import { RegisteroverseasunitComponent } from './registeroverseasunit.component';

@NgModule({
  declarations: [RegisteroverseasunitComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisteroverseasunitRoutingModule
  ]
})
export class RegisteroverseasunitModule { }
