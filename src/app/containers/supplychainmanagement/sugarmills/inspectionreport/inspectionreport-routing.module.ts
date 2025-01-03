import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectionreportComponent } from './inspectionreport.component';
import { ViewinspectionreportComponent } from './viewinspectionreport/viewinspectionreport.component';
import { AddeditinspectionreportComponent } from './addeditinspectionreport/addeditinspectionreport.component';


const routes: Routes = [
  {
    path : 'list',
    component : InspectionreportComponent
  },
  {
    path : 'view/:Id',
    component : ViewinspectionreportComponent
  },
  {
    path : 'add',
    component : AddeditinspectionreportComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditinspectionreportComponent
  },
  {
    path : 'preview',
    component : ViewinspectionreportComponent
  },
  {
    path: 'exciseofficer',
    loadChildren: () => import('./exciseofficerlist/exciseofficerlist.module').then(m => m.ExciseofficerlistModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionreportRoutingModule { }
