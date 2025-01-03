import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { CotregisterRoutingModule } from './cotregister-routing.module';
import { CotregisterComponent } from './cotregister.component';
import { AddcotregisterComponent } from './addcotregister/addcotregister.component';
import { ViewcotregisterComponent } from './viewcotregister/viewcotregister.component';

@NgModule({
  declarations: [CotregisterComponent, AddcotregisterComponent, ViewcotregisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CotregisterRoutingModule
  ]
})
export class CotregisterModule { }
