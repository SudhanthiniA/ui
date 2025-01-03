import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';
import { ListComponent } from './list/list.component';
import { DeoApprovalAddComponent } from './deo-approval-add/deo-approval-add.component';
import { WholesaletoretaildispatchRoutingModule } from './wholesaletoretaildispatch-routing.module';
import { RequestforcancellationComponent } from './requestforcancellation/requestforcancellation.component';



@NgModule({
  declarations: [ListComponent, DeoApprovalAddComponent, RequestforcancellationComponent],
  imports: [
    CommonModule,
    SharedModule,
    WholesaletoretaildispatchRoutingModule
  ]
})
export class WholesaletoretaildispatchModule { }
