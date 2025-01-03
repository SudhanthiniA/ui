import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';

import { LabelrequestRoutingModule } from './labelrequest-routing.module';
import { LabelrequestComponent } from './labelrequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';

@NgModule({
  declarations: [
    LabelrequestComponent,
    AddrequestComponent
  ],
  imports: [
    LabelrequestRoutingModule,
    SharedModule
  ]
})
export class LabelrequestModule { }
