import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportPermitComponent } from './export-permit.component';
import { AddExportPermitComponent } from './add-export-permit/add-export-permit.component';
import { ViewExportPermitComponent } from './view-export-permit/view-export-permit.component';


const routes: Routes = [
  { path: 'list', component: ExportPermitComponent },
  { path: 'add', component: AddExportPermitComponent },
  { path: 'view', component: ViewExportPermitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExportPermitRoutingModule { }
