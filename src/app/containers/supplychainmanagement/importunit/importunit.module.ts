import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '@appThemeShared/shared.module';
import { ImportunitRoutingModule } from './importunit-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ImportunitRoutingModule
  ]
})
export class ImportunitModule { }
