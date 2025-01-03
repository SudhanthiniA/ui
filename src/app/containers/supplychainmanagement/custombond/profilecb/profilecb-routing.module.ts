import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilecbComponent } from './profilecb.component';

const routes: Routes = [ 
  {
    path : 'view',
    component : ProfilecbComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilecbRoutingModule { }
 