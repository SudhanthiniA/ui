import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pd25PassforremovalspriritRoutingModule } from './pd25-passforremovalspririt-routing.module';
import { Pd25PassforremovalspriritComponent } from './pd25-passforremovalspririt.component';
import { Pd25AddeditComponent } from './pd25-addedit/pd25-addedit.component';
import { Pd25ViewComponent } from './pd25-view/pd25-view.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Pd25AcknowledgementComponent } from './pd25-acknowledgement/pd25-acknowledgement.component';


@NgModule({
  declarations: [Pd25PassforremovalspriritComponent, Pd25AddeditComponent, Pd25ViewComponent, Pd25AcknowledgementComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    Pd25PassforremovalspriritRoutingModule
  ]
})
export class Pd25PassforremovalspriritModule { }
