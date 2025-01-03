import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd7gaugeregisterComponent } from './pd7gaugeregister.component';
import { Addpd7gaugeregisterComponent } from './addpd7gaugeregister/addpd7gaugeregister.component';
import { Viewpd7gaugeregisterComponent } from './viewpd7gaugeregister/viewpd7gaugeregister.component';

const routes: Routes = [
  { path: 'list', component: Pd7gaugeregisterComponent },
  { path: 'add', component: Addpd7gaugeregisterComponent },
  { path: 'view', component: Viewpd7gaugeregisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd7gaugeregisterRoutingModule { }
