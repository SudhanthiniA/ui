import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { TpcancellationrequestRoutingModule } from './tpcancellationrequest-routing.module';
import { TpcancellationrequestComponent } from './tpcancellationrequest.component';
import { AddtpcancellationrequestComponent } from './addtpcancellationrequest/addtpcancellationrequest.component';
import { ViewtpcancellationrequestComponent } from './viewtpcancellationrequest/viewtpcancellationrequest.component';


@NgModule({
  declarations: [TpcancellationrequestComponent,AddtpcancellationrequestComponent,ViewtpcancellationrequestComponent,],
  imports: [
    CommonModule,
    SharedModule,
    TpcancellationrequestRoutingModule
  ]
})
export class TpcancellationrequestModule { }
