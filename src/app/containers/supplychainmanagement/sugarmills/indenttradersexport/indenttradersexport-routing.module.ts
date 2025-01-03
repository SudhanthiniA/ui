import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndenttradersexportComponent } from './indenttradersexport.component';
import { ViewindenttradersexportComponent } from './viewindenttradersexport/viewindenttradersexport.component';

const routes: Routes = [
  { path: 'list', component: IndenttradersexportComponent },
  { path: 'view', component: ViewindenttradersexportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndenttradersexportRoutingModule { }
