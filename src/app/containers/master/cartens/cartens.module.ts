import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartensRoutingModule } from './cartens-routing.module';
import { CartensComponent } from './cartens.component';
import { AddeditcartensComponent } from './addeditcartens/addeditcartens.component';
import { ViewcartensComponent } from './viewcartens/viewcartens.component';
import { SharedModule } from '@appThemeShared/shared.module';


@NgModule({
  declarations: [CartensComponent, AddeditcartensComponent, ViewcartensComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartensRoutingModule
  ]
})
export class CartensModule { }
