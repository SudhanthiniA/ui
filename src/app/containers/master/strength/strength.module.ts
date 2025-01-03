import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrengthRoutingModule } from './strength-routing.module';
import { StrengthComponent } from './strength.component';
import { AddeditstrengthComponent } from './addeditstrength/addeditstrength.component';
import { ViewstrengthComponent } from './viewstrength/viewstrength.component';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [StrengthComponent, AddeditstrengthComponent, ViewstrengthComponent],
  imports: [
    CommonModule,
    SharedModule,
    StrengthRoutingModule
  ]
})
export class StrengthModule { }
