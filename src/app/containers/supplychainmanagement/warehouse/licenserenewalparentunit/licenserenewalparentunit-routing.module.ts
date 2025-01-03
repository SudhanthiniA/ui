import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenserenewalparentunitComponent } from './licenserenewalparentunit.component'; 
import { ViewlicenserenewalparentunitComponent } from './viewlicenserenewalparentunit/viewlicenserenewalparentunit.component';

const routes: Routes = [{ path:'list', component: LicenserenewalparentunitComponent }, 
                        { path:'view', component: ViewlicenserenewalparentunitComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenserenewalparentunitRoutingModule { }
