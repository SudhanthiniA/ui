import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd22RegisterofissuanceRoutingModule } from './pd22-registerofissuance-routing.module';
import { Pd22RegisterofissuanceComponent } from './pd22-registerofissuance.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPd22Component } from './add-pd22/add-pd22.component';
import { ViewPd22Component } from './view-pd22/view-pd22.component';


@NgModule({
  declarations: [Pd22RegisterofissuanceComponent, AddPd22Component, ViewPd22Component],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd22RegisterofissuanceRoutingModule,
  ]
})
export class Pd22RegisterofissuanceModule { }
