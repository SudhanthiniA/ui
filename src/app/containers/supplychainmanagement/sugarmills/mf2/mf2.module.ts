import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mf9RoutingModule } from './mf2-routing.module';
import { Mf2Component } from './mf2.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { Addeditmf9Component } from './addeditmf9/addeditmf9.component';
import { Viewmf9Component } from './viewmf9/viewmf9.component';
import { Previewmf9Component } from './previewmf9/previewmf9.component';

@NgModule({
  declarations: [
    Mf2Component, 
    Addeditmf9Component, 
    Viewmf9Component, 
    Previewmf9Component
  ],
  imports: [
    CommonModule,
    Mf9RoutingModule,
    SharedModule
  ]
})
export class Mf9Module { }
