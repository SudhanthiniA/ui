import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistrationandmapcbComponent } from './registrationandmapcb.component';
import { AddregistrationandmapcbComponent } from './addregistrationandmapcb/addregistrationandmapcb.component';
import { ViewregistrationandmapcbComponent } from './viewregistrationandmapcb/viewregistrationandmapcb.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : RegistrationandmapcbComponent
  },
  {
    path : 'add',
    component : AddregistrationandmapcbComponent
  },
  {
    path : 'view',
    component : ViewregistrationandmapcbComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationandmapcbRoutingModule { }
