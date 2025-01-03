import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { GenderComponent } from './gender.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { AddeditgenderComponent } from './addeditgender/addeditgender.component';
import { ViewgenderComponent } from './viewgender/viewgender.component';

@NgModule({
  declarations: [GenderComponent, AddeditgenderComponent, ViewgenderComponent],
  imports: [
    CommonModule,
    GenderRoutingModule,
    SharedModule
  ]
})
export class GenderModule { }
