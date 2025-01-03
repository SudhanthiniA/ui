import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { AccidentalrequestRoutingModule } from './accidentalrequest-routing.module';
import { AccidentalrequestComponent } from './accidentalrequest.component';
import { AddaccidentalrequestComponent } from './addaccidentalrequest/addaccidentalrequest.component';
import { ViewaccidentalrequestComponent } from './viewaccidentalrequest/viewaccidentalrequest.component';
import { AccidentcaselistComponent } from './accidentcaselist/accidentcaselist.component';
import { ViewaccidentcaseComponent } from './viewaccidentcase/viewaccidentcase.component';
import { ModifiedtranspassComponent } from './modifiedtranspass/modifiedtranspass.component';
import { AddapprovalComponent } from './addapproval/addapproval.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';


@NgModule({
  declarations: [AccidentcaselistComponent,ViewaccidentcaseComponent, AccidentalrequestComponent, AddaccidentalrequestComponent, ViewaccidentalrequestComponent, ModifiedtranspassComponent, AddapprovalComponent, ViewapprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccidentalrequestRoutingModule
  ]
})
export class AccidentalrequestModule { }
