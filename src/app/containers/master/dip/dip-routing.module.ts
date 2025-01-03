import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddipComponent } from './adddip/adddip.component';

import { DipComponent } from './dip.component';
import { ViewdipComponent } from './viewdip/viewdip.component';

const routes: Routes = [
  { path: 'list', component: DipComponent },
  { path: 'add', component: AdddipComponent},
  { path: 'edit/:id', component: AdddipComponent},
  { path: 'view/:id', component: ViewdipComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DipRoutingModule { }
