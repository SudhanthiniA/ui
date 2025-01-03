import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottleboxingRoutingModule } from './bottleboxing-routing.module';
import { BottleboxingComponent } from './bottleboxing.component';
import { AddbottleboxingComponent } from './addbottleboxing/addbottleboxing.component';
import { ViewbottleboxingComponent } from './viewbottleboxing/viewbottleboxing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [BottleboxingComponent, AddbottleboxingComponent, ViewbottleboxingComponent,PaymentComponent],
  imports: [
    CommonModule,   
    SharedModule,
    NgbModule,
    BottleboxingRoutingModule
  ]
})
export class BottleboxingModule { }
