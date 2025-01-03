import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportPermitRequestComponent } from './export-permit-request.component';
import { AddExportPermitRequestComponent } from './add-export-permit-request/add-export-permit-request.component';
import { ViewExportPermitRequestComponent } from './view-export-permit-request/view-export-permit-request.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { DeptviewComponent } from './deptview/deptview.component';
const routes: Routes = [{ path: 'list', component: ExportPermitRequestComponent },
{ path: 'add', component: AddExportPermitRequestComponent },
{ path: 'edit/:id', component: AddExportPermitRequestComponent },
{ path: 'view/:id', component: ViewExportPermitRequestComponent },
{ path: 'preview', component: ViewExportPermitRequestComponent },
{ path: 'deptlist', component: DeptlistComponent },
{ path: 'deptview', component: DeptviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportPermitRequestRoutingModule { }
