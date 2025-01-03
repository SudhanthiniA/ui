import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewlineregistrationComponent } from './addnewlineregistration/addnewlineregistration.component';
import { ViewnewlineregistrationComponent } from './viewnewlineregistration/viewnewlineregistration.component'; 
import { NewlineregistrationComponent } from './newlineregistration.component';   

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
    component : NewlineregistrationComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewlineregistrationRoutingModule { }
