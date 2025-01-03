import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportPermitRequestRoutingModule } from './export-permit-request-routing.module';
import { ExportPermitRequestComponent } from './export-permit-request.component';
import { AddExportPermitRequestComponent } from './add-export-permit-request/add-export-permit-request.component';
import { ViewExportPermitRequestComponent } from './view-export-permit-request/view-export-permit-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/theme/shared/shared.module';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { DeptviewComponent } from './deptview/deptview.component';


@NgModule({
  declarations: [ExportPermitRequestComponent, AddExportPermitRequestComponent, ViewExportPermitRequestComponent, DeptlistComponent, DeptviewComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    ExportPermitRequestRoutingModule
  ]
})
export class ExportPermitRequestModule { }
