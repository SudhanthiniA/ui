import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/theme/shared/shared.module';

import { ReceivefromginplantRoutingModule } from './receivefromginplant-routing.module';
import { ReceivefromginplantComponent } from './receivefromginplant.component';
import { AddreceivefromginplantComponent } from './addreceivefromginplant/addreceivefromginplant.component';
import { ViewreceivefromginplantComponent } from './viewreceivefromginplant/viewreceivefromginplant.component';


@NgModule({
  declarations: [ReceivefromginplantComponent, AddreceivefromginplantComponent, ViewreceivefromginplantComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReceivefromginplantRoutingModule
  ]
})
export class ReceivefromginplantModule { }
