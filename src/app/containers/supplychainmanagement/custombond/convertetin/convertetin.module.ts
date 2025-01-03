import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { ConvertetinRoutingModule } from './convertetin-routing.module';
import { ConvertetinComponent } from './convertetin.component';
import { AddconvertetinComponent } from './addconvertetin/addconvertetin.component';
import { ViewconvertetinComponent } from './viewconvertetin/viewconvertetin.component';


@NgModule({
  declarations: [ConvertetinComponent, AddconvertetinComponent, ViewconvertetinComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConvertetinRoutingModule
  ]
})
export class ConvertetinModule { }
