import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { PenalityonundefinedsubjectRoutingModule } from './penalityonundefinedsubject-routing.module';
import { PenalityonundefinedsubjectComponent } from './penalityonundefinedsubject.component';
import { AddbottleboxingComponent } from './addbottleboxing/addbottleboxing.component';
import { ViewbottleboxingComponent } from './viewbottleboxing/viewbottleboxing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [PenalityonundefinedsubjectComponent, AddbottleboxingComponent, ViewbottleboxingComponent,PaymentComponent],
  imports: [
    CommonModule,   
    SharedModule,
    NgbModule,
    PenalityonundefinedsubjectRoutingModule
  ]
})
export class PenalityonundefinedsubjectModule { }
