import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd26AccompanypassRoutingModule } from './pd26-accompanypass-routing.module';
import { Pd26AccompanypassComponent } from './pd26-accompanypass.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditPd26Component } from './add-edit-pd26/add-edit-pd26.component';
import { ViewPd26Component } from './view-pd26/view-pd26.component';
import { Pd26AcknowledgementComponent } from './pd26-acknowledgement/pd26-acknowledgement.component';


@NgModule({
  declarations: [Pd26AccompanypassComponent, AddEditPd26Component, ViewPd26Component, Pd26AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd26AccompanypassRoutingModule
  ]
})
export class Pd26AccompanypassModule { }
