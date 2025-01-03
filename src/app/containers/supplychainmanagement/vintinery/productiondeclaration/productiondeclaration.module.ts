import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductiondeclarationRoutingModule } from './productiondeclaration-routing.module';
import { ProductiondeclarationComponent } from './productiondeclaration.component';

import { SharedModule } from '@appThemeShared/shared.module';
import { AddproductiondeclarationComponent } from './addproductiondeclaration/addproductiondeclaration.component';
import { ViewproductiondeclarationComponent } from './viewproductiondeclaration/viewproductiondeclaration.component';
import { ApprovalComponent } from './approval/approval.component';


@NgModule({
  declarations: [ProductiondeclarationComponent, AddproductiondeclarationComponent, ViewproductiondeclarationComponent, ApprovalComponent],
  imports: [
    CommonModule,
    ProductiondeclarationRoutingModule,
    SharedModule
  ]
})
export class ProductiondeclarationModule { }
