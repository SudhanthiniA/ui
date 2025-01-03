import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottlingForFlRoutingModule } from './bottling-for-fl-routing.module';
import { BottlingForFlComponent } from './bottling-for-fl.component';
import { AddeditbottlingComponent } from './addeditbottling/addeditbottling.component';
import { ViewbottleComponent } from './viewbottle/viewbottle.component';
import { SharedModule } from '@app/theme/shared/shared.module';
import { ApprovalMatrixComponent } from './approval-matrix/approval-matrix.component';
import { BottlingapprovallistComponent } from './bottlingapprovallist/bottlingapprovallist.component';


@NgModule({
  declarations: [BottlingForFlComponent, AddeditbottlingComponent, ViewbottleComponent, ApprovalMatrixComponent, BottlingapprovallistComponent],
  imports: [
    CommonModule,
    SharedModule,
    BottlingForFlRoutingModule
  ]
})
export class BottlingForFlModule { }
