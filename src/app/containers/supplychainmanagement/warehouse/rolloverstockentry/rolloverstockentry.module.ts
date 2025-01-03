import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { RolloverstockentryRoutingModule } from './rolloverstockentry-routing.module';
import { RolloverstockentryComponent } from './rolloverstockentry.component';

@NgModule({
  declarations: [RolloverstockentryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RolloverstockentryRoutingModule
  ]
})
export class RolloverstockentryModule { }
