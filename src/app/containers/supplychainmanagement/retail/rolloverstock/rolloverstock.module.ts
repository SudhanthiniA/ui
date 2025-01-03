import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { RolloverstockRoutingModule } from './rolloverstock-routing.module';
import { RolloverstockComponent } from './rolloverstock.component';
import { AddrolloverstockComponent } from './addrolloverstock/addrolloverstock.component';
import { ViewrolloverstockComponent } from './viewrolloverstock/viewrolloverstock.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [RolloverstockComponent, AddrolloverstockComponent, ViewrolloverstockComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RolloverstockRoutingModule
  ]
})
export class RolloverstockModule { }
