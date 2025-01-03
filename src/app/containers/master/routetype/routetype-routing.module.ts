import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutetypeComponent } from './routetype.component';
import { AddroutetypeComponent } from './addroutetype/addroutetype.component';
import { ViewroutetypeComponent } from './viewroutetype/viewroutetype.component';

const routes: Routes = [
  { path: 'list', component: RoutetypeComponent },
  { path: 'add', component: AddroutetypeComponent },
  { path: 'view', component: ViewroutetypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutetypeRoutingModule { }
