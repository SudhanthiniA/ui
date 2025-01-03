import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PenaltyonaccidentalcasesRoutingModule } from './penaltyonaccidentalcases-routing.module';
import { PenaltyonaccidentalcasesComponent } from './penaltyonaccidentalcases.component';
import { ViewpenaltyonaccidentalcasesComponent } from './viewpenaltyonaccidentalcases/viewpenaltyonaccidentalcases.component';
import { AddpenaltyonaccidentalcasesComponent } from './addpenaltyonaccidentalcases/addpenaltyonaccidentalcases.component';
import { EditpenaltyonaccidentalcasesComponent } from './editpenaltyonaccidentalcases/editpenaltyonaccidentalcases.component';

@NgModule({
  declarations: [PenaltyonaccidentalcasesComponent, ViewpenaltyonaccidentalcasesComponent, AddpenaltyonaccidentalcasesComponent, EditpenaltyonaccidentalcasesComponent],
  imports: [
    CommonModule,
    PenaltyonaccidentalcasesRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PenaltyonaccidentalcasesModule { }
