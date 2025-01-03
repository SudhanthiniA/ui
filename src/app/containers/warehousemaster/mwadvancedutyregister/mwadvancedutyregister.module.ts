import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwadvancedutyregisterRoutingModule } from './mwadvancedutyregister-routing.module';
import { MwadvancedutyregisterComponent } from './mwadvancedutyregister.component';
import { ViewmwadvancedutyregisterComponent } from './viewmwadvancedutyregister/viewmwadvancedutyregister.component';
import { AddmwadvancedutyregisterComponent } from './addmwadvancedutyregister/addmwadvancedutyregister.component';

@NgModule({
  declarations: [MwadvancedutyregisterComponent, ViewmwadvancedutyregisterComponent, AddmwadvancedutyregisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwadvancedutyregisterRoutingModule
  ]
})
export class MwadvancedutyregisterModule { }
