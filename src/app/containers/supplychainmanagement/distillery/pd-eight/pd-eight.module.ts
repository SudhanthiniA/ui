import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdEightRoutingModule } from './pd-eight-routing.module';
import { PdEightComponent } from './pd-eight.component';
import { AddeditpdEightComponent } from './addeditpd-eight/addeditpd-eight.component';
import { ViewpdEightComponent } from './viewpd-eight/viewpd-eight.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@appThemeShared/shared.module';
import { Previewpd8aComponent } from './previewpd8a/previewpd8a.component';


@NgModule({
  declarations: [PdEightComponent, AddeditpdEightComponent, ViewpdEightComponent, Previewpd8aComponent],
  imports: [
    CommonModule,
    SharedModule,
    PdEightRoutingModule,
    NgbModule
  ]
})
export class PdEightModule { }
