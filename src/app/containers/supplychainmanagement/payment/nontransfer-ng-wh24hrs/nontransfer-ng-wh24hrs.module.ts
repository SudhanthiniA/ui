import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NontransferNgWh24hrsRoutingModule } from './nontransfer-ng-wh24hrs-routing.module';
import { NontransferNgWh24hrsComponent } from './nontransfer-ng-wh24hrs.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

// import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
// import { EdittransitgatepassComponent } from './edittransitgatepass/edittransitgatepass.component';


@NgModule({
  declarations: [NontransferNgWh24hrsComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
    NontransferNgWh24hrsRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class NontransferNgWh24hrsModule { }
