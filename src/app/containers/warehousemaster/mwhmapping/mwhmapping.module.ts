import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwhmappingRoutingModule } from './mwhmapping-routing.module';
import { MwhmappingComponent } from './mwhmapping.component';
import { AddmwhmappingComponent } from './addmwhmapping/addmwhmapping.component';
import { ViewmwhmappingComponent } from './viewmwhmapping/viewmwhmapping.component';
import { MwhmappingsuccessComponent } from './mwhmappingsuccess/mwhmappingsuccess.component';

@NgModule({
  declarations: [MwhmappingComponent, AddmwhmappingComponent, ViewmwhmappingComponent, MwhmappingsuccessComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwhmappingRoutingModule
  ]
})
export class MwhmappingModule { }
