import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ImflAddComponent } from './annexure22/imfl-add/imfl-add.component';
import { ViewComponent } from './annexure22/view/view.component';
import { EditComponent } from './annexure22/edit/edit.component';
import { FourofficersComponent } from './fourofficers/fourofficers.component';
import { FourofficersviewComponent } from './fourofficers/fourofficersview/fourofficersview.component';
import { FourofficerreportComponent } from './fourofficers/fourofficerreport/fourofficerreport.component';
import { ReportlistComponent } from './annexure22/reportlist/reportlist.component';
import { Annexure22Component } from './annexure22/annexure22.component';
import { Annexureb12Component } from './annexureb12/annexureb12.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent
  },
  {
    path : 'annexureb12',
    component : Annexureb12Component
  },
  {
    path : 'imfl',
    component : Annexure22Component
  },
  {
    path : 'imfl/add',
    component : ImflAddComponent
  },
  {
    path : 'imfl/view',
    component : ViewComponent
  },
  {
    path : 'imfl/edit',
    component : EditComponent
  },
  {
    path : 'imfl/report',
    component : ReportlistComponent
  },
  {
    path : 'fourofficers',
    component : FourofficersComponent
  },
   {
    path : 'fourofficers/view',
    component : FourofficersviewComponent
  },
  {
    path : 'fourofficers/report',
    component : FourofficerreportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }