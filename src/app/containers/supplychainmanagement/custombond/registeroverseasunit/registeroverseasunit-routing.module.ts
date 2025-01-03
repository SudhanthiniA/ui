import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisteroverseasunitComponent } from './registeroverseasunit.component';

const routes: Routes = [ 
  {
    path : '',
    component : RegisteroverseasunitComponent
  }
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisteroverseasunitRoutingModule { }
