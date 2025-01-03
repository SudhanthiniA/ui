import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttypeRoutingModule } from './producttype-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { ProducttypeComponent } from './producttype.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AddproductComponent,
    ViewproductComponent,
    ProducttypeComponent
  ],
  imports: [
    CommonModule,
    ProducttypeRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule
  ]
})
export class ProducttypeModule { }
