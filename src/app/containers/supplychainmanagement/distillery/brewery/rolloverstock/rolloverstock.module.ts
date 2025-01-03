import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RolloverstockRoutingModule } from './rolloverstock-routing.module';
import { RolloverstockComponent } from './rolloverstock.component';
import { AddrolloverstockComponent } from './addrolloverstock/addrolloverstock.component';
import { ViewrolloverstockComponent } from './viewrolloverstock/viewrolloverstock.component';



@NgModule({
  declarations: [RolloverstockComponent, AddrolloverstockComponent,ViewrolloverstockComponent],
  imports: [
    CommonModule,
    RolloverstockRoutingModule,
    SharedModule
  ]
})
export class RolloverstockModule { }