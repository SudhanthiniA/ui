import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsdoutsideupregistrationComponent } from  './csdoutsideupregistration.component';

import { EditoutsideComponent } from './editoutside/editoutside.component';
import { ViewoutsideComponent } from './viewoutside/viewoutside.component';

const routes: Routes = [
  {
    path : 'edit',
    component : EditoutsideComponent
  },
  {
    path : 'view',
    component : ViewoutsideComponent
  }, 
  {
    path : 'list',
    component : CsdoutsideupregistrationComponent
  }   
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsdoutsideupregistrationRoutingModule { }
