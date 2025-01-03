import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndentpendancyreportComponent } from './indentpendancyreport.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path : 'list',
    component : IndentpendancyreportComponent
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
export class IndentpendancyreportRoutingModule { }
