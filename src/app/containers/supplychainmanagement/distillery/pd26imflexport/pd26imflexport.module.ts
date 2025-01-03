import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { Pd26imflexportRoutingModule } from './pd26imflexport-routing.module';
import { Pd26imflexportComponent } from './pd26imflexport.component';
import { Addpd26imflexportComponent } from './addpd26imflexport/addpd26imflexport.component';
import { Viewpd26imflexportComponent } from './viewpd26imflexport/viewpd26imflexport.component';
import { VerifiacknowlistComponent } from './verifiacknowlist/verifiacknowlist.component';


@NgModule({
  declarations: [Pd26imflexportComponent, Addpd26imflexportComponent, Viewpd26imflexportComponent, VerifiacknowlistComponent],
  imports: [
    CommonModule,
    Pd26imflexportRoutingModule,
    SharedModule
  ]
})
export class Pd26imflexportModule { }
