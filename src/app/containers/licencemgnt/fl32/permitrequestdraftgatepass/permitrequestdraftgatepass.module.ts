import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { PermitrequestdraftgatepassRoutingModule } from './permitrequestdraftgatepass-routing.module';
import { PermitrequestdraftgatepassComponent } from './permitrequestdraftgatepass.component';
import { AddpermitrequestdraftgatepassComponent } from './addpermitrequestdraftgatepass/addpermitrequestdraftgatepass.component';
import { ViewpermitrequestdraftgatepassComponent } from './viewpermitrequestdraftgatepass/viewpermitrequestdraftgatepass.component';
import { ApprovalComponent } from './approval/approval.component';


@NgModule({
  declarations: [PermitrequestdraftgatepassComponent,AddpermitrequestdraftgatepassComponent,ViewpermitrequestdraftgatepassComponent,ApprovalComponent],
  imports: [
    CommonModule,
    SharedModule,
    PermitrequestdraftgatepassRoutingModule
  ]
})
export class PermitrequestdraftgatepassModule { }
