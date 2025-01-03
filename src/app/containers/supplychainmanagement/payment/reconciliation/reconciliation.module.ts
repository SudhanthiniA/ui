import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@appThemeShared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReconciliationRoutingModule  } from './reconciliation-routing.module';
import { ReconciliationComponent } from './reconciliation.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

// import { CancelmodifypassComponent } from './cancelmodifypass/cancelmodifypass.component';
// import { EdittransitgatepassComponent } from './edittransitgatepass/edittransitgatepass.component';


@NgModule({
  declarations: [ReconciliationComponent, ViewComponent, AddComponent,EditComponent],
  imports: [
    CommonModule,
    ReconciliationRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class  ReconciliationModule { }
