import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { 
    path: 'transportpassgeneration', loadChildren: () => import('./transportpassgeneration/transportpassgeneration.module').then(m => m.TransportpassgenerationModule) 
  },
  { 
    path: 'requestfortpcancelation', loadChildren: () => import('./requestfortpcancelation/requestfortpcancelation.module').then(m => m.RequestfortpcancelationModule)
  },
  { 
    path: 'transpassgenerationnew', loadChildren: () => import('./transpassgenerationnew/transpassgenerationnew.module').then(m => m.TranspassgenerationnewModule) 
  },
  { 
    path: 'transpasssecondinput', loadChildren: () => import('./transportpass-secondinput/transportpass-secondinput.module').then(m => m.TransportpassSecondinputModule) 
  },
  { 
    path: 'officerloginapproval', loadChildren: () => import('./officerloginapproval/officerloginapproval.module').then(m => m.OfficerloginapprovalModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportpassRoutingModule { }
