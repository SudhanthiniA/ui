import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { TankcategoryRoutingModule } from './tankcategory-routing.module';
import { TankcategoryComponent } from './tankcategory.component';
import { AddtankcategoryComponent } from './addtankcategory/addtankcategory.component';
import { ViewtankcategoryComponent } from './viewtankcategory/viewtankcategory.component';


@NgModule({
  declarations: [TankcategoryComponent, AddtankcategoryComponent, ViewtankcategoryComponent],
  imports: [
    CommonModule,
    TankcategoryRoutingModule,
    SharedModule
  ]
})
export class TankcategoryModule { }
