import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { RenewbrandRoutingModule } from './renewbrand-routing.module';
import { RenewbrandComponent } from './renewbrand.component';
import { ViewrenewbrandComponent } from './viewrenewbrand/viewrenewbrand.component';

@NgModule({
  declarations: [RenewbrandComponent, ViewrenewbrandComponent],
  imports: [
    CommonModule,
    RenewbrandRoutingModule,
    SharedModule
  ]
})
export class RenewbrandModule { }
