import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistrationandmapdebondComponent } from './registrationandmapdebond.component';
import { AddregistrationandmapdebondComponent } from './addregistrationandmapdebond/addregistrationandmapdebond.component';
import { ViewregistrationandmapdebondComponent } from './viewregistrationandmapdebond/viewregistrationandmapdebond.component';

const routes: Routes = [ 
  {
    path : 'list',
    component : RegistrationandmapdebondComponent
  },
  {
    path : 'add',
    component : AddregistrationandmapdebondComponent
  },
  {
    path : 'view',
    component : ViewregistrationandmapdebondComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationandmapdebondRoutingModule { }
