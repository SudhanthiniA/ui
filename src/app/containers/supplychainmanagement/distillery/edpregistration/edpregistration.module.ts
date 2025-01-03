import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { EdpregistrationRoutingModule } from './edpregistration-routing.module';
import { EdpregistrationComponent } from './edpregistration.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ApprovalComponent } from './approval/approval.component';
import { ViewapprovalComponent } from './viewapproval/viewapproval.component';
import { ViewbrandhistoryComponent } from './viewbrandhistory/viewbrandhistory.component';
import { ListbrandhistoryComponent } from './listbrandhistory/listbrandhistory.component';
import { CivilcsdComponent } from './civilcsd/civilcsd.component';
import { CsdexportComponent } from './csdexport/csdexport.component';
import { CsdwithinupComponent } from './csdwithinup/csdwithinup.component';

@NgModule({
  declarations: [EdpregistrationComponent, AddComponent, ViewComponent, ApprovalComponent, ViewapprovalComponent,
     ViewbrandhistoryComponent, ListbrandhistoryComponent, CivilcsdComponent,CsdexportComponent,
      CsdwithinupComponent],
  imports: [
    CommonModule,
    SharedModule,
    EdpregistrationRoutingModule
  ]
})
export class EdpregistrationModule { }
