import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TankregistrationRoutingModule } from './tankregistration-routing.module';
import { TankregistrationComponent } from './tankregistration.component';
import { AddedittankregistrationComponent } from './addedittankregistration/addedittankregistration.component';
import { ViewtankregistrationComponent } from './viewtankregistration/viewtankregistration.component';
import { AuditapprovalComponent } from './auditapproval/auditapproval.component';
import { SitevisitComponent } from './sitevisit/sitevisit.component';

@NgModule({
  declarations: [TankregistrationComponent, AddedittankregistrationComponent, ViewtankregistrationComponent, AuditapprovalComponent, SitevisitComponent ],
  imports: [
    CommonModule,
    SharedModule,
    TankregistrationRoutingModule,
    NgbModule
  ]
})
export class TankregistrationModule { }
