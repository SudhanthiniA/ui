import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensefeelicregComponent } from './licensefeelicreg.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'list', component: LicensefeelicregComponent },
  { path: 'view', component: ViewComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensefeelicregRoutingModule { }
