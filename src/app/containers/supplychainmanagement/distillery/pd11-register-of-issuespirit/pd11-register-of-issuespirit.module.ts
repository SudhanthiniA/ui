import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd11RegisterOfIssuespiritRoutingModule } from './pd11-register-of-issuespirit-routing.module';
import { Pd11RegisterOfIssuespiritComponent } from './pd11-register-of-issuespirit.component';
import { AddeditPd11Component } from './addedit-pd11/addedit-pd11.component';
import { ViewPd11Component } from './view-pd11/view-pd11.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Pd11RegisterOfIssuespiritComponent, AddeditPd11Component, ViewPd11Component],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd11RegisterOfIssuespiritRoutingModule
  ]
})
export class Pd11RegisterOfIssuespiritModule { }
