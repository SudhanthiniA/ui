import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { WholesalemonocartontransportpassdraftRoutingModule } from './wholesalemonocartontransportpassdraft-routing.module'
import { WholesalemonocartontransportpassdraftComponent } from './wholesalemonocartontransportpassdraft.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    WholesalemonocartontransportpassdraftComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WholesalemonocartontransportpassdraftRoutingModule
  ]
})
export class WholesalemonocartontransportpassdraftModule { }
