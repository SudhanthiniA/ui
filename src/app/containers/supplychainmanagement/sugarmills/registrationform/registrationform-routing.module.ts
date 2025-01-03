import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationformComponent } from './registrationform.component';
import { AddregistrationformComponent } from './addregistrationform/addregistrationform.component';


const routes: Routes = [
  {
    path : '',
    component : RegistrationformComponent
  },
  {
    path : 'add',
    component : AddregistrationformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationformRoutingModule { }
