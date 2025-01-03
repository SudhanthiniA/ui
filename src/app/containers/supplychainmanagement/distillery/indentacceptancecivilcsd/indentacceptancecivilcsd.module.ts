import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentacceptancecivilcsdComponent } from './indentacceptancecivilcsd.component';
import {IndentacceptancecivilcsdRoutingModule} from './indentacceptancecivilcsd-routing.module';


@NgModule({
  declarations: [IndentacceptancecivilcsdComponent],
  imports: [
    CommonModule,
    IndentacceptancecivilcsdRoutingModule,
    SharedModule
  ]
})
export class IndentacceptancecivilcsdModule { }
