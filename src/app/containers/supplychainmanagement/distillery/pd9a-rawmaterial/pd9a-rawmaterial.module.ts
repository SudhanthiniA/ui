import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd9aRawmaterialRoutingModule } from './pd9a-rawmaterial-routing.module';
import { Pd9aRawmaterialComponent } from './pd9a-rawmaterial.component';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddeditPd9aComponent } from './addedit-pd9a/addedit-pd9a.component';
import { ViewPd9aComponent } from './view-pd9a/view-pd9a.component';


@NgModule({
  declarations: [Pd9aRawmaterialComponent, AddeditPd9aComponent, ViewPd9aComponent],
  imports: [
    CommonModule,
    Pd9aRawmaterialRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class Pd9aRawmaterialModule { }
