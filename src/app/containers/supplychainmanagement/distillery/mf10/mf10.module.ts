import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';


import { Mf10RoutingModule } from './mf10-routing.module';
import { Mf10Component } from './mf10.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [Mf10Component, AddComponent],
  imports: [
    CommonModule,
    Mf10RoutingModule,
    SharedModule
  ]
})
export class Mf10Module { }
