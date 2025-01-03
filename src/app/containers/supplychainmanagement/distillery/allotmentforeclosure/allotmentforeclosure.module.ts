import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '@appThemeShared/shared.module';

import { AllotmentforeclosureRoutingModule } from './allotmentforeclosure-routing.module';
import { AddallotmentforeclosureComponent } from './addallotmentforeclosure/addallotmentforeclosure.component';
import { ViewallotmentforeclosureComponent } from './viewallotmentforeclosure/viewallotmentforeclosure.component';
import { AllotmentforeclosureComponent } from './allotmentforeclosure.component';

@NgModule({
  declarations: [AddallotmentforeclosureComponent, ViewallotmentforeclosureComponent, AllotmentforeclosureComponent],
  imports: [
    CommonModule,
    AllotmentforeclosureRoutingModule,
    SharedModule
  ]
})
export class AllotmentforeclosureModule { }
