import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PaymentComponent } from './payment/payment.component';
import { ApprovalComponent } from './approval/approval.component';

import { IndentrequestRoutingModule } from './indentrequest-routing.module';
import { IndentrequestComponent } from './indentrequest.component';
import { AddindentrequestComponent } from './addindentrequest/addindentrequest.component';
import { ViewindentrequestComponent } from './viewindentrequest/viewindentrequest.component';
import { IndentrequestsendComponent } from './indentrequestsend/indentrequestsend.component';
import { EditindentrequestComponent } from './editindentrequest/editindentrequest.component';

@NgModule({
  declarations: [ApprovalComponent,PaymentComponent,IndentrequestComponent, AddindentrequestComponent, ViewindentrequestComponent, IndentrequestsendComponent, EditindentrequestComponent],
  imports: [
    CommonModule,
    IndentrequestRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule
  ]
})
export class IndentrequestModule { }
