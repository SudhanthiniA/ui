import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Flb11Component } from './flb11.component';
import { Addflb11Component } from './addflb11/addflb11.component';
import { Viewflb11Component } from './viewflb11/viewflb11.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { DraftfinalpasslistComponent } from './draftfinalpasslist/draftfinalpasslist.component';
import { ViewpasscanmodComponent } from './viewpasscanmod/viewpasscanmod.component';


const routes: Routes = [
  {
    path : 'list',
    component : Flb11Component
  },
  {
    path : 'draftfinallist',
    component : DraftfinalpasslistComponent
  },
  {
    path: 'add',
    component : Addflb11Component
  },
  {
    path: 'cancelmodify',
    component : ViewpasscanmodComponent
  },

{
  path: 'view',
  component : Viewflb11Component
},
  {
    path: 'acknowledgement',
    component : AcknowledgementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Flb11RoutingModule { }
