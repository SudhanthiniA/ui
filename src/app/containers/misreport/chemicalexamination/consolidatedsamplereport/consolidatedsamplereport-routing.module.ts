import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolidatedsamplereportComponent } from './consolidatedsamplereport.component';
import { ViewconsolidatedsamplereportComponent } from './viewconsolidatedsamplereport/viewconsolidatedsamplereport.component';

const routes: Routes = [
  {
    path : 'list',
    component : ConsolidatedsamplereportComponent
  },
  {
    path : 'view', 
    component : ViewconsolidatedsamplereportComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolidatedsamplereportRoutingModule { }
