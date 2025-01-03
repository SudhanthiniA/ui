import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd26imflexportComponent } from './pd26imflexport.component';
import { Addpd26imflexportComponent } from './addpd26imflexport/addpd26imflexport.component';
import { Viewpd26imflexportComponent } from './viewpd26imflexport/viewpd26imflexport.component';
import { VerifiacknowlistComponent } from './verifiacknowlist/verifiacknowlist.component';

const routes: Routes = [
  { path: 'list', component: Pd26imflexportComponent },
  { path: 'verifylist', component: VerifiacknowlistComponent },
  {
  path : 'view',
  component : Viewpd26imflexportComponent
},
{
  path : 'add',
  component : Addpd26imflexportComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd26imflexportRoutingModule { }
