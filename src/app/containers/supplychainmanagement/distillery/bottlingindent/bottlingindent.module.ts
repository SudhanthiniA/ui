import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { BottlingindentRoutingModule } from './bottlingindent-routing.module';
import { BottlingindentComponent } from './bottlingindent.component';
import { BottlingindentdetailComponent } from './bottlingindentdetail/bottlingindentdetail.component';
import { ApprovalmatrixComponent } from './approvalmatrix/approvalmatrix.component';
import { ApprovalmatrixindentlistComponent } from './approvalmatrixindentlist/approvalmatrixindentlist.component';


@NgModule({
  declarations: [BottlingindentComponent, BottlingindentdetailComponent, ApprovalmatrixComponent, ApprovalmatrixindentlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingindentRoutingModule
  ]
})
export class BottlingindentModule { }
