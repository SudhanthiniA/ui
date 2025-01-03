import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pd26AccompanypassComponent } from './pd26-accompanypass.component';
import { AddEditPd26Component } from './add-edit-pd26/add-edit-pd26.component';
import { ViewPd26Component } from './view-pd26/view-pd26.component';
import { Pd26AcknowledgementComponent } from './pd26-acknowledgement/pd26-acknowledgement.component';

const routes: Routes = [{ path: 'list', component: Pd26AccompanypassComponent },
{ path: 'add', component: AddEditPd26Component },
{ path: 'edit', component: AddEditPd26Component },
{ path: 'preview', component: ViewPd26Component },
{ path: 'view', component: ViewPd26Component },
{ path: 'acknowledgement', component: Pd26AcknowledgementComponent },  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pd26AccompanypassRoutingModule { }
