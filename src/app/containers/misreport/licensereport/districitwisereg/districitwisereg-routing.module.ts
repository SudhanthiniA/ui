import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistricitwiseregComponent } from './districitwisereg.component';
import { LicensetypeComponent } from './licensetype/licensetype.component';

const routes: Routes = [
  { path: 'list', component: DistricitwiseregComponent },
  { path: 'licenselist', component: LicensetypeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistricitwiseregRoutingModule { }
