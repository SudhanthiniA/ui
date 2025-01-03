import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MolassesadministrationchargesRoutingModule } from './molassesadministrationcharges-routing.module';
import { MolassesadministrationchargesComponent } from './molassesadministrationcharges.component';
import { AddeditmolassesadministrationchargesComponent } from './addeditmolassesadministrationcharges/addeditmolassesadministrationcharges.component';
import { ViewmolassesadministrationchargesComponent } from './viewmolassesadministrationcharges/viewmolassesadministrationcharges.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [MolassesadministrationchargesComponent, AddeditmolassesadministrationchargesComponent, ViewmolassesadministrationchargesComponent, PaymentComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MolassesadministrationchargesRoutingModule,
    NgbModule,OwlDateTimeModule,OwlNativeDateTimeModule
  ]
})
export class MolassesadministrationchargesModule { }
