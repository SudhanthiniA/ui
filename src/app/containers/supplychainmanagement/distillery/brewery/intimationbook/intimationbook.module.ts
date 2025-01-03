import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IntimationbookRoutingModule } from './intimationbook-routing.module';
import { IntimationbookComponent } from './intimationbook.component';
import { AddintimationbookComponent } from './addintimationbook/addintimationbook.component';
import { ViewintimationbookComponent } from './viewintimationbook/viewintimationbook.component';



@NgModule({
  declarations: [IntimationbookComponent, AddintimationbookComponent,ViewintimationbookComponent],
  imports: [
    CommonModule,
    SharedModule,
    IntimationbookRoutingModule
  ]
})
export class IntimationbookModule { }
