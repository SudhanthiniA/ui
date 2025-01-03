import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { UserwiseactivitylogRoutingModule } from './userwiseactivitylog-routing.module';
import { UserwiseactivitylogComponent } from './userwiseactivitylog.component';

@NgModule({
  declarations: [UserwiseactivitylogComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserwiseactivitylogRoutingModule
  ]
})
export class UserwiseactivitylogModule { }
