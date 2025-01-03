import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { CommonModule } from '@angular/common';

import { ExesearchticketRoutingModule } from './exesearchticket-routing.module';
import { ExesearchticketComponent } from './exesearchticket.component';
import { ViewexesearchticketComponent } from './viewexesearchticket/viewexesearchticket.component';


@NgModule({
  declarations: [ExesearchticketComponent, ViewexesearchticketComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExesearchticketRoutingModule
  ]
})
export class ExesearchticketModule { }
