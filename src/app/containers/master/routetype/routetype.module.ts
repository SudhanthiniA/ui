import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RoutetypeRoutingModule } from './routetype-routing.module';
import { RoutetypeComponent } from './routetype.component';
import { AddroutetypeComponent } from './addroutetype/addroutetype.component';
import { ViewroutetypeComponent } from './viewroutetype/viewroutetype.component';

@NgModule({
  declarations: [
    RoutetypeComponent,
    AddroutetypeComponent,
    ViewroutetypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutetypeRoutingModule
  ]
})
export class RoutetypeModule { }
