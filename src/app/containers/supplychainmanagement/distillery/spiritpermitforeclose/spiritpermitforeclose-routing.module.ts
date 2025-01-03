import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddspiritpermitforecloseComponent } from './addspiritpermitforeclose/addspiritpermitforeclose.component';
import { ViewspiritpermitforecloseComponent } from './viewspiritpermitforeclose/viewspiritpermitforeclose.component';
import { SpiritpermitforecloseComponent } from './spiritpermitforeclose.component';

const routes: Routes = [
  { path: 'list', component: SpiritpermitforecloseComponent},
  {path: 'add', component: AddspiritpermitforecloseComponent},
  {path: 'view', component: ViewspiritpermitforecloseComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpiritpermitforecloseRoutingModule { }
