import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import {  Saletofl11RoutingModule} from './saletofl11-routing.module';
import { Saletofl11Component } from './saletofl11.component';
import { Addsaletofl11Component } from './addsaletofl11/addsaletofl11.component';
import { Viewsaletofl11Component } from './viewsaletofl11/viewsaletofl11.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [Saletofl11Component, Addsaletofl11Component, Viewsaletofl11Component],
  imports: [
    CommonModule,
    Saletofl11RoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class Saletofl11Module { }
