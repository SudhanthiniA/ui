import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { MwtranspassapprovalRoutingModule } from './mwtranspassapproval-routing.module';
import { MwtranspassapprovalComponent } from './mwtranspassapproval.component';
import { AddmwtranspassapprovalComponent } from './addmwtranspassapproval/addmwtranspassapproval.component';
import { ViewmwtranspassapprovalComponent } from './viewmwtranspassapproval/viewmwtranspassapproval.component';
import { DispatchmwtranspassapprovalComponent } from './dispatchmwtranspassapproval/dispatchmwtranspassapproval.component';
import { CancelmodifyComponent } from './cancelmodify/cancelmodify.component';

@NgModule({
  declarations: [MwtranspassapprovalComponent, AddmwtranspassapprovalComponent, ViewmwtranspassapprovalComponent, DispatchmwtranspassapprovalComponent, CancelmodifyComponent],
  imports: [
    CommonModule,
    SharedModule,
    MwtranspassapprovalRoutingModule
  ]
})
export class MwtranspassapprovalModule { }
