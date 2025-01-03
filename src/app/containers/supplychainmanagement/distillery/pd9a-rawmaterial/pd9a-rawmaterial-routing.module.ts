import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditPd9aComponent } from './addedit-pd9a/addedit-pd9a.component';

import { Pd9aRawmaterialComponent } from './pd9a-rawmaterial.component';
import { ViewPd9aComponent } from './view-pd9a/view-pd9a.component';

const routes: Routes = [
  { path: 'list', component: Pd9aRawmaterialComponent },
  { path: 'add', component: AddeditPd9aComponent },
  { path: 'edit/:id', component: AddeditPd9aComponent },
  { path: 'preview', component: ViewPd9aComponent },
  { path: 'view/:id', component: ViewPd9aComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd9aRawmaterialRoutingModule { }
