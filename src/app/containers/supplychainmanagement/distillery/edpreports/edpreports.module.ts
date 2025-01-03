import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { EdpreportsRoutingModule } from './edpreports-routing.module';
import { EdpreportsComponent } from './edpreports.component';

@NgModule({
  declarations: [EdpreportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EdpreportsRoutingModule
  ]
})
export class EdpreportsModule { }
