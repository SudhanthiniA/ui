import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentcattlefieldRoutingModule } from './indentcattlefield-routing.module';
import { IndentcattlefieldComponent } from './indentcattlefield.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [IndentcattlefieldComponent,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentcattlefieldRoutingModule
  ]
})
export class IndentcattlefieldModule { }
