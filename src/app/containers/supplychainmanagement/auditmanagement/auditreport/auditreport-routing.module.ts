import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuditreportComponent } from './auditreport.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : AuditreportComponent
  },
  {
    path : 'view',
    component : ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditreportRoutingModule { }
