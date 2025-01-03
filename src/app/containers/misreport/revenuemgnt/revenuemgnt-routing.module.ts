import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenuemgntComponent } from './revenuemgnt.component';
import { SalereportComponent } from './salereport/salereport.component';
import { EdpreportComponent } from './edpreport/edpreport.component';

const routes: Routes = [
  { path: 'list', component: RevenuemgntComponent },
  { path: 'salereport', component: SalereportComponent },
  { path: 'edpreport', component: EdpreportComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenuemgntRoutingModule { }
