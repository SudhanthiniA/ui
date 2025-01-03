import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualscanningComponent } from './manualscanning.component';
import { AddmanualscanningComponent } from './addmanualscanning/addmanualscanning.component';
import { ViewmanualscanningComponent } from './viewmanualscanning/viewmanualscanning.component';  

const routes: Routes = [ 
  {
    path : 'add',
    component : AddmanualscanningComponent
  },
  {
    path : 'view',
    component : ViewmanualscanningComponent
  },
  {
    path : 'list',
    component : ManualscanningComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualscanningRoutingModule { }
