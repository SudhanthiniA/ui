import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { Pd10formRoutingModule } from './pd10form-routing.module';
import { Pd10formComponent } from './pd10form.component';
import { Addpd10formComponent } from './addpd10form/addpd10form.component';
import { Viewpd10formComponent } from './viewpd10form/viewpd10form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Pd10formComponent, Addpd10formComponent, Viewpd10formComponent],
  imports: [
    CommonModule,
    NgbModule,
    Pd10formRoutingModule,
    SharedModule
  ]
})
export class Pd10formModule { }
