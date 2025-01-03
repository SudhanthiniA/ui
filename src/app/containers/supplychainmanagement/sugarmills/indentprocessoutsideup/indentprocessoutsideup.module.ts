import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { IdentprocessoutsideupRoutingModule } from './indentprocessoutsideup-routing.module';
import { iIdentprocessoutsideupComponent } from './indentprocessoutsideup.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [iIdentprocessoutsideupComponent,AddComponent,ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    IdentprocessoutsideupRoutingModule
  ]
})
export class IndentprocessinsideupModule { }
