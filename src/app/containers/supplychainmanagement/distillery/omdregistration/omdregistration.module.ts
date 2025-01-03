import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OmdregistrationRoutingModule } from './omdregistration-routing.module';
import { OmdregistrationComponent } from './omdregistration.component';
import { ViewomdregistrationComponent } from './viewomdregistration/viewomdregistration.component';
import { AddomdregistrationComponent } from './addomdregistration/addomdregistration.component';

@NgModule({
  declarations: [ OmdregistrationComponent, ViewomdregistrationComponent, AddomdregistrationComponent ],
  imports: [
    CommonModule,
    SharedModule,
    OmdregistrationRoutingModule,
    NgbModule
  ]
})
export class OmdregistrationModule { }
