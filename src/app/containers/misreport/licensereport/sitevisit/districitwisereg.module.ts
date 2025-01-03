import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { DistricitwiseregRoutingModule } from './districitwisereg-routing.module';
import { DistricitwiseregComponent } from './districitwisereg.component';
import { LicensetypeComponent } from './licensetype/licensetype.component';

@NgModule({
  declarations: [DistricitwiseregComponent,LicensetypeComponent],
  imports: [
    CommonModule,
    DistricitwiseregRoutingModule,
    SharedModule
  ]
})
export class DistricitwisereggModule { }
