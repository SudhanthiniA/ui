import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Mf4RoutingModule } from './mf4-routing.module';
import { Mf4Component } from './mf4.component';
import { Addmf4Component } from './addmf4/addmf4.component';
import { Viewmf4Component } from './viewmf4/viewmf4.component';
import { ListdraftfinalComponent } from './listdraftfinal/listdraftfinal.component';

@NgModule({
  declarations: [Mf4Component, Addmf4Component, Viewmf4Component, ListdraftfinalComponent],
  imports: [
    CommonModule,
    SharedModule,
    Mf4RoutingModule
  ]
})
export class Mf4Module { }
