import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ProductiontostorageandproductiontobottlingComponent } from './productiontostorageandproductiontobottling.component';
import {ProductiontostorageandproductiontobottlingRoutingModule} from './productiontostorageandproductiontobottling-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ProductiontostorageandproductiontobottlingComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductiontostorageandproductiontobottlingRoutingModule
  ]
})
export class ProductiontostorageandproductiontobottlingModule { }
