import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentacceptanceCl2RoutingModule } from './indentacceptance-cl2-routing.module';
import { ViewComponent } from './view/view.component';


import { IndentacceptanceCl2Component } from './indentacceptance-cl2.component';


@NgModule({
  declarations: [IndentacceptanceCl2Component, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentacceptanceCl2RoutingModule
  ]
})
export class IndentacceptanceCl2Module { }
