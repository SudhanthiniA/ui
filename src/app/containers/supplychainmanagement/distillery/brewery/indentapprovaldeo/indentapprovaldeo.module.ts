import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentapprovaldeoComponent } from './indentapprovaldeo.component';
import { ViewComponent } from './view/view.component';
import { IndentapprovaldeoRoutingModule } from './indentapprovaldeo-routing.module';



@NgModule({
  declarations: [IndentapprovaldeoComponent, ViewComponent],
  imports: [
    CommonModule,
    IndentapprovaldeoRoutingModule,
    SharedModule
  ]
})
export class IndentapprovaldeoModule { }
