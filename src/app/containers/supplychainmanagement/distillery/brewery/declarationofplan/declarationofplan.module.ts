import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { DeclarationofplanRoutingModule } from './declarationofplan-routing.module';
import { DeclarationofplanComponent } from './declarationofplan.component';
import { AddpdtDeclarationFlComponent } from './addpdt-declaration-fl/addpdt-declaration-fl.component';
import { ViewpdtDeclarationFlComponent } from './viewpdt-declaration-fl/viewpdt-declaration-fl.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [DeclarationofplanComponent, AddpdtDeclarationFlComponent, ViewpdtDeclarationFlComponent, PaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DeclarationofplanRoutingModule
  ]
})
export class DeclarationofplanModule { }
