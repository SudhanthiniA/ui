import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { DataTablesModule } from 'angular-datatables';

import { ProductTypeRoutingModule } from './product-type-routing.module';
import { ProductTypeComponent } from './product-type.component';
import { AddEditProductTypeComponent } from './add-edit-product-type/add-edit-product-type.component';
import { ViewProductTypeComponent } from './view-product-type/view-product-type.component';


@NgModule({
  declarations: [ProductTypeComponent, AddEditProductTypeComponent, ViewProductTypeComponent],
  imports: [
    CommonModule,
    ProductTypeRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class ProductTypeModule { }
