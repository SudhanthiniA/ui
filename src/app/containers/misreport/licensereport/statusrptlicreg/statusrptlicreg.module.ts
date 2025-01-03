import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';


import { StatusrptlicregRoutingModule } from './statusrptlicreg-routing.module';
import { StatusrptlicregComponent } from './statusrptlicreg.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [StatusrptlicregComponent, ViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    StatusrptlicregRoutingModule
  ]
})
export class StatusrptlicregModule { }
