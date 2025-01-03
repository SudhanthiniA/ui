import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd11RegisterOfIssuespiritComponent } from './pd11-register-of-issuespirit.component';
import { AddeditPd11Component } from './addedit-pd11/addedit-pd11.component';
import { ViewPd11Component } from './view-pd11/view-pd11.component';

const routes: Routes = [{ path: 'list', component: Pd11RegisterOfIssuespiritComponent },
{ path: 'add', component: AddeditPd11Component },
{ path: 'edit/:id', component: AddeditPd11Component },
{ path: 'view/:id', component: ViewPd11Component },
{ path: 'preview', component: ViewPd11Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd11RegisterOfIssuespiritRoutingModule { }
