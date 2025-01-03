import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { PdtDeclarationFlRoutingModule } from './pdt-declaration-fl-routing.module';
import { PdtDeclarationFlComponent } from './pdt-declaration-fl.component';
import { AddpdtDeclarationFlComponent } from './addpdt-declaration-fl/addpdt-declaration-fl.component';
import { ViewpdtDeclarationFlComponent } from './viewpdt-declaration-fl/viewpdt-declaration-fl.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [PdtDeclarationFlComponent, AddpdtDeclarationFlComponent, ViewpdtDeclarationFlComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    PdtDeclarationFlRoutingModule
  ]
})
export class PdtDeclarationFlModule { }
