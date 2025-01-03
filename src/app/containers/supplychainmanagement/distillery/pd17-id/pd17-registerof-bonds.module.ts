import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Pd17RegisterofBondsRoutingModule } from './pd17-registerof-bonds-routing.module';
import { Pd17RegisterofBondsComponent } from './pd17-registerof-bonds.component';
import { AddPd17Component } from './add-pd17/add-pd17.component';
import { ViewPd17Component } from './view-pd17/view-pd17.component';



@NgModule({
  declarations: [Pd17RegisterofBondsComponent, AddPd17Component, ViewPd17Component],
  imports: [
    CommonModule,
    Pd17RegisterofBondsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Pd17RegisterofBondsModule { }
