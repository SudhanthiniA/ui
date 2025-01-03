import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstmasterComponent } from './gstmaster.component';
import { AddgstmasterComponent } from './addgstmaster/addgstmaster.component';
import { ViewgstmasterComponent } from './viewgstmaster/viewgstmaster.component';


const routes: Routes = [
  {
    path : 'list',
    component : GstmasterComponent
  },
  {
    path : 'add',
    component : AddgstmasterComponent
  },
  {
    path : 'edit/:Id',
    component : AddgstmasterComponent
  },
  {
    path : 'view/:Id',
    component : ViewgstmasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GstmasterRoutingModule { }
