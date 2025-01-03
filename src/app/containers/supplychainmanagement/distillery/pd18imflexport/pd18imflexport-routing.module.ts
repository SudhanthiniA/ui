import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd18imflexportComponent } from './pd18imflexport.component';
import { Addpd18imflexportComponent } from './addpd18imflexport/addpd18imflexport.component';
import { Viewpd18imflexportComponent } from './viewpd18imflexport/viewpd18imflexport.component';

const routes: Routes = [
  { path: 'list', component: Pd18imflexportComponent },
{
  path : 'view',
  component : Viewpd18imflexportComponent
},
{
  path : 'add',
  component : Addpd18imflexportComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd18imflexportRoutingModule { }
