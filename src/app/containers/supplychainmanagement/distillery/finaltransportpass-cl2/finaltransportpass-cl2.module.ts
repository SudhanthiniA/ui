import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FinaltransportpassCl2RoutingModule } from './finaltransportpass-cl2-routing.module';
import { ViewComponent } from './view/view.component';


import { FinaltransportpassCl2Component } from './finaltransportpass-cl2.component';

@NgModule({
  declarations: [FinaltransportpassCl2Component, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FinaltransportpassCl2RoutingModule
  ]
})
export class FinaltransportpassCl2Module { }
