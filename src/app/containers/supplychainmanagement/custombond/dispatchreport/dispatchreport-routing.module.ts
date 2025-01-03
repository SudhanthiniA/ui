import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchreportComponent } from './dispatchreport.component';
import { ViewdispatchreportComponent } from './viewdispatchreport/viewdispatchreport.component';

const routes: Routes = [{ path: 'list', component: DispatchreportComponent },
{ path: 'view', component: ViewdispatchreportComponent },
{ path: 'view/:id', component: ViewdispatchreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchreportRoutingModule { }
