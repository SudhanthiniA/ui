import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf10MolassesentryRoutingModule } from './mf10-molassesentry-routing.module';
import { Mf10MolassesentryComponent } from './mf10-molassesentry.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AddeditMf10Component } from './addedit-mf10/addedit-mf10.component';
import { ViewMf10Component } from './view-mf10/view-mf10.component';


@NgModule({
  declarations: [
    Mf10MolassesentryComponent,
    // AddeditMf10Component,
    ViewMf10Component
  ],
  imports: [
    CommonModule,
    Mf10MolassesentryRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Mf10MolassesentryModule { }
