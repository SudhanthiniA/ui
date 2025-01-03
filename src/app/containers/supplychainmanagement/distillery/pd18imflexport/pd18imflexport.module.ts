import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd18imflexportRoutingModule } from './pd18imflexport-routing.module';
import { Pd18imflexportComponent } from './pd18imflexport.component';
import { Addpd18imflexportComponent } from './addpd18imflexport/addpd18imflexport.component';
import { Viewpd18imflexportComponent } from './viewpd18imflexport/viewpd18imflexport.component';

@NgModule({
  declarations: [Pd18imflexportComponent, Addpd18imflexportComponent, Viewpd18imflexportComponent],
  imports: [
    CommonModule,
    SharedModule,
    Pd18imflexportRoutingModule
  ]
})
export class Pd18imflexportModule { }
