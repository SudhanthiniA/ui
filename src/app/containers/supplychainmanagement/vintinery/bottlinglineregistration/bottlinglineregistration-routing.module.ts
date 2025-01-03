import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewlineregistrationComponent } from './addnewlineregistration/addnewlineregistration.component';
import { ViewnewlineregistrationComponent } from './viewnewlineregistration/viewnewlineregistration.component'; 
import { BottlinglineregistrationComponent } from './bottlinglineregistration.component';   

const routes: Routes = [ 
  {
    path : 'add',
    component : AddnewlineregistrationComponent
  },
  {
    path : 'view',
    component : ViewnewlineregistrationComponent
  },
  {
    path : 'list',
    component : BottlinglineregistrationComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottlinglineregistrationRoutingModule { }
