import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { SheerastatementformatRoutingModule } from './sheerastatementformat-routing.module';
import { SheerastatementformatComponent } from './sheerastatementformat.component';

@NgModule({
  imports: [
    CommonModule,
    SheerastatementformatRoutingModule,
    SharedModule
  ],
  declarations: [SheerastatementformatComponent]
})
export class SheerastatementformatModule { }
