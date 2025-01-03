import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IndentprocessinsideupRoutingModule } from './indentprocessinsideup-routing.module';
import { IndentprocessinsideupComponent } from './indentprocessinsideup.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [IndentprocessinsideupComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndentprocessinsideupRoutingModule
  ]
})
export class IndentprocessinsideupModule { }
