import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Orderpickupnew2RoutingModule } from './orderpickupnew2-routing.module';
import { Orderpickupnew2Component } from './orderpickupnew2.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [Orderpickupnew2Component, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    Orderpickupnew2RoutingModule
  ]
})
export class Orderpickupnew2Module { }
