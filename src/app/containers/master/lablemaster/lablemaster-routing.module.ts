import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LablemasterComponent } from './lablemaster.component';
import { AddeditlablemasterComponent } from './addeditlablemaster/addeditlablemaster.component';
import { ViewlablemasterComponent } from './viewlablemaster/viewlablemaster.component';


const routes: Routes = [
  {
    path: 'list',
    component: LablemasterComponent
  },
  {
    path: 'add',
    component: AddeditlablemasterComponent
  },
  {
    path : 'edit/:Id',
    component: AddeditlablemasterComponent
  },
  {
    path : 'view/:Id',
    component : ViewlablemasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LablemasterRoutingModule { }
