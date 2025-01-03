import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewbrandComponent } from './renewbrand.component';
import { ViewrenewbrandComponent } from './viewrenewbrand/viewrenewbrand.component';

const routes: Routes = [
  { path: '', component: RenewbrandComponent },
  { path: 'view', component: ViewrenewbrandComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewbrandRoutingModule { }
