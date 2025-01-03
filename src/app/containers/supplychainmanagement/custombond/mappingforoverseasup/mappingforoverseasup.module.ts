import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MappingforoverseasupRoutingModule } from './mappingforoverseasup-routing.module';
import { MappingforoverseasupComponent } from './mappingforoverseasup.component';
import { AddmappingforoverseasupComponent } from './addmappingforoverseasup/addmappingforoverseasup.component';
import { ViewmappingforoverseasupComponent } from './viewmappingforoverseasup/viewmappingforoverseasup.component';


@NgModule({
  declarations: [MappingforoverseasupComponent, AddmappingforoverseasupComponent, ViewmappingforoverseasupComponent],
  imports: [
    CommonModule,
    SharedModule,
    MappingforoverseasupRoutingModule
  ]
})
export class MappingforoverseasupModule { }
