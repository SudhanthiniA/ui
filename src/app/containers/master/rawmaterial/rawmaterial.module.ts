import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawmaterialRoutingModule } from './rawmaterial-routing.module';
import { RawmaterialComponent } from './rawmaterial.component';
import { AddeditrawmaterialComponent } from './addeditrawmaterial/addeditrawmaterial.component';
import { ViewrawmaterialComponent } from './viewrawmaterial/viewrawmaterial.component';
import { SharedModule } from '@appThemeShared/shared.module';

@NgModule({
  declarations: [
    RawmaterialComponent,
    AddeditrawmaterialComponent,
    ViewrawmaterialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RawmaterialRoutingModule
  ]
})
export class RawmaterialModule { }
