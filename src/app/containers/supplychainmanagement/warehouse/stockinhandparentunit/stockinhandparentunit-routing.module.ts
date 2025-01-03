import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockinhandparentunitComponent } from './stockinhandparentunit.component';
import { ViewstockinhandparentunitComponent } from './viewstockinhandparentunit/viewstockinhandparentunit.component';

const routes: Routes = [ 
  { path: 'list', component: StockinhandparentunitComponent },
  { path: 'view', component: ViewstockinhandparentunitComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockinhandparentunitRoutingModule { }
