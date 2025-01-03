import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransitgatepassRoutingModule } from './transitgatepass-routing.module';
import { TransitgatepassComponent } from './transitgatepass.component';
import { ViewtransitgatepassComponent } from './viewtransitgatepass/viewtransitgatepass.component';
import { AddtransitgatepassComponent } from './addtransitgatepass/addtransitgatepass.component';
import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
import { EdittransitgatepassComponent } from './edittransitgatepass/edittransitgatepass.component';


@NgModule({
  declarations: [TransitgatepassComponent, ViewtransitgatepassComponent, AddtransitgatepassComponent, CancelmodifypassComponent, EdittransitgatepassComponent],
  imports: [
    CommonModule,
    TransitgatepassRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class TransitgatepassModule { }
