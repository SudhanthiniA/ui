import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TpackRoutingModule } from './tpack-routing.module';
import { TpackComponent } from './tpack.component'; 
import { AddtpackComponent } from './addtpack/addtpack.component';
import { ViewtpackComponent } from './viewtpack/viewtpack.component';

@NgModule({
  declarations: [TpackComponent, AddtpackComponent, ViewtpackComponent],
  imports: [
    CommonModule,
    SharedModule,
    TpackRoutingModule
  ]
})
export class TpackModule { }
