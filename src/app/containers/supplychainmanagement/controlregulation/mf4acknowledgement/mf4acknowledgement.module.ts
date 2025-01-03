import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf4acknowledgementRoutingModule } from './mf4acknowledgement-routing.module';
import { Mf4acknowledgementComponent } from './mf4acknowledgement.component';

@NgModule({
  declarations: [Mf4acknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf4acknowledgementRoutingModule
  ]
})
export class Mf4acknowledgementModule { }
