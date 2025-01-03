import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductstateComponent } from './productstate.component';
import { AddproductstateComponent } from './addproductstate/addproductstate.component';
import { ViewproductstateComponent } from './viewproductstate/viewproductstate.component';
import { ProductstateRoutingModule } from './productstate-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [ProductstateComponent, AddproductstateComponent, ViewproductstateComponent],
  imports: [
    CommonModule,
    ProductstateRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ProductstateModule { }
