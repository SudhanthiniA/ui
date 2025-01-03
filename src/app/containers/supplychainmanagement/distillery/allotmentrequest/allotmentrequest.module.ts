import { NgModule } from '@angular/core';

import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllotmentrequestRoutingModule } from './allotmentrequest-routing.module';
import { AllotmentrequestComponent } from './allotmentrequest.component';
import { AddeditallotmentrequestComponent } from './addeditallotmentrequest/addeditallotmentrequest.component';
import { ViewallotmentrequestComponent } from './viewallotmentrequest/viewallotmentrequest.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PreviewallotmentComponent } from './previewallotment/previewallotment.component';



@NgModule({
  declarations: [
    AllotmentrequestComponent, 
    AddeditallotmentrequestComponent, 
    ViewallotmentrequestComponent, PreviewallotmentComponent
  ],
  imports: [
    AllotmentrequestRoutingModule,
    SharedModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class AllotmentrequestModule { }
