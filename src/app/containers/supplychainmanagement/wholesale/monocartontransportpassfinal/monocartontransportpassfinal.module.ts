import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MonocartontransportpassfinalRoutingModule } from './monocartontransportpassfinal-routing.module';
import { MonocartontransportpassfinalComponent } from './monocartontransportpassfinal.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    MonocartontransportpassfinalComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MonocartontransportpassfinalRoutingModule
  ]
})
export class MonocartontransportpassfinalModule { }
