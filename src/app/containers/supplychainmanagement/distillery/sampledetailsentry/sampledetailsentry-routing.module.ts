import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampledetailsentryComponent } from './sampledetailsentry.component';
import { ViewsampledetailsentryComponent } from './viewsampledetailsentry/viewsampledetailsentry.component';
import { AddeditsampledetailsentryComponent } from './addeditsampledetailsentry/addeditsampledetailsentry.component';


const routes: Routes = [
  {
    path : 'list',
    component : SampledetailsentryComponent
  },
  {
    path : 'view/:Id',
    component : ViewsampledetailsentryComponent
  },
  {
    path : 'add',
    component : AddeditsampledetailsentryComponent
  },
  {
    path : 'edit/:Id',
    component : AddeditsampledetailsentryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampledetailsentryRoutingModule { }
