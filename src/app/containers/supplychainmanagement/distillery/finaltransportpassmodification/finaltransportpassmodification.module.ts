import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { FinaltransportpassmodificationRoutingModule } from './finaltransportpassmodification-routing.module'
import { FinaltransportpassmodificationComponent } from './finaltransportpassmodification.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    FinaltransportpassmodificationComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FinaltransportpassmodificationRoutingModule
  ]
})
export class FinaltransportpassmodificationModule { }
