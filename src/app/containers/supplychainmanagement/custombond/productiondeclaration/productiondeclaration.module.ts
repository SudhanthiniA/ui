import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';
import { ProductiondeclarationRoutingModule } from './productiondeclaration-routing.module';
import { ProductiondeclarationComponent } from './productiondeclaration.component';
import { AddproductiondeclarationComponent } from './addproductiondeclaration/addproductiondeclaration.component';
import { ViewproductiondeclarationComponent } from './viewproductiondeclaration/viewproductiondeclaration.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [ProductiondeclarationComponent, AddproductiondeclarationComponent, ViewproductiondeclarationComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductiondeclarationRoutingModule
  ]
})
export class ProductiondeclarationModule { }
