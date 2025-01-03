import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd22RegisterofissuanceComponent } from './pd22-registerofissuance.component';
import { ViewPd22Component } from './view-pd22/view-pd22.component';
import { AddPd22Component } from './add-pd22/add-pd22.component';

const routes: Routes = [{ path: 'list', component: Pd22RegisterofissuanceComponent},
{ path: 'view/:id', component: ViewPd22Component },
{ path: 'edit/:id', component: AddPd22Component },
{ path: 'add', component: AddPd22Component },
{ path: 'preview', component: ViewPd22Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd22RegisterofissuanceRoutingModule { }
