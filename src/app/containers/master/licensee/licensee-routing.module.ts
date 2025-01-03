import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseeComponent } from './licensee.component';
import { AddLicenseeComponent } from './add-licensee/add-licensee.component';
import { ViewLicenseeComponent } from './view-licensee/view-licensee.component';
const routes: Routes = [
  { path: 'list', component: LicenseeComponent },
  { path: 'add', component: AddLicenseeComponent },
  { path: 'edit/:id', component: AddLicenseeComponent },
  { path: 'view/:id', component: ViewLicenseeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenseeRoutingModule { }
