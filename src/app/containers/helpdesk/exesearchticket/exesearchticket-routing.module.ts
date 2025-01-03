import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExesearchticketComponent } from './exesearchticket.component';
import { ViewexesearchticketComponent } from './viewexesearchticket/viewexesearchticket.component';

const routes: Routes = [
  { path: 'list', component: ExesearchticketComponent },
  { path: 'view', component: ViewexesearchticketComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExesearchticketRoutingModule { }
