import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RolloverstkentryprevyearRoutingModule } from './rolloverstkentryprevyear-routing.module';
import { RolloverstkentryprevyearComponent } from './rolloverstkentryprevyear.component';
import { AddrolloverstkentryprevyearComponent } from './addrolloverstkentryprevyear/addrolloverstkentryprevyear.component';


@NgModule({
  declarations: [RolloverstkentryprevyearComponent, AddrolloverstkentryprevyearComponent],
  imports: [
    CommonModule,
    SharedModule,
    RolloverstkentryprevyearRoutingModule
  ]
})
export class RolloverstkentryprevyearModule { }
