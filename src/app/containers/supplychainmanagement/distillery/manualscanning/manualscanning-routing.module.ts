import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualscanningComponent } from './manualscanning.component';
import { AddmanualscanningComponent } from './addmanualscanning/addmanualscanning.component';
import { ViewmanualscanningComponent } from './viewmanualscanning/viewmanualscanning.component';


const routes: Routes = [

  {
    path : 'list',
    component : ManualscanningComponent
  },
  {
    path: 'view',
    component : ViewmanualscanningComponent
  },
  {
    path : 'edit/:Id',
    component : AddmanualscanningComponent
  },
  {
    path : 'add',
    component : AddmanualscanningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualscanningRoutingModule { }
