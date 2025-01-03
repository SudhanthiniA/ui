import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddpasscancellationComponent } from './addpasscancellation/addpasscancellation.component';
import { ViewpasscancellationComponent } from './viewpasscancellation/viewpasscancellation.component';

import { PasscancellationRoutingModule} from './passcancellation-routing.module';

import { PasscancellationComponent } from './passcancellation.component';
@NgModule({
  declarations: [AddpasscancellationComponent, ViewpasscancellationComponent, PasscancellationComponent],
  imports: [
    CommonModule,
    PasscancellationRoutingModule,
    SharedModule
  ]
})
export class PasscancellationModule { }
